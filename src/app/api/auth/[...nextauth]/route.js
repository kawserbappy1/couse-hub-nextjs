import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { MongoClient } from "mongodb";

// MongoDB connection
const client = new MongoClient(process.env.MONGODB_URI);
let db;

async function connectToDatabase() {
  if (!db) {
    await client.connect();
    db = client.db();
  }
  return db;
}

// Helper function to get users collection
async function getUsersCollection() {
  const database = await connectToDatabase();
  return database.collection("users");
}

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        name: { label: "Name", type: "text", optional: true },
        photoURL: { label: "Photo URL", type: "text", optional: true },
        action: { label: "Action", type: "text", optional: true },
      },

      async authorize(credentials, req) {
        try {
          const { name, photoURL, action } = credentials;
          const usersCollection = await getUsersCollection();

          if (action === "signup") {
            console.log("Signup attempt for:", credentials.email);

            if (!name || !credentials?.email || !credentials?.password) {
              console.log("Missing required fields for signup");
              return null;
            }

            // Check if user already exists in MongoDB
            const existingUser = await usersCollection.findOne({
              email: credentials.email,
            });

            if (existingUser) {
              console.log("User already exists:", credentials.email);
              throw new Error("User already exists");
            }

            const hashedPassword = await bcrypt.hash(credentials.password, 10);

            const newUser = {
              name,
              email: credentials.email,
              image:
                photoURL ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  name
                )}&background=6366f1&color=fff`,
              password: hashedPassword,
              provider: "credentials",
              createdAt: new Date(),
            };

            // Save to MongoDB
            const result = await usersCollection.insertOne(newUser);
            console.log("New user created:", newUser.email);

            return {
              id: result.insertedId.toString(),
              name: newUser.name,
              email: newUser.email,
              image: newUser.image,
            };
          }

          console.log("Login attempt for:", credentials.email);

          // Find user in MongoDB
          const user = await usersCollection.findOne({
            email: credentials.email,
          });

          if (!user) {
            console.log("User not found:", credentials.email);
            return null;
          }

          // For Google users who don't have password
          if (!user.password) {
            console.log(
              "No password set for user (Google user):",
              credentials.email
            );
            return null;
          }

          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          console.log("Password valid:", isValid);

          if (!isValid) {
            console.log("Invalid password for:", credentials.email);
            return null;
          }

          console.log("Login successful for:", user.email);
          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            image: user.image,
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      // Persist user id to token on sign in
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      // Send user id to client
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },

    async signIn({ user, account, profile }) {
      try {
        // Handle Google sign in
        if (account.provider === "google") {
          const usersCollection = await getUsersCollection();

          // Check if user exists in MongoDB
          const existingUser = await usersCollection.findOne({
            email: user.email,
          });

          if (!existingUser) {
            // Create new user for Google sign in
            const newUser = {
              name: user.name,
              email: user.email,
              image: user.image,
              password: null, // Google users don't have password
              provider: "google",
              googleId: profile.sub,
              createdAt: new Date(),
            };

            await usersCollection.insertOne(newUser);
            console.log("New Google user created:", user.email);
          } else {
            // Update existing user if needed
            await usersCollection.updateOne(
              { email: user.email },
              {
                $set: {
                  name: user.name,
                  image: user.image,
                  lastLogin: new Date(),
                },
              }
            );
            console.log("Google user logged in:", user.email);
          }
        }
        return true;
      } catch (error) {
        console.error("SignIn callback error:", error);
        return false;
      }
    },

    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },

  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },

  // Add these required configurations
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };

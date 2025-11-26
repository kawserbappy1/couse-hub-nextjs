import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

let users = [];

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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

          if (action === "signup") {
            console.log("Signup attempt for:", credentials.email);

            if (!name || !credentials?.email || !credentials?.password) {
              console.log("Missing required fields for signup");
              return null;
            }

            const existingUser = users.find(
              (u) => u.email === credentials.email
            );
            if (existingUser) {
              console.log("User already exists:", credentials.email);
              throw new Error("User already exists");
            }

            const hashedPassword = await bcrypt.hash(credentials.password, 10);

            const newUser = {
              id: Date.now().toString(),
              name,
              email: credentials.email,
              image:
                photoURL ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  name
                )}&background=6366f1&color=fff`,
              password: hashedPassword,
            };

            users.push(newUser);
            console.log("New user created:", newUser.email);

            return {
              id: newUser.id,
              name: newUser.name,
              email: newUser.email,
              image: newUser.image,
            };
          }

          console.log("Login attempt for:", credentials.email);
          const user = users.find((u) => u.email === credentials.email);

          if (!user) {
            console.log("User not found:", credentials.email);
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
            id: user.id,
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
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
});

export { handler as GET, handler as POST };

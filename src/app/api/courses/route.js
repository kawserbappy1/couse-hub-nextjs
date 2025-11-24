import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("course-hub");
    const courses = await db.collection("courses").find({}).toArray();
    return new Response(JSON.stringify(courses), { status: 200 });
  } catch (err) {
    return new Response("Failed to fetch courses", { status: 500 });
  }
}

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("course-hub");
    const data = await req.json();
    await db.collection("courses").insertOne(data);
    return new Response(JSON.stringify({ message: "Course added!" }), {
      status: 201,
    });
  } catch (err) {
    return new Response("Failed to add course", { status: 500 });
  }
}

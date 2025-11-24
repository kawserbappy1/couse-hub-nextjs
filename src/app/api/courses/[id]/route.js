import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const resolvedParams = await params; // unwrap the promise
  const { id } = resolvedParams;

  try {
    const client = await clientPromise;
    const db = client.db("course-hub");

    const course = await db
      .collection("courses")
      .findOne({ _id: new ObjectId(id) });

    if (!course) {
      return new Response(JSON.stringify({ message: "Course not found" }), {
        status: 404,
      });
    }

    course._id = course._id.toString();

    return new Response(JSON.stringify(course), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to fetch course", { status: 500 });
  }
}

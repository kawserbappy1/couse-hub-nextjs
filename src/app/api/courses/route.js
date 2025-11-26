import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    console.log("Fetching courses from MongoDB...");

    const client = await clientPromise;
    const db = client.db("course-hub");

    const courses = await db
      .collection("courses")
      .find({})
      .sort({ _id: -1 })
      .toArray();

    console.log(`Found ${courses.length} courses`);

    return NextResponse.json(courses);
  } catch (error) {
    console.error("MongoDB Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("course-hub");
    const courseData = await request.json();

    const result = await db.collection("courses").insertOne({
      ...courseData,
      createdAt: new Date(),
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error creating course:", error);
    return NextResponse.json(
      { error: "Failed to create course" },
      { status: 500 }
    );
  }
}

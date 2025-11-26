import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(request) {
  try {
    console.log("Fetching courses from MongoDB...");

    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit")) || 0;

    const client = await clientPromise;

    const db = client.db("course-hub");

    let coursesQuery = db.collection("courses").find({}).sort({ _id: -1 });

    if (limit > 0) {
      coursesQuery = coursesQuery.limit(limit);
    }

    const courses = await coursesQuery.toArray();

    console.log(`Found ${courses.length} courses`);

    return NextResponse.json(courses);
  } catch (error) {
    console.error("MongoDB Error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch courses",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("course-hub");
    const courseData = await request.json();

    if (!courseData.title || !courseData.description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    const result = await db.collection("courses").insertOne({
      ...courseData,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      insertedId: result.insertedId,
      message: "Course created successfully",
    });
  } catch (error) {
    console.error("Error creating course:", error);
    return NextResponse.json(
      { error: "Failed to create course" },
      { status: 500 }
    );
  }
}

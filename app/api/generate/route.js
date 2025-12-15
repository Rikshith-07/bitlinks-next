import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;

    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const existing = await collection.findOne({ shorturl: body.shorturl });

    if (existing) {
      return NextResponse.json(
        { success: false, message: "URL already exists" },
        { status: 409 }
      );
    }

    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { success: true, message: "URL Generated Successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

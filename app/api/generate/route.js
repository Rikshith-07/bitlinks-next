import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json().catch(err => {
      console.error("JSON parse error:", err);
      throw new Error("Invalid JSON");
    });

    console.log("POST /api/generate body:", body);

    if (!body?.url || !body?.shorturl) {
      return NextResponse.json({ success:false, error:true, message: "Missing url or shorturl" }, { status:400 });
    }

    const client = await clientPromise;
    console.log("client readyState:", !!client?.db);

    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return NextResponse.json({ success:false, error:true, message: "URL already exists!" }, { status:409 });
    }

    const result = await collection.insertOne({ url: body.url, shorturl: body.shorturl, createdAt: new Date() });
    console.log("insert result:", result.insertedId);

    return NextResponse.json({ success:true, error:false, message: "URL Generated Successfully", id: result.insertedId }, { status:201 });
  } catch (err) {
    console.error("POST /api/generate ERROR:", err);
    return NextResponse.json({ success:false, error:true, message: err.message || "Internal server error" }, { status:500 });
  }
}

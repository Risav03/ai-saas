import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import path from "path";
import { readFile } from "fs/promises";

export async function GET() {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectDB();
  const user = await User.findOne({ email: session.user.email }).lean();

  if (!user?.hasPurchasedBook) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const filePath = path.join(process.cwd(), "private", "how-to-hire-an-ai.pdf");

  try {
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="How-to-Hire-an-AI.pdf"',
      },
    });
  } catch {
    return NextResponse.json(
      { error: "File not found. Please contact support." },
      { status: 404 }
    );
  }
}

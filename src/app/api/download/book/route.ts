import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

const GOOGLE_DRIVE_FILE_ID = process.env.GOOGLE_DRIVE_FILE_ID || "1a2b3c4d5e6f7g8h9i0j"; // Replace with your actual file ID

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

  try {
    const driveUrl = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`;
    const response = await fetch(driveUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch PDF from Google Drive");
    }

    const fileBuffer = await response.arrayBuffer();

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

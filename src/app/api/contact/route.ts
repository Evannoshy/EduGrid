import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Mock Database using a local JSON file
const dbPath = path.join(process.cwd(), "data", "submissions.json");

// Ensure data directory exists
const initializeDB = () => {
  const dir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify([]));
  }
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, institution } = body;

    // Server-side validation
    if (!name || !email || !institution) {
      return NextResponse.json(
        { error: "Name, Work Email, and Institution Name are required." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Save to mock database
    initializeDB();
    const currentData = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
    
    const newSubmission = {
      id: Date.now().toString(),
      name,
      email,
      institution,
      timestamp: new Date().toISOString()
    };
    
    currentData.push(newSubmission);
    fs.writeFileSync(dbPath, JSON.stringify(currentData, null, 2));

    return NextResponse.json(
      { message: "Submission successful", data: newSubmission },
      { status: 201 }
    );

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

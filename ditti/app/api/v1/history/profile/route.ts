import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ message: "helloooo world in routee" });
}

export async function POST(request: Request) {
  return NextResponse.json({ message: "helloooo world in routee (post)" });
}

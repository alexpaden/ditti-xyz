import { NextResponse } from "next/server";

export async function GET(request: Request, { params }) {
  const { user } = params;
  const userValue = isNaN(user) ? user : parseInt(user);
  const userType = isNaN(userValue) ? "string" : "number";
  return NextResponse.json({
    message: `helloooo world in /user followers for ${userType} ${userValue}`,
  });
}

export async function POST(request: Request, { params }) {
  const { user } = params;
  const userValue = isNaN(user) ? user : parseInt(user);
  const userType = isNaN(userValue) ? "string" : "number";
  return NextResponse.json({
    message: `helloooo world in followers (post) for ${userType} ${userValue}`,
  });
}

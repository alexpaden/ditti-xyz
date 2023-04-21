import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }) {
  //console.log(request);
  const { fid } = params; // Updated line

  if (fid) {
    return NextResponse.json({ fid });
  } else {
    return NextResponse.json({
      status: 404,
      error: 'Not Found',
      message: 'The requested resource could not be found on this server.',
    });
  }
}

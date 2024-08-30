import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const { password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  return NextResponse.json({ hashedPassword });
}

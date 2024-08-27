import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

interface Author {
  id: number;
  name: string;
  icon: string;
  change_all: number;
  change_month: number;
  change_week: number;
  change_day: number;
  nft_sold_all: number;
  nft_sold_month: number;
  nft_sold_week: number;
  nft_sold_day: number;
  volume_all: number;
  volume_month: number;
  volume_week: number;
  volume_day: number;
  date: string;
}

export async function GET(req: NextRequest) {
  try {
    const { rows } = await sql<Author>`SELECT * FROM authors`;
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching authors:", error);
    return NextResponse.json(
      { error: "Failed to fetch authors" },
      { status: 500 }
    );
  }
}

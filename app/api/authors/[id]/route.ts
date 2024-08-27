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
export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = params;

  try {
    const { rows } = await sql<Author>`SELECT * FROM authors WHERE id=${id}`;
    if (rows.length === 0) {
      return NextResponse.json({ error: "Author not found" }, { status: 404 });
    }
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Error fetching author:", error);
    return NextResponse.json(
      { error: "Failed to fetch author" },
      { status: 500 }
    );
  }
}

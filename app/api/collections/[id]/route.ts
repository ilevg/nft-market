import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

interface Product {
  id: number;
  name: string;
  author: string;
  price: number;
  bid: number;
  create_date: string;
  description: string;
  collection: string;
  collection_info: string;
  auction_end: string;
  main_img: string;
  logo: string;
  author_icon: string;
  date: string;
}
export async function GET(
  req: NextRequest,
  { params }: { params: { id: number; collection: string } }
) {
  const { id } = params;
  const { collection } = params;

  try {
    const { rows } =
      await sql<Product>`SELECT * FROM products WHERE collection=${collection}`;
    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Collection not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Error fetching : collection", error);
    return NextResponse.json(
      { error: "Failed to fetch collection" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { db } from "../../../../../database/drizzle";
import { dreamCardsTable } from "../../../../../database/schema";

export async function GET() {
    try {
        const dreams = await db.select().from(dreamCardsTable);
        return NextResponse.json(dreams);
    } catch (error) {
        console.error("Error fetching all dreamcards:", error);
        return NextResponse.json({ error: "Failed to fetch dreamcards" }, { status: 500 })
    }
}
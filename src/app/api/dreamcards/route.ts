import { NextResponse } from "next/server";
import { auth } from "../../../../auth";
import z from "zod";
import { db } from "../../../../database/drizzle";
import { dreamCardsTable } from "../../../../database/schema";
import { eq } from "drizzle-orm";

const createDreamSchema = z.object({
  message: z.string().trim().min(10).max(200),
  tags: z.array(z.string()).min(1, "Add at least one tag"),
  vibe: z.string().min(1, "Select one vibe"),
});

export async function POST(req: Request) {
  const session = await auth();

//   if (!session?.user) {
//     return NextResponse.json({ error: "User unauthorized" }, { status: 401 });
//   }

  const body = await req.json();

  const parsedData = createDreamSchema.safeParse(body);
  console.log(parsedData);

  if (!parsedData.success) {
    return NextResponse.json(
      { error: parsedData.error.flatten() },
      { status: 400 }
    );
  }

  const { message, tags, vibe } = parsedData.data;

  const [dreams] = await db
    .insert(dreamCardsTable)
    .values({
      message,
      tags,
      vibe,
      userId: session?.user?.id || null,
    })
    .returning();
  console.log(dreams);

  return NextResponse.json(dreams);
}

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const dreams = await db
    .select()
    .from(dreamCardsTable)
    .where(eq(dreamCardsTable.userId, session.user.id));

  return NextResponse.json(dreams);
}

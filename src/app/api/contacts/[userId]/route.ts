import { db } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;

  try {
    const contacts = await db.contact.findMany({
      where: { userId },
    });

    return Response.json({ contacts });
  } catch (error) {
    return Response.json({ error: "Something went wrong" });
  }
}

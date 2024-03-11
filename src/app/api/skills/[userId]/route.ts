import { db } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;

  try {
    const skills = await db.skill.findMany({
      where: { userId },
    });

    return Response.json({ skills });
  } catch (error) {
    return Response.json({ error: "Something went wrong" });
  }
}

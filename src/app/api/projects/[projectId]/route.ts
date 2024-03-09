import { db } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;

  try {
    const projects = await db.project.findMany({
      where: { userId },
    });

    return Response.json({ projects });
  } catch (error) {
    return Response.json({ error: "Something went wrong" });
  }
}

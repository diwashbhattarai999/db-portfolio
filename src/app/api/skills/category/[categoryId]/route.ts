
import { db } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { categoryId: string } }
) {
  const categoryId = params.categoryId;

  try {
    const category = await db.category.findUnique({
      where: { id: categoryId },
    });

    return Response.json({ category });
  } catch (error) {
    return Response.json({ error: "Something went wrong" });
  }
}

import { useEffect, useState } from "react";
import axios from "axios";
import { Skill } from "@prisma/client";

export interface SkillsWithCategory extends Skill {
  category: string;
}

const useSkillsData = (userId: string | undefined) => {
  const [skillsData, setSkillsData] = useState<SkillsWithCategory[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userId) {
          const { data } = await axios.get(`/api/skills/${userId}`);

          // Fetch category names for each skill
          const skillsWithCategory: SkillsWithCategory[] = await Promise.all(
            data.skills.map(async (skill: Skill) => {
              const categoryData = await axios
                .get(`/api/skills/category/${skill.categoryId}`)
                .then((res) => res.data.category.name);

              return {
                id: skill.id,
                image: skill.image,
                name: skill.name,
                category: categoryData,
                userId: skill.userId,
                categoryId: skill.categoryId,
              };
            })
          );

          setSkillsData(skillsWithCategory);
          setLoading(false);
        }
      } catch (error: any) {
        console.error("Error fetching skills data:", error);
        setError(error);
        setLoading(false);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  return { skillsData, loading, error };
};

export default useSkillsData;

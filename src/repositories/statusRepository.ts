import { prisma } from '../config/database.js';

export async function getStatus(id: number) {
  return await prisma.personage.findUnique({
    where: { id },
    include: {
      Skill: true,
    },
  });
}

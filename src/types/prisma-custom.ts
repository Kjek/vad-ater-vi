import type { Prisma, PrismaClient } from '@prisma/client';

export interface PrismaInterface {
  prisma: PrismaType;
}

export type PrismaType = PrismaClient<Prisma.PrismaClientOptions, undefined>;

import { Elysia } from 'elysia'
import { PrismaClient } from '@prisma/client'

// Single Prisma client for the whole app
export const prisma = new PrismaClient()

// Elysia plugin that decorates the context with `prisma`
export const prismaPlugin = new Elysia({ name: 'prisma' })
  .decorate('prisma', prisma)
  .onStop(async () => {
    await prisma.$disconnect()
  })

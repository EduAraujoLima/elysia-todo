import { Elysia } from 'elysia'
import { tasksRoutes } from './routes/tasks'
import { prismaPlugin } from './plugins/prisma'

export const app = new Elysia()
  .use(prismaPlugin)
  .get('/', () => ({ name: 'TODO API', version: '2.0.0', routes: ['/tasks'] }))
  .use(tasksRoutes)

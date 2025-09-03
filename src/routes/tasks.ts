import { Elysia, t } from 'elysia'
import { IdParams } from '../schemas/task'
import { Task, TaskInputCreate, TaskInputUpdate } from '../../generated/prismabox/barrel'
import { prismaPlugin } from '../plugins/prisma'
import { logger } from '@bogeychan/elysia-logger'

export const tasksRoutes = new Elysia({ prefix: '/tasks' })
  .use(prismaPlugin)
  .use(
    logger({
      level: "error",
    })
  )
  .get('/', async ({ prisma }) => {
    const tasks = await prisma.task.findMany({ orderBy: { id: 'desc' } })
    return tasks
  }, {
    response: t.Array(Task)
  })
  .get('/:id', async ({ prisma, params, set }) => {
    const { id } = params
    const task = await prisma.task.findUnique({ where: { id } })
    if (!task) {
      set.status = 404
      return { error: 'Tarefa não encontrada' }
    }
    return task
  }, {
    params: IdParams,
    response: {
      200: Task,
      404: t.Object({ error: t.String() })
    }
  })
  .post('/', async ({ prisma, body, set }) => {
    const created = await prisma.task.create({
      data: {
        description: body.description,
        done: body.done ?? false
      }
    })
    set.status = 201
    return created
  }, {
    body: TaskInputCreate,
    response: Task
  })
  .put('/:id', async ({ prisma, params, body, set }) => {
    const { id } = params

    const exists = await prisma.task.findUnique({ where: { id } })
    if (!exists) {
      set.status = 404
      return { error: 'Tarefa não encontrada' }
    }

    const updated = await prisma.task.update({
      where: { id },
      data: {
        description: body.description,
        done: body.done
      }
    })

    return updated
  }, {
    params: IdParams,
    body: TaskInputUpdate,
    response: {
      200: Task,
      404: t.Object({ error: t.String() })
    }
  })

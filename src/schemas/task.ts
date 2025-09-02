import { t } from 'elysia'
import type { Task } from '@prisma/client'

export const TaskDTO = t.Object({
  id: t.Integer(),
  description: t.String({ minLength: 1 }),
  done: t.Boolean(),
  createdAt: t.String({ format: 'date-time' }),
  updatedAt: t.String({ format: 'date-time' })
})

export const TaskCreateBody = t.Object({
  description: t.String({ minLength: 1 }),
  // permitir setar opcionalmente, mas default = false
  done: t.Optional(t.Boolean())
})

export const TaskUpdateBody = t.Object({
  description: t.String({ minLength: 1 }),
  done: t.Boolean()
})

export const TaskPatchBody = t.Object({
  description: t.Optional(t.String({ minLength: 1 })),
  done: t.Optional(t.Boolean())
})

export const IdParams = t.Object({
  id: t.Numeric()
})

export type TaskDTOType = typeof TaskDTO.static
export type TaskCreateBodyType = typeof TaskCreateBody.static
export type TaskUpdateBodyType = typeof TaskUpdateBody.static
export type TaskPatchBodyType = typeof TaskPatchBody.static
export type IdParamsType = typeof IdParams.static

export const toTaskDTO = (task: Task): TaskDTOType => ({
  id: task.id,
  description: task.description,
  done: task.done,
  createdAt: task.createdAt.toISOString(),
  updatedAt: task.updatedAt.toISOString()
})

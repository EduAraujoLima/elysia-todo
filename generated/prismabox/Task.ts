import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const TaskPlain = t.Object(
  {
    id: t.Integer(),
    description: t.String(),
    done: t.Boolean(),
    createdAt: t.Date(),
    updatedAt: t.Date(),
  },
  { additionalProperties: false },
);

export const TaskRelations = t.Object({}, { additionalProperties: false });

export const TaskPlainInputCreate = t.Object(
  { description: t.String(), done: t.Optional(t.Boolean()) },
  { additionalProperties: false },
);

export const TaskPlainInputUpdate = t.Object(
  { description: t.Optional(t.String()), done: t.Optional(t.Boolean()) },
  { additionalProperties: false },
);

export const TaskRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const TaskRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const TaskWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          description: t.String(),
          done: t.Boolean(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Task" },
  ),
);

export const TaskWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ id: t.Integer() }, { additionalProperties: false }),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ id: t.Integer() })], {
          additionalProperties: false,
        }),
        t.Partial(
          t.Object({
            AND: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            NOT: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            OR: t.Array(Self, { additionalProperties: false }),
          }),
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object(
            {
              id: t.Integer(),
              description: t.String(),
              done: t.Boolean(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Task" },
);

export const TaskSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      description: t.Boolean(),
      done: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const TaskInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const TaskOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      done: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updatedAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Task = t.Composite([TaskPlain, TaskRelations], {
  additionalProperties: false,
});

export const TaskInputCreate = t.Composite(
  [TaskPlainInputCreate, TaskRelationsInputCreate],
  { additionalProperties: false },
);

export const TaskInputUpdate = t.Composite(
  [TaskPlainInputUpdate, TaskRelationsInputUpdate],
  { additionalProperties: false },
);

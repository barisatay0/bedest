import { t, type TSchema } from "elysia";

export class UtilRouter {
  static defSchema<T extends TSchema>(schema: T) {
    return schema;
  }

  static defPaginatedSchema<T extends TSchema>(schema: T) {
    return t.Object({
      data: t.Array(schema),
      meta: t.Object({
        total: t.Number(),
        page: t.Number(),
        limit: t.Number(),
        totalPages: t.Number(),
      }),
    });
  }

  static defResponse<T>(data: T) {
    return data;
  }
}

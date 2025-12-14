import type { Context } from 'hono'
import { formatAppError, isAppError, makeError } from '../errors/error'

// Handle typed erorrs
export function handleError(ctx: Context, err: unknown) {
  if (isAppError(err)) {
    return ctx.json(formatAppError(err), err.status as any)
  } else {
    const fallback = makeError(
      'UnknownError',
      500,
      'An unknown error occurred.'
    )
    return ctx.json(formatAppError(fallback), fallback.status as any)
  }
}

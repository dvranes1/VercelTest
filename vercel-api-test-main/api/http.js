import { formatAppError, isAppError, makeError } from './error.js'

export function handleError(ctx, err) {
  if (isAppError(err)) {
    return ctx.json(formatAppError(err), err.status)
  }

  const fallback = makeError(
    'UnknownError',
    500,
    'An unknown error occurred.'
  )
  return ctx.json(formatAppError(fallback), fallback.status)
}

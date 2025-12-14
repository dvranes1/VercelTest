export function makeError(type, status, message) {
  return { type, status, message }
}

export function isAppError(err) {
  return (
    typeof err === 'object' &&
    err !== null &&
    'status' in err &&
    'message' in err &&
    typeof err.status === 'number' &&
    typeof err.message === 'string'
  )
}

export function formatAppError(error) {
  return {
    type: error.type,
    status: error.status,
    message: error.message,
  }
}

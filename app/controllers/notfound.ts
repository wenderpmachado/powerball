class APIError extends Error {
  status?: number;
}

// 404 Handler
function notFound(): void {
  console.error("Route Not Found")
  const err = new APIError('Route Not Found')
  err.status = 404
  throw err
}

export default notFound

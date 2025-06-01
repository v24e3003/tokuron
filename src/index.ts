import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { zValider } from '@hono/zod-valodator'
import { z, createRoute, OpenAPIHono } from '@hono/zod-openapi'
import { swaggerUI } from '@hono/swagger-ui'
const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api', (c) => {
  const query = c.req.query('name');
  return c.json({message: `Hello ${query}!`})
})


export default app

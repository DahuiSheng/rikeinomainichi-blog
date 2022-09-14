import { createClient } from 'microcms-js-sdk'
export const client = createClient({
  serviceDomain: 'rikeinomainichi',
  apiKey: process.env.API_KEY || '',
})
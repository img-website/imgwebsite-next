'use server'
import { cookies } from 'next/headers'

export async function refreshModuleServer(module, url) {
  const token = cookies().get('token')?.value
  const headers = token ? { Authorization: `Bearer ${token}` } : {}
  const res = await fetch(url, { cache: 'no-store', headers })
  const json = await res.json()
  if (json.success) {
    let modules = {}
    const cookieData = cookies().get('api-data')?.value
    if (cookieData) {
      try {
        modules = JSON.parse(cookieData)
      } catch (e) {
        modules = {}
      }
    }
    modules[module] = json.data
    cookies().set('api-data', JSON.stringify(modules), { path: '/', maxAge: 7 * 24 * 60 * 60 })
    return json.data
  }
  return null
}

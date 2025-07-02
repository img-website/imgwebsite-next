import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request) {
  try {
    const { module, url } = await request.json()
    if (!module || !url) {
      return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 })
    }
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
        } catch {}
      }
      modules[module] = json.data
      cookies().set('api-data', JSON.stringify(modules), { path: '/', maxAge: 7 * 24 * 60 * 60 })
      return NextResponse.json({ success: true, data: json.data })
    }
    return NextResponse.json({ success: false, error: json.error || 'Failed to fetch' }, { status: res.status })
  } catch (e) {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}

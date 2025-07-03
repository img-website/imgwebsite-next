import { NextResponse } from 'next/server'
import { getDashboardStats } from '@/app/actions/dashboard'

export async function GET() {
  try {
    const stats = await getDashboardStats()
    return NextResponse.json({ success: true, data: stats })
  } catch (err) {
    console.error('Failed to load dashboard stats:', err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

import Link from 'next/link'

export default function SettingsLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 p-4">
        <ul className="space-y-2">
          <li><Link href="/admin/profile">Profile</Link></li>
          <li><Link href="/admin/setting">Setting</Link></li>
          <li><Link href="/admin/2fa">2FA Setup</Link></li>
          <li><Link href="/admin/privacy">Privacy</Link></li>
        </ul>
      </aside>
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}

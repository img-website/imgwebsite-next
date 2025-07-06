import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function NotFound() {
  return (
    <main className="flex items-center justify-center py-10 min-h-[60vh]">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <AlertTriangle className="mx-auto mb-2 size-12 text-destructive" />
          <CardTitle>Page Not Found</CardTitle>
          <CardDescription>The page you are looking for does not exist.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="mx-auto">
            <Link href="/">Return Home</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}

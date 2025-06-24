'use client'
import AddRedirectionPage from '@/app/admin/redirections/add/page'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useRouter } from 'next/navigation'

export default function AddRedirectionModal() {
  const router = useRouter()
  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent className="max-w-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
        <AddRedirectionPage />
      </DialogContent>
    </Dialog>
  )
}

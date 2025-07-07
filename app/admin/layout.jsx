import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { AppHeader } from "@/components/app-header"


export default function AdminLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <Separator />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

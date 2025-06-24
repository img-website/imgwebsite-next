import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"


export default function AdminLayout({ children, modal }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {children}
      </SidebarInset>
      {modal}
    </SidebarProvider>
  );
}

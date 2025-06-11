import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { MainProvider } from "@/app/context/main-context"


export default function AdminLayout({ children }) {

  return (
    <MainProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </MainProvider>
  );
}

"use client"

import { BriefcaseBusiness, Plus, FileText } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border">
        <div className="flex items-center gap-2 px-4 py-3">
          <BriefcaseBusiness className="h-6 w-6" />
          <span className="font-bold text-xl">MUJ Toppers</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/admin/add-internship"}>
              <Link href="/admin/add-internship">
                <Plus className="mr-2" />
                <span>Add Internship</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/admin/blogs"}>
              <Link href="/admin/blogs">
                <FileText className="mr-2" />
                <span>Blogs</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-border p-4">
        <div className="text-xs text-muted-foreground">MUJ Toppers Admin Panel</div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

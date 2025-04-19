"use client"

import { BriefcaseBusiness, Plus } from "lucide-react"
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
import Image from "next/image"

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border">
        <div className="flex items-center gap-2 px-4 py-3">
           <Image
            src="/17(200).png"
            alt="MUJ Toppers Logo"
            width={40}
            height={40}
            className="rounded-full"
            priority
            />
          <span className="font-bold text-xl">MUJ Toppers</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/admin/add-internship"} tooltip="Add Internship">
              <Link href="/admin/add-internship">
                <Plus className="mr-2" />
                <span>Add Internship</span>
              </Link>
            </SidebarMenuButton>
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

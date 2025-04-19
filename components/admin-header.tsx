"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { LogOut, User } from "lucide-react"
import { UserButton } from "@clerk/nextjs"

export function AdminHeader() {
  return (
    <header className="border-b border-border h-16 px-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h2 className="font-semibold text-lg">Admin Dashboard</h2>
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <UserButton />
      </div>
    </header>
  )
}

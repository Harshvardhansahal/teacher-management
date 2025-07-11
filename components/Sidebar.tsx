"use client"

import { useState, useEffect } from "react"
import {
  Users,
  Calendar,
  BookOpen,
  Settings,
  Bell,
  FileText,
  BarChart3,
  Menu,
  X,
  Home,
  GraduationCap,
} from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Users, label: "Teachers", href: "/teachers", active: true },
  { icon: GraduationCap, label: "Students", href: "/students" },
  { icon: Calendar, label: "Schedule", href: "/schedule" },
  { icon: BookOpen, label: "Courses", href: "/courses" },
  { icon: BarChart3, label: "Reports", href: "/reports" },
  { icon: FileText, label: "Documents", href: "/documents" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  // Collapse sidebar on mobile view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setIsCollapsed(true)
      } else {
        setIsCollapsed(false)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn("bg-slate-900 text-white transition-all duration-300 flex flex-col", isCollapsed ? "w-16" : "w-64")}
    >
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && <h1 className="text-xl font-bold">EduManage</h1>}
          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-white hover:bg-slate-800 p-2 rounded"
          >
            {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={cn(
                  "flex items-center w-full px-2 py-2 rounded text-white hover:bg-slate-800 transition",
                  item.active && "bg-slate-700 hover:bg-slate-600",
                  isCollapsed && "justify-center",
                )}
                style={{ minHeight: 40 }}
              >
                <item.icon className="h-4 w-4" />
                {!isCollapsed && <span className="ml-3">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

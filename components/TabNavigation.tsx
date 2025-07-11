"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "availability", label: "Availability" },
  { id: "qualifications", label: "Qualifications" },
  { id: "students", label: "Students" },
  { id: "schedule", label: "Schedule" },
  { id: "invoices", label: "Invoices" },
  { id: "vouchers", label: "Vouchers" },
  { id: "comments", label: "Comments" },
  { id: "history", label: "History" },
]

interface TabNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="border-b border-gray-200 mb-6">
      <nav className="flex space-x-8 overflow-x-auto">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            className={cn(
              "border-b-2 border-transparent rounded-none px-1 py-4 text-sm font-medium whitespace-nowrap",
              activeTab === tab.id
                ? "border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700 hover:border-gray-300",
            )}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </Button>
        ))}
      </nav>
    </div>
  )
}

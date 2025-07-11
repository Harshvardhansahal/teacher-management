"use client"

import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import TeacherHeader from "@/components/TeacherHeader"
import QualificationsCard from "@/components/QualificationsCard"
import ScheduleGrid from "@/components/ScheduleGrid"
import TabNavigation from "@/components/TabNavigation"
import type { TeacherData } from "@/types/teacher"

// Mock data
const mockTeacherData: TeacherData = {
  teacher: {
    id: "1",
    name: "Alynia Allan",
    email: "AlyniaAllan@example.com",
    phone: "(416) 658-9057",
    address: {
      street: "123 Markham Rd, Apartment 5A",
      city: "North York, Ontario",
      country: "Canada",
    },
  },
  qualifications: [
    { id: "1", name: "Vocal Contemporary", rate: 50.0, type: "private" },
    { id: "2", name: "Vocal Jazz", rate: 50.0, type: "private" },
    { id: "3", name: "Vocal Classical", rate: 50.0, type: "private" },
    { id: "4", name: "Vocal Pop", rate: 50.0, type: "private" },
    { id: "5", name: "Vocal Group Harmony", rate: 35.0, type: "group" },
  ],
  schedule: [
    { id: "1", day: "Tuesday", startTime: "3pm", endTime: "4pm", subject: "Vocal Jazz", type: "private" },
    { id: "2", day: "Wednesday", startTime: "2:30pm", endTime: "4pm", subject: "Group Harmony", type: "group" },
    { id: "3", day: "Friday", startTime: "10am", endTime: "11am", subject: "Classical", type: "private" },
    { id: "4", day: "Saturday", startTime: "9am", endTime: "12pm", subject: "Contemporary", type: "private" },
    { id: "5", day: "Saturday", startTime: "2pm", endTime: "4pm", subject: "Pop Vocals", type: "private" },
  ],
}

export default function TeacherManagement() {
  const [activeTab, setActiveTab] = useState("schedule")

  const renderTabContent = () => {
    switch (activeTab) {
      case "schedule":
        return <ScheduleGrid schedule={mockTeacherData.schedule} />
      default:
        return (
          <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Content
            </h3>
            <p className="text-gray-600">
              This section is under development. Content for {activeTab} will be available soon.
            </p>
          </div>
        )
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <TeacherHeader teacher={mockTeacherData.teacher} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <QualificationsCard
              qualifications={mockTeacherData.qualifications}
              type="private"
              title="Private Qualifications"
            />
            <QualificationsCard
              qualifications={mockTeacherData.qualifications}
              type="group"
              title="Group Qualifications"
            />
          </div>

          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

          {renderTabContent()}
        </div>
      </main>
    </div>
  )
}

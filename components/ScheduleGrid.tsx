"use client"

import { Plus, Calendar } from "lucide-react"
import type { ScheduleSlot } from "@/types/teacher"

interface ScheduleGridProps {
  schedule: ScheduleSlot[]
}

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const timeSlots = [
  "7:30am",
  "8am",
  "8:30am",
  "9am",
  "9:30am",
  "10am",
  "10:30am",
  "11am",
  "11:30am",
  "12pm",
  "12:30pm",
  "1pm",
  "1:30pm",
  "2pm",
  "2:30pm",
  "3pm",
  "3:30pm",
  "4pm",
  "4:30pm",
  "5pm",
  "5:30pm",
  "6pm",
]

export default function ScheduleGrid({ schedule }: ScheduleGridProps) {
  const getScheduleForSlot = (day: string, time: string) => {
    return schedule.find((slot) => slot.day === day && slot.startTime === time)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="flex flex-row items-center justify-between px-6 py-4 border-b">
        <h2 className="text-lg font-semibold flex items-center">
          <Calendar className="h-5 w-5 mr-2" />
          Weekly Schedule
        </h2>
        <button className="flex items-center px-3 py-1.5 border rounded text-sm hover:bg-gray-100 transition" type="button">
          <Plus className="h-4 w-4 mr-2" />
          Add Session
        </button>
      </div>
      <div className="px-6 py-4 overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Header */}
          <div className="grid grid-cols-8 gap-1 mb-2">
            <div className="p-2 text-sm font-medium text-gray-600">Time</div>
            {days.map((day) => (
              <div key={day} className="p-2 text-sm font-medium text-gray-900 text-center">
                {day}
              </div>
            ))}
          </div>
          {/* Time slots */}
          <div className="space-y-1">
            {timeSlots.map((time) => (
              <div key={time} className="grid grid-cols-8 gap-1">
                <div className="p-2 text-xs text-gray-600 border-r">{time}</div>
                {days.map((day) => {
                  const slot = getScheduleForSlot(day, time)
                  return (
                    <div
                      key={`${day}-${time}`}
                      className="p-1 min-h-[40px] border border-gray-200 rounded hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      {slot && (
                        <div
                          className={`p-2 rounded text-xs font-medium h-full flex items-center justify-center ${
                            slot.type === "private"
                              ? "bg-green-100 text-green-800 border border-green-200"
                              : "bg-blue-100 text-blue-800 border border-blue-200"
                          }`}
                        >
                          <div className="text-center">
                            <div className="font-semibold">{slot.subject || "Session"}</div>
                            <span className={`inline-block px-2 py-0.5 rounded text-xs mt-1 font-medium ${slot.type === "private" ? "bg-green-200 text-green-900" : "bg-blue-200 text-blue-900"}`}>
                              {slot.type}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

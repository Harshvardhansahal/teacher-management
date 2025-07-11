"use client"

import { Edit, Mail, Phone, MapPin } from "lucide-react"
import type { Teacher } from "@/types/teacher"

interface TeacherHeaderProps {
  teacher: Teacher
}

export default function TeacherHeader({ teacher }: TeacherHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full">
          <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
            {teacher.avatar ? (
              <img src={teacher.avatar} alt={teacher.name} className="h-16 w-16 object-cover" />
            ) : (
              <span className="text-lg font-semibold text-blue-600">
                {teacher.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            )}
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900">{teacher.name}</h1>
            <span className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded mt-1 font-medium">
              Active Teacher
            </span>
            <div className="flex flex-col sm:flex-row items-center sm:items-center sm:space-x-4 mt-3 text-sm text-gray-600 space-y-2 sm:space-y-0">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                {teacher.email}
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                {teacher.phone}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {teacher.address.city}, {teacher.address.country}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 w-full sm:w-auto justify-center sm:justify-end mt-4 sm:mt-0">
          <button type="button" className="flex items-center px-3 py-1.5 border rounded text-sm hover:bg-gray-100 transition">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </button>

        </div>
      </div>
    </div>
  )
}

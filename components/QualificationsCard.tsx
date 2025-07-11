"use client"

import { Plus, Edit, Trash2 } from "lucide-react"
import type { Qualification } from "@/types/teacher"

interface QualificationsCardProps {
  qualifications: Qualification[]
  type: "private" | "group"
  title: string
}

export default function QualificationsCard({ qualifications, type, title }: QualificationsCardProps) {
  const filteredQualifications = qualifications.filter((q) => q.type === type)

  return (
    <div className="bg-white rounded-lg shadow-sm border mb-6">
      <div className="flex flex-row items-center justify-between px-6 py-4 border-b">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button className="flex items-center px-3 py-1.5 border rounded text-sm hover:bg-gray-100 transition" type="button">
          <Plus className="h-4 w-4 mr-2" />
          Add {type === "private" ? "Private" : "Group"} Qualification
        </button>
      </div>
      <div className="px-6 py-4">
        {filteredQualifications.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No {type} qualifications added yet.</p>
            <button className="flex items-center mt-2 px-3 py-1.5 border rounded text-sm hover:bg-gray-100 transition" type="button">
              <Plus className="h-4 w-4 mr-2" />
              Add your first qualification
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredQualifications.map((qualification) => (
              <div
                key={qualification.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{qualification.name}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${type === "private" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"}`}>
                        {type === "private" ? "Private" : "Group"}
                      </span>
                      <span className="text-sm text-gray-600">${qualification.rate}/hr</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded hover:bg-gray-200" type="button">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded text-red-600 hover:bg-red-50 hover:text-red-700" type="button">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

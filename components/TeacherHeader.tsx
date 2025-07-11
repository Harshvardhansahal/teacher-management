"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Mail, Phone, MapPin, MoreVertical } from "lucide-react"
import type { Teacher } from "@/types/teacher"

interface TeacherHeaderProps {
  teacher: Teacher
}

export default function TeacherHeader({ teacher }: TeacherHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={teacher.avatar || "/placeholder.svg"} alt={teacher.name} />
            <AvatarFallback className="text-lg font-semibold bg-blue-100 text-blue-600">
              {teacher.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">{teacher.name}</h1>
            <Badge variant="secondary" className="mt-1">
              Active Teacher
            </Badge>

            <div className="flex items-center space-x-4 mt-3 text-sm text-gray-600">
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

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>

        </div>
      </div>
    </div>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <Button size="sm" variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Add {type === "private" ? "Private" : "Group"} Qualification
        </Button>
      </CardHeader>
      <CardContent>
        {filteredQualifications.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No {type} qualifications added yet.</p>
            <Button variant="ghost" className="mt-2">
              <Plus className="h-4 w-4 mr-2" />
              Add your first qualification
            </Button>
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
                      <Badge variant={type === "private" ? "default" : "secondary"}>
                        {type === "private" ? "Private" : "Group"}
                      </Badge>
                      <span className="text-sm text-gray-600">${qualification.rate}/hr</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

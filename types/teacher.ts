export interface Teacher {
  id: string
  name: string
  email: string
  phone: string
  address: {
    street: string
    city: string
    country: string
  }
  avatar?: string
}

export interface Qualification {
  id: string
  name: string
  rate: number
  type: "private" | "group"
}

export interface ScheduleSlot {
  id: string
  day: string
  startTime: string
  endTime: string
  subject?: string
  type: "private" | "group"
}

export interface TeacherData {
  teacher: Teacher
  qualifications: Qualification[]
  schedule: ScheduleSlot[]
}

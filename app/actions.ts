"use server"

import { parseExcelFile, type FacultyData } from "@/lib/parse-excel"
import path from "path"
import fs from "fs/promises"

let facultyData: FacultyData[] | null = null

export async function searchFaculty(query: string): Promise<FacultyData | null> {
  if (!facultyData) {
    const filePath = path.join(process.cwd(), "public", "faculty_data.xlsx")
    const fileBuffer = await fs.readFile(filePath)
    facultyData = await parseExcelFile(fileBuffer)
  }

  const normalizedQuery = query.toLowerCase().trim()
  return facultyData.find((faculty) => faculty.Faculty_Name.toLowerCase().includes(normalizedQuery)) || null
}


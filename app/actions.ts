// "use server"

// import { parseExcelFile, type FacultyData } from "@/lib/parse-excel"
// import path from "path"
// import fs from "fs/promises"

// let facultyData: FacultyData[] | null = null

// export async function searchFaculty(query: string): Promise<FacultyData | null> {
//   if (!facultyData) {
//     const filePath = path.join(process.cwd(), "public", "faculty_data.xlsx")
//     const fileBuffer = await fs.readFile(filePath)
//     facultyData = await parseExcelFile(fileBuffer)
//   }

//   const normalizedQuery = query.toLowerCase().trim()
//   return facultyData.find((faculty) => faculty.Faculty_Name.toLowerCase().includes(normalizedQuery)) || null
// }


"use server"

import { parseExcelFile, type FacultyData } from "@/lib/parse-excel"
import path from "path"
import fs from "fs/promises"

let facultyData: FacultyData[] | null = null

export async function searchFaculty(query: string): Promise<FacultyData | null> {
  try {
    if (!facultyData) {
      try {
        const filePath = path.join(process.cwd(), "public", "faculty_data.xlsx")
        const fileExists = await fs
          .stat(filePath)
          .then(() => true)
          .catch(() => false)

        if (fileExists) {
          const fileBuffer = await fs.readFile(filePath)
          facultyData = await parseExcelFile(fileBuffer)
        } else {
          console.warn("Faculty data file not found. Using empty data set.")
          facultyData = []
        }
      } catch (error) {
        console.error("Error loading faculty data:", error)
        facultyData = []
      }
    }

    if (!query || !facultyData.length) return null

    const normalizedQuery = query.toLowerCase().trim()
    return facultyData.find((faculty) => faculty.Faculty_Name.toLowerCase().includes(normalizedQuery)) || null
  } catch (error) {
    console.error("Error searching faculty:", error)
    return null
  }
}


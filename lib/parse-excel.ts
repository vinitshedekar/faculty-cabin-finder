// import * as XLSX from "xlsx"

// export interface FacultyData {
//   Faculty_Name: string
//   Cabin_Detail: string
// }

// export async function parseExcelFile(file: ArrayBuffer): Promise<FacultyData[]> {
//   const workbook = XLSX.read(file, { type: "array" })
//   const sheetName = workbook.SheetNames[0]
//   const sheet = workbook.Sheets[sheetName]
//   const data = XLSX.utils.sheet_to_json(sheet) as FacultyData[]
//   return data
// }



import * as XLSX from "xlsx"

export interface FacultyData {
  Faculty_Name: string
  Cabin_Detail: string
}

// Update the function to accept Buffer or ArrayBuffer
export async function parseExcelFile(file: Buffer | ArrayBuffer): Promise<FacultyData[]> {
  try {
    // XLSX.read can work with both Buffer and ArrayBuffer
    const workbook = XLSX.read(file, { type: "buffer" })
    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]
    const data = XLSX.utils.sheet_to_json(sheet) as FacultyData[]
    return data
  } catch (error) {
    console.error("Error parsing Excel file:", error)
    return []
  }
}




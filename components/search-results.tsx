// "use client"

// import { useSearchParams } from "next/navigation"
// import { useEffect, useState } from "react"
// import { searchFaculty } from "@/app/actions"
// import type { FacultyData } from "@/lib/parse-excel"

// export function SearchResults() {
//   const searchParams = useSearchParams()
//   const query = searchParams.get("q")
//   const [result, setResult] = useState<FacultyData | null>(null)
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     if (query) {
//       setLoading(true)
//       searchFaculty(query).then((data) => {
//         setResult(data)
//         setLoading(false)
//       })
//     }
//   }, [query])

//   if (!query) {
//     return null
//   }

//   return (
//     <div className="mt-8">
//       <h2 className="text-xl font-semibold mb-4">Search Results for "{query}"</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : result ? (
//         <div className="bg-card border rounded-lg p-6 shadow-sm">
//           <p className="text-lg font-medium mb-2">{result.Faculty_Name}</p>
//           <p className="text-muted-foreground">{result.Cabin_Detail}</p>
//         </div>
//       ) : (
//         <p className="text-muted-foreground">No results found.</p>
//       )}
//     </div>
//   )
// }



"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { searchFaculty } from "@/app/actions"
import type { FacultyData } from "@/lib/parse-excel"

export function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")
  const [result, setResult] = useState<FacultyData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (query) {
      setLoading(true)
      setError(null)

      searchFaculty(query)
        .then((data) => {
          setResult(data)
          setLoading(false)
        })
        .catch((err) => {
          console.error("Error searching:", err)
          setError("An error occurred while searching. Please try again.")
          setLoading(false)
        })
    }
  }, [query])

  if (!query) {
    return null
  }

  return (
    <div className="mt-4 max-h-[30vh] overflow-y-auto">
      <h2 className="text-lg font-semibold mb-2 text-primary">Results for "{query}"</h2>

      {error && <div className="bg-destructive/10 text-destructive rounded-lg p-3">{error}</div>}

      {loading ? (
        <p className="text-muted-foreground">Loading...</p>
      ) : result ? (
        <div className="bg-accent text-accent-foreground rounded-lg p-3 shadow-sm">
          <p className="font-medium">{result.Faculty_Name}</p>
          <p className="text-sm text-muted-foreground">{result.Cabin_Detail}</p>
        </div>
      ) : !error ? (
        <p className="text-muted-foreground">No results found.</p>
      ) : null}
    </div>
  )
}




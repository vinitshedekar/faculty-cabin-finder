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

  useEffect(() => {
    if (query) {
      setLoading(true)
      searchFaculty(query).then((data) => {
        setResult(data)
        setLoading(false)
      })
    }
  }, [query])

  if (!query) {
    return null
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Search Results for "{query}"</h2>
      {loading ? (
        <p>Loading...</p>
      ) : result ? (
        <div className="bg-card border rounded-lg p-6 shadow-sm">
          <p className="text-lg font-medium mb-2">{result.Faculty_Name}</p>
          <p className="text-muted-foreground">{result.Cabin_Detail}</p>
        </div>
      ) : (
        <p className="text-muted-foreground">No results found.</p>
      )}
    </div>
  )
}


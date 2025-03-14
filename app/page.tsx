import { SearchForm } from "@/components/search-form"
import { SearchResults } from "@/components/search-results"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Faculty Cabin Finder</h1>
        <p className="text-xl text-muted-foreground">
          Quickly locate faculty cabins with ease. Enter a faculty name to get started.
        </p>
      </section>

      <div className="bg-card rounded-lg shadow-lg p-6">
        <SearchForm />
        <SearchResults />
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card rounded-lg p-4 text-center">
            <h3 className="font-semibold mb-2">1. Enter Name</h3>
            <p className="text-muted-foreground">Type in the faculty member's name in the search box.</p>
          </div>
          <div className="bg-card rounded-lg p-4 text-center">
            <h3 className="font-semibold mb-2">2. Search</h3>
            <p className="text-muted-foreground">Click the search button or press enter to find the faculty.</p>
          </div>
          <div className="bg-card rounded-lg p-4 text-center">
            <h3 className="font-semibold mb-2">3. Get Results</h3>
            <p className="text-muted-foreground">View the faculty's cabin details instantly.</p>
          </div>
        </div>
      </section>
    </div>
  )
}



// import { SearchForm } from "@/components/search-form"
// import { SearchResults } from "@/components/search-results"

// export const dynamic = "force-dynamic"

// export default function Home() {
//   return (
//     <div className="h-full flex flex-col justify-between p-4">
//       <section className="text-center mb-4">
//         <h1 className="text-3xl font-bold mb-2 text-primary">Faculty Finder</h1>
//         <p className="text-sm text-muted-foreground">Quickly locate faculty cabins with ease.</p>
//       </section>

//       <div className="bg-card rounded-lg shadow-lg p-4 mb-4">
//         <SearchForm />
//         <SearchResults />
//       </div>

//       <section className="mt-4">
//         <h2 className="text-xl font-semibold mb-2 text-center text-primary">How It Works</h2>
//         <div className="grid grid-cols-3 gap-4">
//           {[
//             { title: "1. Enter Name", desc: "Type faculty name" },
//             { title: "2. Search", desc: "Click search or press enter" },
//             { title: "3. Get Results", desc: "View cabin details" },
//           ].map((step, index) => (
//             <div key={index} className="bg-accent text-accent-foreground rounded-lg p-2 text-center">
//               <h3 className="font-semibold text-sm">{step.title}</h3>
//               <p className="text-xs">{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   )
// }


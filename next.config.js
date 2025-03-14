/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    // This ensures that the Excel file is included in the build
    experimental: {
      outputFileTracingIncludes: {
        "/": ["public/**/*"],
      },
    },
  }
  
  module.exports = nextConfig
  
  
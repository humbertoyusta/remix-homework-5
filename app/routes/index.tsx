import { Link, Outlet } from '@remix-run/react'

export default function Index() {
  return (
    <div>
      <h1 className="text-6xl font-bold text-red-700">Hello REMIX!</h1>
      {/* Add an <Outlet/> here and a link to posts page */}
    </div>
  )
}

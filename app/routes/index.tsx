import { Link, Outlet } from '@remix-run/react'

export default function Index() {
  return (
    <div>
      <h1 className="text-6xl font-bold text-red-700">Hello REMIX!</h1>
      <Link to={"/posts"} className="text-2xl font-bold text-blue-700">
        <h2>Posts</h2>
      </Link>
      <Outlet/>
    </div>
  )
}

import {Link, Outlet} from "@remix-run/react";
import {BlogPost} from "~/lib/store";

export default function Admin () {
    const posts: BlogPost[] = [];

    return (
        <div className="mx-auto max-w-4xl">
            <h1 className="my-6 mb-2 text-center text-3xl">Blog Admin</h1>
            <hr className="my-4" />
            <div className="grid grid-cols-4 gap-6">
                <nav className="col-span-4 md:col-span-1">
                    <ul>
                        {posts.map((post) => (
                            <li key={post.slug}>
                                <Link to={post.slug} className="text-blue-600 underline">
                                    {post.title}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link to="new" className="text-blue-600 underline">
                                ➕ Create New Post
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <main className="col-span-4 md:col-span-3 mt-8">
                {/* 🐨 your job is to add an Outlet component here */}
                <Outlet />
            </main>
        </div>
    );
}
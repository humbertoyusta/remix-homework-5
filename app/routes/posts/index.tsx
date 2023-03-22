import {store} from "~/lib/store";
import {json} from "@remix-run/node";
import {Link, useLoaderData} from "@remix-run/react";

export async function loader () {
    const posts = await store.getPosts();
    return json(posts);
}

export default function Index() {
    const posts = useLoaderData<typeof loader>();

    return (
      <main>
          <h1 className={"text-6xl text-red-700"}>Posts</h1>
          <ul>
              {posts.map((post) => (
                  <li key={post.slug}>
                      <Link to={post.slug} className="text-blue-600 underline">
                          {post.title}
                      </Link>
                  </li>
              ))}
          </ul>
      </main>
    );
}
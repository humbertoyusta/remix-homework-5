import {BlogPost, store} from "~/lib/store";
import type { LoaderArgs} from "@remix-run/node";
import {json} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";

export async function loader({ params }: LoaderArgs) {
    const post = await store.getPost(params.slug || "");
    return json(post);
}

export default function Index() {
    const post = useLoaderData<typeof loader>();

    return (
        <main>
            <h1>{(post as unknown as BlogPost[])[0].title}</h1>
            <p>{(post as unknown as BlogPost[])[0].description}</p>
        </main>
    );
}
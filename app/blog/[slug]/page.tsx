import { CustomMDX } from '@/components/mdx'
import { getBlogPosts } from '@/utils/blog'

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const post = getBlogPosts().find((post) => post.slug === slug)

    return (
        <div className="mt-10 max-w-3xl">
            <div className="flex flex-col gap-2 ">
                <span className="text-2xl font-bold">
                    {post?.metadata.title}
                </span>
                <span className="flex text-muted-foreground">
                    {post?.metadata.summary}
                </span>
            </div>
            <article className="mt-5">
                {post?.content && <CustomMDX source={post.content} />}
            </article>
        </div>
    )
}

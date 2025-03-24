import Link from 'next/link'
import { formatDate, getBlogPosts } from '@/utils/blog'

export function BlogPosts() {
    const allBlogs = getBlogPosts()

    return (
        <div className="mt-4">
            {allBlogs
                .sort((a, b) => {
                    if (
                        new Date(a.metadata.publishedAt) >
                        new Date(b.metadata.publishedAt)
                    ) {
                        return -1
                    }
                    return 1
                })
                .map((post) => (
                    <Link
                        key={post.slug}
                        className="mb-4 flex flex-col space-y-1 "
                        href={`/blog/${post.slug}`}
                    >
                        <div className="flex w-full items-center flex-col space-x-0 md:flex-row md:space-x-2">
                            <p className="tracking-tight  text-gray-700 dark:text-gray-200  ">
                                {post.metadata.title}
                            </p>
                            <p className="pl-4 text-muted-foreground text-sm ">
                                {formatDate(post.metadata.publishedAt, false)}
                            </p>
                        </div>
                    </Link>
                ))}
        </div>
    )
}

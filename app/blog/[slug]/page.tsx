import { CustomMDX } from '@/components/mdx';
import { getBlogPosts } from '@/utils/blog';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);

  return (
    <div>
      {post?.metadata.title}
      <article>
        <CustomMDX source={post?.content} />
      </article>
    </div>
  );
}

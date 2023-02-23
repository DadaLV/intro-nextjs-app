import { getAllPosts } from "../../lib/cms";

export default async function Blog() {
  const posts = await getAllPosts()

  return <div key={post.id}>
  {posts.map(post => <div>
      <Link href={`/blog/${post.slug}`}>
          ${post.title}                
      </Link>
  </div>)}
</div>
}
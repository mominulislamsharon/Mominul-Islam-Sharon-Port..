export default function BlogPostPage({ params }: { params: { id: string } }) {
  return <div>Blog Post Page {params.id}</div>;
}

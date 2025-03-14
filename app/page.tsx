import { BlogPostCard } from "@/components/general/BlogPostCard";
import { prisma } from "./utils/db";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Revalidate CDN every 60 seconds
export const revalidate = 60;

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorName: true,
      authorImage: true,
      id: true,
      createdAt: true,
      authorId: true,
      updatedAt: true,
    },
  });

  return data;
}

async function BlogPosts() {
  const data = await getData();

  return (
    // Blog posts
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <BlogPostCard data={item} key={item.id} />
      ))}
    </div>
  );
}
export default function Home() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Posts</h1>

      <Suspense fallback={<BlogPostsGrid />}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}

function BlogPostsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          className="rounded-lg border bg-card text-card-foregorund flex flex-col overflow-hidden"
          key={index}
        >
          {/* Image skeleton */}
          <Skeleton className="h-48 w-full rounded-none" />
          <div>
            {/* Title skeleton */}
            <Skeleton className="h-4 w-3/4 mt-4" />
            {/* Content skeleton */}
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>

          {/* Footer skeleton */}
          <div className="mt-auto flex items-center justify-between pt-4">
            <div className="flex items-center">
              <Skeleton className="h-8 w-8 rounded-full mr-2" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      ))}
    </div>
  );
}

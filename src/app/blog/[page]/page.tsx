import { PrismaClient } from '@/generated/prisma';
import { Container, Button, Pagination } from 'react-bootstrap';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

//For pagination using dynamic routes in Next.js App Router, this structure is always required:
interface PageProps {
  params: {
    page: string;
  };
}

const POSTS_PER_PAGE = 1;

// This folder structure (`app/blog/[page]/page.tsx`) makes Next.js
// treat the URL `/blog/1` (or `/blog/any-string`) as a dynamic route,
// where `1` is captured as `params.page` (always a string).
// This enables pagination or other dynamic content based on the URL.

export default async function BlogPage({ params }: PageProps) {
  const currentPage = parseInt(params.page, 10);
    //isNaN = is Not a Number
  if (isNaN(currentPage) || currentPage < 1) {
    notFound(); // return 404 if the page is invalid
  }

  //prisma.post represents the table/model Post in your database.
  const totalPosts = await prisma.post.count();
  //Math.ceil() is a JavaScript math function that rounds a number up to the nearest integer
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  if (currentPage > totalPages) {
    notFound(); // 404 if page exceeds total
  }

    //.findMany() itself is not an iteration.
    //It's a query that returns an array of post objects from the database, based on the criteria you provide (skip, take, etc.).
  const posts = await prisma.post.findMany({
    skip: (currentPage - 1) * POSTS_PER_PAGE,
    take: POSTS_PER_PAGE,
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      images: true,
      comments: true,
    },
  });

  return (
   <Container className="py-4">
    <h1 className="mb-4">Blog – Page {currentPage}</h1>

    {posts.map((post) => (
      <article key={post.id} className="mb-5">
        <h2>{post.title}</h2>
        {post.excerpt && <p><em>{post.excerpt}</em></p>}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    ))}

    <Pagination>
      {currentPage > 1 && (
        <Pagination.Prev>
          <Link href={`/blog/${currentPage - 1}`} passHref legacyBehavior>
            <Button variant="outline-primary" as="a">← Previous</Button>
          </Link>
        </Pagination.Prev>
      )}

      <Pagination.Item active>{currentPage}</Pagination.Item>

      {currentPage < totalPages && (
        <Pagination.Next>
          <Link href={`/blog/${currentPage + 1}`} passHref legacyBehavior>
            <Button variant="outline-primary" as="a">Next →</Button>
          </Link>
        </Pagination.Next>
      )}
    </Pagination>
  </Container>
  );
}

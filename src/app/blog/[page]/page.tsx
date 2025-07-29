import { PrismaClient } from '@/generated/prisma';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

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
  // Await params to ensure it’s resolved if async
  const resolvedParams = await params;
  const currentPage = parseInt(resolvedParams.page, 10);
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
    <Container className={`py-4 ${styles.blogContainer}`}>

      <div className={styles.postsWrapper}>
        {posts.map((post) => (
          <article key={post.id} className={styles.post}>
            <h1 className={styles.postTitle}>{post.title}</h1>
            {post.excerpt && (
              <p className={styles.postExcerpt}>
                <em>{post.excerpt}</em>
              </p>
            )}
            <div
              className={styles.postContent}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Comments Section */}
            <div className={styles.commentsSection}>
              <h3>Commenti</h3>

              {post.comments.length === 0 ? (
                <p>Facci sapere cosa ne pensi, lascia un commento qui sotto!</p>
              ) : (
                <ul className={styles.commentList}>
                  {post.comments.map((comment) => (
                    <li key={comment.id} className={styles.comment}>
                      <strong>{comment.name}</strong>{' '}
                      <em>({new Date(comment.createdAt).toLocaleString('it-IT', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false, // ensures 24h format
                      }).replace(',', '')}
                        )
                      </em>
                      <p>{comment.content}</p>
                    </li>
                  ))}
                </ul>
              )}

              <form
                action="/api/comments"
                method="POST"
                className={styles.commentForm}
              >
                <input type="hidden" name="postId" value={post.id} />
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  required
                  className={styles.formName}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email (non verrà visualizzata nei commenti)"
                  required
                  className={styles.formEmail}
                />
                <textarea
                  name="content"
                  placeholder="Scrivi qui il tuo commento"
                  required
                  className={styles.formComment}
                />
                <button className={styles.formButton} type="submit">Invia</button>
              </form>
            </div>

          </article>
        ))}
      </div>

      <nav className={styles.paginationNav} aria-label="Page navigation example">
        <ul className={`pagination ${styles.pagination}`}>
          {currentPage > 1 && (
            <li className="page-item">
              <Link href={`/blog/${currentPage - 1}`} className="page-link">
                ←
              </Link>
            </li>
          )}

          <li className={styles.paginationActivePage} aria-current="page">
            <span className="page-link">{currentPage}</span>
          </li>

          {currentPage < totalPages && (
            <li className="page-item">
              <Link href={`/blog/${currentPage + 1}`} className="page-link">
                →
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </Container>
  );
}

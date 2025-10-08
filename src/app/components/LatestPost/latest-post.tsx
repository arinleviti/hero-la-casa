'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './latest-post.module.css';
import { Container, Button } from 'react-bootstrap';

interface Post {
  id: number;
  title: string;
  content: string;
  slug: string;
}

export default function LatestPost() {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch('/api/latest-post');
      const data = await res.json();
      setPost(data);
    }
    fetchPost();
  }, []);

  if (!post) {
    return <p className={styles.noPosts}>Nessun articolo disponibile.</p>;
  }

  // Keep <strong> and <em>, remove everything else
  const maxWords = 80;

  // Remove <style> blocks entirely
let plainText = post.content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');

// Remove all tags except <strong> and <em>
plainText = plainText.replace(/<(?!\/?(strong|em)\b)[^>]+>/gi, '');

// Optionally decode HTML entities (like &nbsp; or &amp;)
plainText = plainText.replace(/&nbsp;/gi, ' ').replace(/&amp;/gi, '&');

const preview = plainText.split(/\s+/).slice(0, maxWords).join(' ') + '...';
 /*  const plainText = post.content.replace(
    /<(?!\/?(strong|b|em|i)\b)[^>]+>/gi,
    ''
  );
  const preview =
    plainText.split(/\s+/).slice(0, maxWords).join(' ') + '...'; */

  return (
   <Container className={styles.latestPostContainer}>
      <h2 className={styles.postTitle}>{post.title}</h2>
      <p
        className={styles.postExcerpt}
        dangerouslySetInnerHTML={{ __html: preview }}
      />
      <Link href={`/blog/1`} passHref>
        <Button className={styles.postButton} variant="primary">CONTINUA A LEGGERE →</Button>
      </Link>
    </Container>
  );
}

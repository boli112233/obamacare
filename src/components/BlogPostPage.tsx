import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, ExternalLink, FileText, Share2, Link2, Check, Facebook, Twitter } from 'lucide-react';
import { blogPosts } from '@/data/content';

const categoryStyles: Record<string, string> = {
  Enrollment: 'bg-primary-100 text-primary-700',
  Policy: 'bg-warm-100 text-warm-700',
  Subsidies: 'bg-accent-100 text-accent-700',
  'Preventive Care': 'bg-ink-200 text-ink-700',
  Community: 'bg-primary-100 text-primary-700',
};

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/blog/${post?.slug ?? ''}` : '';
  const shareText = post ? `${post.title} — Obamacare.vote` : '';
  const shareImage = post?.image ?? '/hero-family-healthcare.webp';

  useEffect(() => {
    if (!post) return;

    const imageUrl = new URL(shareImage, window.location.origin).href;
    const pageUrl = new URL(`/blog/${post.slug}`, window.location.origin).href;
    const description = post.excerpt;
    const tags = [
      ['property', 'og:title', post.title],
      ['property', 'og:description', description],
      ['property', 'og:image', imageUrl],
      ['property', 'og:url', pageUrl],
      ['property', 'og:type', 'article'],
      ['name', 'twitter:title', post.title],
      ['name', 'twitter:description', description],
      ['name', 'twitter:image', imageUrl],
      ['name', 'twitter:card', 'summary_large_image'],
    ];

    document.title = `${post.title} | Obamacare.vote`;

    tags.forEach(([attribute, name, content]) => {
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    return () => {
      document.title = 'Obamacare.vote | The Affordable Care Act — Protections, Enrollment & News';
    };
  }, [post, shareImage]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  if (!post) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <h1 className="font-display font-bold text-3xl text-ink-900">Article not found</h1>
          <p className="mt-4 text-ink-600">The post you're looking for doesn't exist.</p>
          <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700">
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>
        </div>
      </section>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold ${categoryStyles[post.category] ?? 'bg-ink-100 text-ink-600'}`}>
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-ink-400">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        {post.image && (
          <img
            src={post.image}
            alt=""
            className="w-full h-56 sm:h-80 object-cover rounded-2xl mb-8"
          />
        )}

        <h1 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 leading-tight tracking-tight">
          {post.title}
        </h1>

        <div className="mt-3 flex items-center gap-2 text-sm text-ink-500">
          <span className="font-semibold text-ink-700">{post.author}</span>
          <span aria-hidden>·</span>
          <span>{post.date}</span>
        </div>

        <p className="mt-6 text-lg text-ink-600 leading-relaxed">{post.excerpt}</p>

        <div className="mt-8 space-y-5">
          {post.body.map((para, i) => (
            <p key={i} className="text-ink-700 leading-relaxed text-base">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-10 pt-5 border-t border-ink-100">
          <a
            href={post.source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
          >
            Source: {post.source.label}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-10 rounded-2xl border border-ink-200 overflow-hidden bg-ink-50">
          <div className="flex flex-col sm:flex-row">
            <img
              src={shareImage}
              alt={post.title}
              className="w-full sm:w-48 h-40 sm:h-auto object-cover flex-shrink-0"
            />
            <div className="p-5 flex flex-col justify-center flex-1">
              <div className="flex items-center gap-2 text-sm font-semibold text-ink-700 mb-2">
                <Share2 className="w-4 h-4 text-primary-600" />
                Share this article
              </div>
              <p className="text-sm text-ink-500 mb-4 leading-relaxed">
                Spread the word — share this article with your community.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-ink-200 text-sm font-semibold text-ink-700 hover:border-primary-300 hover:text-primary-700 transition-all"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-ink-200 text-sm font-semibold text-ink-700 hover:border-primary-300 hover:text-primary-700 transition-all"
                >
                  <Twitter className="w-4 h-4" />
                  Twitter
                </a>
                <button
                  onClick={copyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-ink-200 text-sm font-semibold text-ink-700 hover:border-primary-300 hover:text-primary-700 transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-green-600" /> : <Link2 className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy link'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-14 pt-8 border-t border-ink-100">
            <h2 className="font-display font-bold text-xl text-ink-900 mb-5 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary-600" />
              More posts
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((rp) => (
                <Link
                  key={rp.id}
                  to={`/blog/${rp.slug}`}
                  className="group rounded-xl bg-ink-50 border border-ink-200/70 p-5 hover:border-primary-300 transition-all"
                >
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold mb-2 ${categoryStyles[rp.category] ?? 'bg-ink-100 text-ink-600'}`}>
                    {rp.category}
                  </span>
                  <h3 className="font-display font-semibold text-ink-900 group-hover:text-primary-700 transition-colors leading-snug">
                    {rp.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
                    Read post
                    <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

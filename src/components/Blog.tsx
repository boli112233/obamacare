import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/data/content';

const categoryStyles: Record<string, string> = {
  Enrollment: 'bg-primary-100 text-primary-700',
  Policy: 'bg-warm-100 text-warm-700',
  Subsidies: 'bg-accent-100 text-accent-700',
  'Preventive Care': 'bg-ink-200 text-ink-700',
};

export function Blog() {
  const [filter, setFilter] = useState<string>('All');

  const sortedPosts = [...blogPosts].sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date),
  );
  const categories = ['All', ...Array.from(new Set(sortedPosts.map((p) => p.category)))];
  const visible = filter === 'All' ? sortedPosts : sortedPosts.filter((p) => p.category === filter);

  return (
    <section id="blog" className="py-24 bg-ink-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold tracking-wide mb-5">
            <FileText className="w-4 h-4" />
            BLOG
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 leading-tight tracking-tight">
            Explaining the ACA, post by post
          </h2>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">
            Plain-language breakdowns of enrollment, subsidies, policy changes, and
            protections — drawn from trusted reporting and official sources.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                filter === cat
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-ink-600 border border-ink-200 hover:border-primary-300 hover:text-primary-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((post, i) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="reveal group text-left rounded-2xl bg-white border border-ink-200/70 p-7 card-glow transition-all duration-300 hover:border-primary-300 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {post.image && (
                <img
                  src={post.image}
                  alt=""
                  className="w-full h-44 object-cover rounded-xl mb-5"
                />
              )}

              <div className="flex items-center justify-between mb-4">
                <span
                  className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold ${
                    categoryStyles[post.category] ?? 'bg-ink-100 text-ink-600'
                  }`}
                >
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-ink-400">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="font-display font-semibold text-lg text-ink-900 leading-snug group-hover:text-primary-700 transition-colors">
                {post.title}
              </h3>

              <p className="mt-3 text-ink-500 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>

              <div className="mt-5 pt-4 border-t border-ink-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-ink-400">{post.date}</span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
                  Read post
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

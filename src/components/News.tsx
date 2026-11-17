import { ExternalLink, Newspaper, ArrowRight } from 'lucide-react';
import { newsArticles } from '@/data/content';

const categoryStyles: Record<string, string> = {
  Enrollment: 'bg-primary-100 text-primary-700',
  Policy: 'bg-warm-100 text-warm-700',
  Subsidies: 'bg-accent-100 text-accent-700',
  Legal: 'bg-ink-200 text-ink-700',
};

export function News() {
  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold tracking-wide mb-5">
            <Newspaper className="w-4 h-4" />
            LATEST ACA NEWS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 leading-tight tracking-tight">
            Real news about Obamacare today
          </h2>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">
            The latest reporting on ACA enrollment, subsidies, policy changes,
            and legal developments from trusted sources.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {newsArticles.map((article, i) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group rounded-2xl bg-white border border-ink-200/70 p-7 card-glow transition-all duration-300 hover:border-primary-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold ${
                    categoryStyles[article.category] ?? 'bg-ink-100 text-ink-600'
                  }`}
                >
                  {article.category}
                </span>
                <ExternalLink className="w-4 h-4 text-ink-300 group-hover:text-primary-500 transition-colors" />
              </div>

              <h3 className="font-display font-semibold text-lg text-ink-900 leading-snug group-hover:text-primary-700 transition-colors">
                {article.title}
              </h3>

              <p className="mt-3 text-ink-500 text-sm leading-relaxed">
                {article.excerpt}
              </p>

              <div className="mt-5 flex items-center justify-between pt-4 border-t border-ink-100">
                <span className="text-xs font-semibold text-ink-400">
                  {article.source} · {article.date}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
                  Read more
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

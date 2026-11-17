import { Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Overview } from '@/components/Overview';
import { Protections } from '@/components/Protections';
import { Enrollment } from '@/components/Enrollment';
import { Eligibility } from '@/components/Eligibility';
import { SubsidyEstimator } from '@/components/SubsidyEstimator';
import { News } from '@/components/News';
import { Blog } from '@/components/Blog';
import { BlogPostPage } from '@/components/BlogPostPage';
import { Donate } from '@/components/Donate';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function HomePage() {
  useScrollReveal();
  return (
    <main>
      <Hero />
      <Overview />
      <Protections />
      <Enrollment />
      <Eligibility />
      <SubsidyEstimator />
      <News />
      <Blog />
      <Donate />
      <FAQ />
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<PageWrapper><Overview /></PageWrapper>} />
        <Route path="/protections" element={<PageWrapper><Protections /></PageWrapper>} />
        <Route path="/enrollment" element={<PageWrapper><Enrollment /></PageWrapper>} />
        <Route path="/eligibility" element={<PageWrapper><Eligibility /></PageWrapper>} />
        <Route path="/subsidy" element={<PageWrapper><SubsidyEstimator /></PageWrapper>} />
        <Route path="/news" element={<PageWrapper><News /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
        <Route path="/blog/:slug" element={<PageWrapper><BlogPostPage /></PageWrapper>} />
        <Route path="/donate" element={<PageWrapper><Donate /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
      </Routes>
      <Footer />
    </div>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  return <main className="pt-32">{children}</main>;
}

export default App;

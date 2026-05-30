import DocsNavbar from '@/components/docs/DocsNavbar';
import DocsSidebar from '@/components/docs/DocsSidebar';
import DocsContent from '@/components/docs/DocsContent';
import ReadingProgress from '@/components/docs/ReadingProgress';

export default function DocumentationPage() {
  return (
    <>
    <ReadingProgress />

      <DocsNavbar />

      <main className="min-h-screen bg-slate-50">

        <div className="mx-auto flex max-w-7xl">

          <DocsSidebar />

          <DocsContent />

        </div>

      </main>
    </>
  );
}
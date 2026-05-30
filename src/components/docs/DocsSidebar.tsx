export default function DocsSidebar() {
  const items = [
    'Introduction',
    'Problem Statement',
    'System Architecture',
    'Hardware Components',
    'Software Components',
    'Data Flow',
    'Mobile Application',
    'Notification System',
    'Technology Stack',
    'Future Development',
  ];

  return (
    <aside className="sticky top-0 h-screen w-72 border-r bg-white p-6 hidden lg:block">

      <h2 className="text-xl font-bold">
        SIANA Docs
      </h2>

      <nav className="mt-8 space-y-3">

        {items.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
            className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
          >
            {item}
          </a>
        ))}

      </nav>

    </aside>
  );
}
// app/page.tsx
import SuperAgent from './components/SuperAgent';

export default function Home() {
  // No authentication needed - generate a random user ID
  const userId = Math.floor(1000000000 + Math.random() * 9000000000).toString();

  return (
    <div className="flex flex-col h-screen bg-white">
      <main className="flex-1 overflow-y-auto">
        <SuperAgent userId={userId} />
      </main>
    </div>
  );
}

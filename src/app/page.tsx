import HitCounter from './components/HitCounter/HitCounter';

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="text-center font-extrabold mb-8 ">
        <h1 className="text-4xl text-yellow-400">
          Playground Next App Dir + Josh w. Comeau last module
        </h1>
      </div>
      <HitCounter />
    </main>
  );
}

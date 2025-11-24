import Link from 'next/link';

export default function Home() {
  return (
    <main className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--primary)' }}>
        MeMeal
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px' }}>
        Your personal diet companion. Track calories, macros, and reach your goals with ease.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/login" className="btn btn-secondary">
          Log In
        </Link>
        <Link href="/signup" className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </main>
  );
}

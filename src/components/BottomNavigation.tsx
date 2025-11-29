'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function BottomNavigation() {
    const pathname = usePathname();
    const { t } = useLanguage();

    // Don't show on login or signup pages
    if (pathname === '/login' || pathname === '/signup' || pathname === '/') {
        return null;
    }

    const isActive = (path: string) => pathname === path;

    return (
        <nav style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid var(--border)',
            padding: '0.75rem 1rem',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            zIndex: 1000,
            boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)'
        }}>
            <Link href="/dashboard" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textDecoration: 'none',
                color: isActive('/dashboard') ? 'var(--primary)' : 'var(--text-secondary)',
                fontSize: '0.75rem',
                gap: '0.25rem'
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span>Dashboard</span>
            </Link>

            <Link href="/progress" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textDecoration: 'none',
                color: isActive('/progress') || isActive('/progress/check-in') ? 'var(--primary)' : 'var(--text-secondary)',
                fontSize: '0.75rem',
                gap: '0.25rem'
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" x2="18" y1="20" y2="10" />
                    <line x1="12" x2="12" y1="20" y2="4" />
                    <line x1="6" x2="6" y1="20" y2="14" />
                </svg>
                <span>{t('dashboard.progress')}</span>
            </Link>

            <Link href="/recipes" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textDecoration: 'none',
                color: isActive('/recipes') ? 'var(--primary)' : 'var(--text-secondary)',
                fontSize: '0.75rem',
                gap: '0.25rem'
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                <span>Recipes</span>
            </Link>

            <Link href="/profile" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textDecoration: 'none',
                color: isActive('/profile') ? 'var(--primary)' : 'var(--text-secondary)',
                fontSize: '0.75rem',
                gap: '0.25rem'
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
                <span>{t('dashboard.profile')}</span>
            </Link>
        </nav>
    );
}

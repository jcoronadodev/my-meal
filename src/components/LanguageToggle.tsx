'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <button
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            style={{
                background: 'none',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                padding: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-primary)',
            }}
            aria-label="Toggle Language"
        >
            <span>{language === 'en' ? '🇺🇸 EN' : '🇪🇸 ES'}</span>
        </button>
    );
}

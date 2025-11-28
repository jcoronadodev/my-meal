'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function CheckInPage() {
    const router = useRouter();
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        weight: '',
        waistSize: '',
        notes: '',
        date: new Date().toISOString().split('T')[0],
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/progress', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error(t('progress.saveError'));
            }

            router.push('/progress');
            router.refresh();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ padding: '2rem 0', maxWidth: '500px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '2rem', color: 'var(--primary)', textAlign: 'center' }}>{t('progress.checkInTitle')}</h1>

            <div className="card">
                {error && (
                    <div style={{ padding: '0.75rem', backgroundColor: '#ffe5e5', color: 'var(--error)', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label className="label" htmlFor="date">{t('progress.date')}</label>
                        <input
                            id="date"
                            type="date"
                            className="input"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            required
                        />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <label className="label" htmlFor="weight">{t('profile.weight')}</label>
                        <input
                            id="weight"
                            type="number"
                            step="0.1"
                            className="input"
                            value={formData.weight}
                            onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                            required
                            placeholder={t('progress.weightPlaceholder')}
                        />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <label className="label" htmlFor="waistSize">{t('progress.waistSize')} <span style={{ color: 'var(--text-secondary)', fontWeight: 'normal' }}>{t('progress.optional')}</span></label>
                        <input
                            id="waistSize"
                            type="number"
                            step="0.1"
                            className="input"
                            value={formData.waistSize}
                            onChange={(e) => setFormData({ ...formData, waistSize: e.target.value })}
                            placeholder={t('progress.waistPlaceholder')}
                        />
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <label className="label" htmlFor="notes">{t('progress.notes')} <span style={{ color: 'var(--text-secondary)', fontWeight: 'normal' }}>{t('progress.optional')}</span></label>
                        <textarea
                            id="notes"
                            className="input"
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            placeholder={t('progress.notesPlaceholder')}
                            rows={3}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button
                            type="button"
                            className="btn"
                            style={{ flex: 1, backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
                            onClick={() => router.back()}
                        >
                            {t('common.cancel')}
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ flex: 1 }}
                            disabled={loading}
                        >
                            {loading ? t('common.saving') : t('progress.saveCheckIn')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

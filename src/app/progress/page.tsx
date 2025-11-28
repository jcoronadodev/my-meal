'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface ProgressLog {
    id: string;
    date: string;
    weight: number;
    waistSize?: number;
    notes?: string;
}

export default function ProgressPage() {
    const { t } = useLanguage();
    const [logs, setLogs] = useState<ProgressLog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/progress')
            .then(res => res.json())
            .then(data => {
                setLogs(data.logs || []);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="container" style={{ padding: '2rem', textAlign: 'center' }}>{t('common.loading')}</div>;
    }

    const currentWeight = logs.length > 0 ? logs[0].weight : 'N/A';
    const startWeight = logs.length > 0 ? logs[logs.length - 1].weight : 'N/A';
    const weightChange = (typeof currentWeight === 'number' && typeof startWeight === 'number')
        ? (currentWeight - startWeight).toFixed(1)
        : '0';

    return (
        <div className="container">
            <div className="header-responsive">
                <div style={{ marginBottom: '1rem' }}>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <h1 style={{ color: 'var(--primary)', margin: 0 }}>{t('progress.title')}</h1>
                    <Link href="/progress/check-in" className="btn btn-primary">
                        {t('progress.weeklyCheckIn')}
                    </Link>
                </div>
            </div>

            <div className="grid-responsive">
                <div className="card" style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{t('progress.currentWeight')}</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>{currentWeight} <span style={{ fontSize: '1rem' }}>kg</span></p>
                </div>
                <div className="card" style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{t('progress.startWeight')}</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{startWeight} <span style={{ fontSize: '1rem' }}>kg</span></p>
                </div>
                <div className="card" style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{t('progress.totalChange')}</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: Number(weightChange) <= 0 ? 'var(--success)' : 'var(--error)' }}>
                        {Number(weightChange) > 0 ? '+' : ''}{weightChange} <span style={{ fontSize: '1rem' }}>kg</span>
                    </p>
                </div>
            </div>

            <div className="card">
                <h2 style={{ marginBottom: '1rem' }}>{t('progress.history')}</h2>
                {logs.length === 0 ? (
                    <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '2rem' }}>{t('progress.noCheckIns')}</p>
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                                    <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-secondary)' }}>{t('progress.date')}</th>
                                    <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-secondary)' }}>{t('progress.currentWeight')}</th>
                                    <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-secondary)' }}>{t('progress.waist')}</th>
                                    <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-secondary)' }}>{t('progress.notes')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {logs.map(log => (
                                    <tr key={log.id} style={{ borderBottom: '1px solid var(--border)' }}>
                                        <td style={{ padding: '1rem' }}>{new Date(log.date).toLocaleDateString()}</td>
                                        <td style={{ padding: '1rem', fontWeight: 'bold' }}>{log.weight} kg</td>
                                        <td style={{ padding: '1rem' }}>{log.waistSize ? `${log.waistSize} cm` : '-'}</td>
                                        <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{log.notes || '-'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

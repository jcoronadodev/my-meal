'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import LanguageToggle from '@/components/LanguageToggle';
import { useLanguage } from '@/context/LanguageContext';

interface FoodItem {
    id: string;
    name: string;
    nameEs?: string;
    category: string;
}

export default function ProfilePage() {
    const router = useRouter();
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        height: '',
        weight: '',
        activityLevel: 'sedentary',
        goal: 'maintain',
        gender: 'male',
        birthDate: '',
        likedFoods: [] as string[],
        dailyMeals: 4,
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [availableFoods, setAvailableFoods] = useState<FoodItem[]>([]);
    const [foodSearch, setFoodSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch available foods
                const foodsRes = await fetch('/api/foods');
                const foodsData = await foodsRes.json();
                setAvailableFoods(foodsData.foods || []);

                // Fetch current profile
                const profileRes = await fetch('/api/profile');
                if (profileRes.ok) {
                    const data = await profileRes.json();
                    if (data.profile) {
                        setFormData({
                            height: data.profile.height.toString(),
                            weight: data.profile.weight.toString(),
                            activityLevel: data.profile.activityLevel,
                            goal: data.profile.goal,
                            gender: data.profile.gender,
                            birthDate: new Date(data.profile.birthDate).toISOString().split('T')[0],
                            likedFoods: data.profile.likedFoods ? data.profile.likedFoods.split(',') : [],
                            dailyMeals: data.profile.dailyMeals || 4,
                        });
                    }
                }
            } catch (err) {
                console.error(err);
                setError(t('profile.error'));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const toggleFood = (foodName: string) => {
        setFormData(prev => {
            const newLiked = prev.likedFoods.includes(foodName)
                ? prev.likedFoods.filter(f => f !== foodName)
                : [...prev.likedFoods, foodName];
            return { ...prev, likedFoods: newLiked };
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setError('');
        setSuccess('');

        try {
            const res = await fetch('/api/profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    likedFoods: formData.likedFoods.join(','),
                }),
            });

            if (!res.ok) {
                throw new Error(t('profile.error'));
            }

            setSuccess(t('profile.success'));
            router.refresh();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="container" style={{ padding: '2rem', textAlign: 'center' }}>
                {t('common.loading')}
            </div>
        );
    }

    return (
        <div className="container container-narrow">
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            </div>
            <h1 style={{ marginBottom: '2rem', color: 'var(--primary)' }}>{t('profile.title')}</h1>

            {error && (
                <div style={{ padding: '0.75rem', backgroundColor: '#ffe5e5', color: 'var(--error)', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
                    {error}
                </div>
            )}

            {success && (
                <div style={{ padding: '0.75rem', backgroundColor: '#e5ffe5', color: 'var(--success)', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
                    {success}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <label className="label" style={{ marginBottom: 0 }}>{t('profile.language')}</label>
                        <LanguageToggle />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                        <label className="label" htmlFor="gender">{t('profile.gender')}</label>
                        <select
                            id="gender"
                            className="input"
                            value={formData.gender}
                            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        >
                            <option value="male">{t('profile.male')}</option>
                            <option value="female">{t('profile.female')}</option>
                        </select>
                    </div>
                    <div>
                        <label className="label" htmlFor="birthDate">{t('profile.birthDate')}</label>
                        <input
                            id="birthDate"
                            type="date"
                            className="input"
                            value={formData.birthDate}
                            onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                            required
                        />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                        <label className="label" htmlFor="height">{t('profile.height')}</label>
                        <input
                            id="height"
                            type="number"
                            className="input"
                            value={formData.height}
                            onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                            required
                            min={100}
                            max={250}
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="weight">{t('profile.weight')}</label>
                        <input
                            id="weight"
                            type="number"
                            className="input"
                            value={formData.weight}
                            onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                            required
                            min={30}
                            max={300}
                        />
                    </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label className="label" htmlFor="activityLevel">{t('profile.activityLevel')}</label>
                    <select
                        id="activityLevel"
                        className="input"
                        value={formData.activityLevel}
                        onChange={(e) => setFormData({ ...formData, activityLevel: e.target.value })}
                    >
                        <option value="sedentary">{t('profile.sedentary')}</option>
                        <option value="light">{t('profile.light')}</option>
                        <option value="moderate">{t('profile.moderate')}</option>
                        <option value="active">{t('profile.active')}</option>
                        <option value="very_active">{t('profile.very_active')}</option>
                    </select>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <label className="label" htmlFor="goal">{t('profile.goal')}</label>
                    <select
                        id="goal"
                        className="input"
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    >
                        <option value="lose_weight">{t('profile.lose_weight')}</option>
                        <option value="maintain">{t('profile.maintain')}</option>
                        <option value="gain_muscle">{t('profile.gain_muscle')}</option>
                    </select>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <label className="label" htmlFor="dailyMeals">{t('profile.dailyMeals')}</label>
                    <select
                        id="dailyMeals"
                        className="input"
                        value={formData.dailyMeals}
                        onChange={(e) => setFormData({ ...formData, dailyMeals: parseInt(e.target.value) })}
                    >
                        <option value={3}>{t('profile.meals_3')}</option>
                        <option value={4}>{t('profile.meals_4')}</option>
                        <option value={5}>{t('profile.meals_5')}</option>
                    </select>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <label className="label">{t('profile.foodsYouLike')}</label>

                    {/* Selected Foods Chips */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                        {formData.likedFoods.map(foodName => {
                            const food = availableFoods.find(f => f.name === foodName);
                            const displayName = food ? (t('common.save') === 'Guardar' && food.nameEs ? food.nameEs : food.name) : foodName;
                            return (
                                <button
                                    key={foodName}
                                    type="button"
                                    onClick={() => toggleFood(foodName)}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: 'var(--radius-full)',
                                        border: '1px solid var(--primary)',
                                        backgroundColor: 'var(--primary)',
                                        color: 'white',
                                        cursor: 'pointer',
                                        fontSize: '0.875rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    {displayName} <span style={{ fontSize: '1.2em', lineHeight: 0 }}>&times;</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder={t('dashboard.searchFood')}
                        className="input"
                        value={foodSearch}
                        onChange={(e) => setFoodSearch(e.target.value)}
                        style={{ marginBottom: '1rem' }}
                    />

                    {/* Available Foods List */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', maxHeight: '200px', overflowY: 'auto', padding: '0.5rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
                        {availableFoods
                            .filter(food => !formData.likedFoods.includes(food.name))
                            .filter(food => {
                                const searchLower = foodSearch.toLowerCase();
                                const nameLower = food.name.toLowerCase();
                                const nameEsLower = food.nameEs?.toLowerCase() || '';
                                return nameLower.includes(searchLower) || nameEsLower.includes(searchLower);
                            })
                            .map(food => (
                                <button
                                    key={food.id}
                                    type="button"
                                    onClick={() => toggleFood(food.name)}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: 'var(--radius-full)',
                                        border: '1px solid var(--border)',
                                        backgroundColor: 'var(--surface)',
                                        color: 'var(--text-primary)',
                                        cursor: 'pointer',
                                        fontSize: '0.875rem',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {t('common.save') === 'Guardar' && food.nameEs ? food.nameEs : food.name}
                                </button>
                            ))}
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                    disabled={saving}
                >
                    {saving ? t('profile.saving') : t('profile.saveChanges')}
                </button>
            </form>
        </div>
    );
}

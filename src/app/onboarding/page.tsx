'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface FoodItem {
    id: string;
    name: string;
    category: string;
}

export default function OnboardingPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        height: '',
        weight: '',
        activityLevel: 'sedentary',
        goal: 'maintain',
        gender: 'male',
        birthDate: '',
        likedFoods: [] as string[],
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [availableFoods, setAvailableFoods] = useState<FoodItem[]>([]);

    useEffect(() => {
        fetch('/api/foods')
            .then(res => res.json())
            .then(data => setAvailableFoods(data.foods || []))
            .catch(console.error);
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
        setLoading(true);
        setError('');

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
                throw new Error('Failed to save profile');
            }

            router.push('/dashboard');
            router.refresh();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ minHeight: '100vh', padding: '2rem 0', display: 'flex', justifyContent: 'center' }}>
            <div className="card" style={{ width: '100%', maxWidth: '600px' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--primary)' }}>Tell us about yourself</h1>
                <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                    We need this information to calculate your personalized nutrition plan.
                </p>

                {error && (
                    <div style={{ padding: '0.75rem', backgroundColor: '#ffe5e5', color: 'var(--error)', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                        <div>
                            <label className="label" htmlFor="gender">Gender</label>
                            <select
                                id="gender"
                                className="input"
                                value={formData.gender}
                                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label className="label" htmlFor="birthDate">Birth Date</label>
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
                            <label className="label" htmlFor="height">Height (cm)</label>
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
                            <label className="label" htmlFor="weight">Weight (kg)</label>
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
                        <label className="label" htmlFor="activityLevel">Activity Level</label>
                        <select
                            id="activityLevel"
                            className="input"
                            value={formData.activityLevel}
                            onChange={(e) => setFormData({ ...formData, activityLevel: e.target.value })}
                        >
                            <option value="sedentary">Sedentary (Little or no exercise)</option>
                            <option value="light">Lightly active (Exercise 1-3 days/week)</option>
                            <option value="moderate">Moderately active (Exercise 3-5 days/week)</option>
                            <option value="active">Active (Exercise 6-7 days/week)</option>
                            <option value="very_active">Very active (Hard exercise & physical job)</option>
                        </select>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <label className="label" htmlFor="goal">Goal</label>
                        <select
                            id="goal"
                            className="input"
                            value={formData.goal}
                            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        >
                            <option value="lose_weight">Lose Weight</option>
                            <option value="maintain">Maintain Weight</option>
                            <option value="gain_muscle">Gain Muscle</option>
                        </select>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <label className="label">Foods you like (Select all that apply)</label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                            {availableFoods.map(food => (
                                <button
                                    key={food.id}
                                    type="button"
                                    onClick={() => toggleFood(food.name)}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: 'var(--radius-full)',
                                        border: '1px solid var(--border)',
                                        backgroundColor: formData.likedFoods.includes(food.name) ? 'var(--primary)' : 'var(--surface)',
                                        color: formData.likedFoods.includes(food.name) ? 'white' : 'var(--text-primary)',
                                        cursor: 'pointer',
                                        fontSize: '0.875rem',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {food.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ width: '100%' }}
                        disabled={loading}
                    >
                        {loading ? 'Calculating Plan...' : 'Create Plan'}
                    </button>
                </form>
            </div>
        </div>
    );
}

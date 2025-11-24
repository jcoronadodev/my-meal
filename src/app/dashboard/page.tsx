'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { calculateBMR, calculateTDEE, calculateTargets } from '@/lib/calculations';

interface FoodLog {
    id: string;
    foodName: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    mealType: string;
}

interface Profile {
    height: number;
    weight: number;
    activityLevel: string;
    goal: string;
    gender: string;
    birthDate: string;
}

export default function DashboardPage() {
    const router = useRouter();
    const [profile, setProfile] = useState<Profile | null>(null);
    const [logs, setLogs] = useState<FoodLog[]>([]);
    const [loading, setLoading] = useState(true);
    const [showAddFood, setShowAddFood] = useState(false);

    // New Food Form State
    const [newFood, setNewFood] = useState({
        foodName: '',
        calories: '',
        protein: '',
        carbs: '',
        fat: '',
        mealType: 'breakfast',
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [profileRes, logsRes] = await Promise.all([
                fetch('/api/profile'),
                fetch('/api/food?date=' + new Date().toISOString())
            ]);

            if (profileRes.status === 401) {
                router.push('/login');
                return;
            }

            const profileData = await profileRes.json();
            const logsData = await logsRes.json();

            setProfile(profileData.profile);
            setLogs(logsData.logs);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddFood = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/food', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...newFood,
                    date: new Date(),
                }),
            });

            if (res.ok) {
                setShowAddFood(false);
                setNewFood({
                    foodName: '',
                    calories: '',
                    protein: '',
                    carbs: '',
                    fat: '',
                    mealType: 'breakfast',
                });
                fetchData(); // Refresh data
            }
        } catch (error) {
            console.error('Error adding food:', error);
        }
    };

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/login');
    };

    if (loading) {
        return <div className="container" style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>;
    }

    if (!profile) {
        return <div className="container">Profile not found. <a href="/onboarding">Complete setup</a></div>;
    }

    // Calculate Targets
    const age = new Date().getFullYear() - new Date(profile.birthDate).getFullYear();
    const bmr = calculateBMR(profile.weight, profile.height, age, profile.gender);
    const tdee = calculateTDEE(bmr, profile.activityLevel);
    const targets = calculateTargets(tdee, profile.goal);

    // Calculate Consumed
    const consumed = logs.reduce(
        (acc, log) => ({
            calories: acc.calories + log.calories,
            protein: acc.protein + log.protein,
            carbs: acc.carbs + log.carbs,
            fat: acc.fat + log.fat,
        }),
        { calories: 0, protein: 0, carbs: 0, fat: 0 }
    );

    const remaining = {
        calories: targets.calories - consumed.calories,
        protein: targets.protein - consumed.protein,
        carbs: targets.carbs - consumed.carbs,
        fat: targets.fat - consumed.fat,
    };

    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ color: 'var(--primary)' }}>Today's Dashboard</h1>
                <button onClick={handleLogout} className="btn btn-secondary">Log Out</button>
            </header>

            {/* Summary Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div className="card" style={{ textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Calories</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>{consumed.calories} / {targets.calories}</p>
                    <p style={{ fontSize: '0.875rem', color: remaining.calories >= 0 ? 'var(--success)' : 'var(--error)' }}>
                        {remaining.calories >= 0 ? `${remaining.calories} left` : `${Math.abs(remaining.calories)} over`}
                    </p>
                </div>
                <div className="card" style={{ textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Protein</h3>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{consumed.protein}g / {targets.protein}g</p>
                </div>
                <div className="card" style={{ textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Carbs</h3>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{consumed.carbs}g / {targets.carbs}g</p>
                </div>
                <div className="card" style={{ textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Fat</h3>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{consumed.fat}g / {targets.fat}g</p>
                </div>
            </div>

            {/* Food Log Section */}
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2>Food Log</h2>
                    <button
                        className="btn btn-primary"
                        onClick={() => setShowAddFood(!showAddFood)}
                    >
                        {showAddFood ? 'Cancel' : 'Add Food'}
                    </button>
                </div>

                {showAddFood && (
                    <AddFoodForm onAdd={() => {
                        setShowAddFood(false);
                        fetchData();
                    }} />
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {logs.length === 0 ? (
                        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '1rem' }}>No food logged today.</p>
                    ) : (
                        logs.map(log => (
                            <div key={log.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid var(--border)' }}>
                                <div>
                                    <span style={{ fontWeight: 'bold', display: 'block' }}>{log.foodName}</span>
                                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textTransform: 'capitalize' }}>{log.mealType}</span>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ fontWeight: 'bold', display: 'block', color: 'var(--primary)' }}>{log.calories} kcal</span>
                                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                        P: {log.protein}g C: {log.carbs}g F: {log.fat}g
                                    </span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

function AddFoodForm({ onAdd }: { onAdd: () => void }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [selectedFood, setSelectedFood] = useState<any>(null);
    const [weight, setWeight] = useState('100');
    const [mealType, setMealType] = useState('breakfast');
    const [customMode, setCustomMode] = useState(false);

    // Custom food state
    const [customFood, setCustomFood] = useState({
        foodName: '',
        calories: '',
        protein: '',
        carbs: '',
        fat: '',
    });

    useEffect(() => {
        if (searchQuery.length > 1 && !selectedFood) {
            const timeoutId = setTimeout(() => {
                fetch(`/api/foods/search?q=${searchQuery}`)
                    .then(res => res.json())
                    .then(data => setSearchResults(data.foods || []));
            }, 300);
            return () => clearTimeout(timeoutId);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery, selectedFood]);

    const handleSelectFood = (food: any) => {
        setSelectedFood(food);
        setSearchQuery(food.name);
        setSearchResults([]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let foodData;
        if (customMode) {
            foodData = { ...customFood, mealType };
        } else if (selectedFood) {
            const ratio = parseFloat(weight) / 100;
            foodData = {
                foodName: selectedFood.name,
                calories: Math.round(selectedFood.caloriesPer100g * ratio),
                protein: Math.round(selectedFood.proteinPer100g * ratio * 10) / 10,
                carbs: Math.round(selectedFood.carbsPer100g * ratio * 10) / 10,
                fat: Math.round(selectedFood.fatPer100g * ratio * 10) / 10,
                mealType,
            };
        } else {
            return;
        }

        try {
            const res = await fetch('/api/food', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...foodData,
                    date: new Date(),
                }),
            });

            if (res.ok) {
                onAdd();
            }
        } catch (error) {
            console.error('Error adding food:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: 'var(--background)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                <button
                    type="button"
                    onClick={() => { setCustomMode(!customMode); setSelectedFood(null); setSearchQuery(''); }}
                    style={{ fontSize: '0.875rem', color: 'var(--primary)', background: 'none', border: 'none', textDecoration: 'underline' }}
                >
                    {customMode ? 'Search Database' : 'Enter Custom Food'}
                </button>
            </div>

            {!customMode ? (
                <>
                    <div style={{ marginBottom: '1rem', position: 'relative' }}>
                        <label className="label">Search Food</label>
                        <input
                            className="input"
                            value={searchQuery}
                            onChange={e => { setSearchQuery(e.target.value); setSelectedFood(null); }}
                            placeholder="e.g. Chicken Breast"
                            required
                        />
                        {searchResults.length > 0 && (
                            <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', zIndex: 10, maxHeight: '200px', overflowY: 'auto', boxShadow: 'var(--shadow-md)' }}>
                                {searchResults.map(food => (
                                    <div
                                        key={food.id}
                                        onClick={() => handleSelectFood(food)}
                                        style={{ padding: '0.5rem 1rem', cursor: 'pointer', borderBottom: '1px solid var(--border)' }}
                                    >
                                        {food.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {selectedFood && (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                            <div>
                                <label className="label">Weight (g)</label>
                                <input
                                    type="number"
                                    className="input"
                                    value={weight}
                                    onChange={e => setWeight(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="label">Meal Type</label>
                                <select
                                    className="input"
                                    value={mealType}
                                    onChange={e => setMealType(e.target.value)}
                                >
                                    <option value="breakfast">Breakfast</option>
                                    <option value="lunch">Lunch</option>
                                    <option value="dinner">Dinner</option>
                                    <option value="snack">Snack</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {selectedFood && (
                        <div style={{ padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}>
                            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                Calculated: {Math.round(selectedFood.caloriesPer100g * (parseFloat(weight) / 100))} kcal |
                                P: {Math.round(selectedFood.proteinPer100g * (parseFloat(weight) / 100))}g |
                                C: {Math.round(selectedFood.carbsPer100g * (parseFloat(weight) / 100))}g |
                                F: {Math.round(selectedFood.fatPer100g * (parseFloat(weight) / 100))}g
                            </p>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                        <div>
                            <label className="label">Food Name</label>
                            <input
                                className="input"
                                value={customFood.foodName}
                                onChange={e => setCustomFood({ ...customFood, foodName: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            <label className="label">Meal Type</label>
                            <select
                                className="input"
                                value={mealType}
                                onChange={e => setMealType(e.target.value)}
                            >
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                                <option value="snack">Snack</option>
                            </select>
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                        <div>
                            <label className="label">Calories</label>
                            <input
                                type="number"
                                className="input"
                                value={customFood.calories}
                                onChange={e => setCustomFood({ ...customFood, calories: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            <label className="label">Protein (g)</label>
                            <input
                                type="number"
                                className="input"
                                value={customFood.protein}
                                onChange={e => setCustomFood({ ...customFood, protein: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="label">Carbs (g)</label>
                            <input
                                type="number"
                                className="input"
                                value={customFood.carbs}
                                onChange={e => setCustomFood({ ...customFood, carbs: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="label">Fat (g)</label>
                            <input
                                type="number"
                                className="input"
                                value={customFood.fat}
                                onChange={e => setCustomFood({ ...customFood, fat: e.target.value })}
                            />
                        </div>
                    </div>
                </>
            )}

            <button type="submit" className="btn btn-primary" disabled={!customMode && !selectedFood}>Save Entry</button>
        </form>
    );
}

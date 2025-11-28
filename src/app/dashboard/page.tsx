'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { calculateBMR, calculateTDEE, calculateTargets } from '@/lib/calculations';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useLanguage } from '@/context/LanguageContext';


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
    dailyMeals: number;
}

const MEAL_CONFIG: Record<number, { key: string; labelKey: string }[]> = {
    3: [
        { key: 'breakfast', labelKey: 'meals.breakfast' },
        { key: 'lunch', labelKey: 'meals.lunch' },
        { key: 'dinner', labelKey: 'meals.dinner' },
    ],
    4: [
        { key: 'breakfast', labelKey: 'meals.breakfast' },
        { key: 'lunch', labelKey: 'meals.lunch' },
        { key: 'dinner', labelKey: 'meals.dinner' },
        { key: 'snack', labelKey: 'meals.snack' },
    ],
    5: [
        { key: 'breakfast', labelKey: 'meals.breakfast' },
        { key: 'morning_snack', labelKey: 'meals.morning_snack' },
        { key: 'lunch', labelKey: 'meals.lunch' },
        { key: 'afternoon_snack', labelKey: 'meals.afternoon_snack' },
        { key: 'dinner', labelKey: 'meals.dinner' },
    ],
};

export default function DashboardPage() {
    const router = useRouter();
    const { t } = useLanguage();
    const [profile, setProfile] = useState<Profile | null>(null);
    const [logs, setLogs] = useState<FoodLog[]>([]);
    const [loading, setLoading] = useState(true);
    const [addingFoodTo, setAddingFoodTo] = useState<string | null>(null);

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

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/login');
    };

    if (loading) {
        return <div className="container" style={{ padding: '2rem', textAlign: 'center' }}>{t('common.loading')}</div>;
    }

    if (!profile) {
        return <div className="container">{t('common.profileNotFound')} <a href="/onboarding">{t('common.completeSetup')}</a></div>;
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

    const mealSections = MEAL_CONFIG[profile.dailyMeals || 4] || MEAL_CONFIG[4];

    // Helper to group logs, handling legacy/unmapped types
    const getLogsForSection = (sectionKey: string) => {
        return logs.filter(log => {
            if (log.mealType === sectionKey) return true;
            // Map legacy 'snack' to 'snack' or 'afternoon_snack' if in 5-meal mode
            if (log.mealType === 'snack') {
                if (profile.dailyMeals === 5 && sectionKey === 'afternoon_snack') return true;
                if (profile.dailyMeals !== 5 && sectionKey === 'snack') return true;
            }
            return false;
        });
    };

    const handleDeleteLog = async (id: string) => {
        if (!confirm(t('common.confirmDelete'))) return;

        try {
            const res = await fetch(`/api/food/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                fetchData();
            }
        } catch (error) {
            console.error('Error deleting log:', error);
        }
    };

    return (
        <div className="container">
            <header className="header-responsive">
                <h1 style={{ color: 'var(--primary)' }}>{t('dashboard.title')}</h1>
                <div className="header-actions">

                    <Link href="/profile" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>{t('dashboard.profile')}</Link>
                    <Link href="/progress" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>{t('dashboard.progress')}</Link>
                    <button onClick={handleLogout} className="btn btn-secondary">{t('common.logOut')}</button>
                </div>
            </header>

            {/* Summary Cards */}
            <div className="grid-responsive">
                <div className="card" style={{ textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{t('dashboard.calories')}</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>{consumed.calories} / {targets.calories}</p>
                    <p style={{ fontSize: '0.875rem', color: remaining.calories >= 0 ? 'var(--success)' : 'var(--error)' }}>
                        {remaining.calories >= 0 ? `${remaining.calories} ${t('dashboard.left')}` : `${Math.abs(remaining.calories)} ${t('dashboard.over')}`}
                    </p>
                </div>
                <div className="card" style={{ textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{t('dashboard.protein')}</h3>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{consumed.protein}g / {targets.protein}g</p>
                </div>
                <div className="card" style={{ textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{t('dashboard.carbs')}</h3>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{consumed.carbs}g / {targets.carbs}g</p>
                </div>
                <div className="card" style={{ textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{t('dashboard.fat')}</h3>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{consumed.fat}g / {targets.fat}g</p>
                </div>
            </div>

            {/* Meal Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {mealSections.map(section => {
                    const sectionLogs = getLogsForSection(section.key);
                    const sectionCalories = sectionLogs.reduce((acc, log) => acc + log.calories, 0);
                    const sectionProtein = sectionLogs.reduce((acc, log) => acc + log.protein, 0);
                    const sectionCarbs = sectionLogs.reduce((acc, log) => acc + log.carbs, 0);
                    const sectionFat = sectionLogs.reduce((acc, log) => acc + log.fat, 0);

                    return (
                        <div key={section.key} className="card">
                            <div className="section-header">
                                <div>
                                    <h2 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{t(section.labelKey)}</h2>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{sectionCalories} kcal | {sectionProtein} P | {sectionCarbs} C | {sectionFat} F</p>
                                </div>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => setAddingFoodTo(addingFoodTo === section.key ? null : section.key)}
                                    style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                                >
                                    {addingFoodTo === section.key ? t('common.cancel') : t('dashboard.addFood')}
                                </button>
                            </div>

                            {addingFoodTo === section.key && (
                                <AddFoodForm
                                    initialMealType={section.key}
                                    onAdd={() => {
                                        setAddingFoodTo(null);
                                        fetchData();
                                    }}
                                    onCancel={() => setAddingFoodTo(null)}
                                />
                            )}

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {sectionLogs.length === 0 ? (
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontStyle: 'italic' }}>{t('dashboard.noFoodLogged')}</p>
                                ) : (
                                    sectionLogs.map(log => (
                                        <div key={log.id} className="log-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div>
                                                <span style={{ fontWeight: 'bold', display: 'block' }}>{log.foodName}</span>
                                                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                                                    P: {log.protein}g C: {log.carbs}g F: {log.fat}g
                                                </span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>{log.calories} kcal</span>
                                                <button
                                                    onClick={() => handleDeleteLog(log.id)}
                                                    style={{ background: 'none', border: 'none', color: 'var(--error)', cursor: 'pointer', fontSize: '1.2rem', padding: '0.25rem' }}
                                                    title={t('common.delete')}
                                                >
                                                    &times;
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function AddFoodForm({ onAdd, onCancel, initialMealType }: { onAdd: () => void; onCancel: () => void; initialMealType: string }) {
    const { t } = useLanguage();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [selectedFood, setSelectedFood] = useState<any>(null);
    const [quantity, setQuantity] = useState('1');
    const [unit, setUnit] = useState('grams'); // 'grams' or 'serving'
    const [mealType, setMealType] = useState(initialMealType);
    const [customMode, setCustomMode] = useState(false);
    const [scanning, setScanning] = useState(false);

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
                fetch(`/api/foods?q=${searchQuery}`)
                    .then(res => res.json())
                    .then(data => setSearchResults(data.foods || []));
            }, 300);
            return () => clearTimeout(timeoutId);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery, selectedFood]);

    useEffect(() => {
        if (scanning) {
            const scanner = new Html5QrcodeScanner(
                "reader",
                { fps: 10, qrbox: { width: 250, height: 250 } },
                /* verbose= */ false
            );
            scanner.render(onScanSuccess, onScanFailure);

            function onScanSuccess(decodedText: string, decodedResult: any) {
                setSearchQuery(decodedText);
                setScanning(false);
                scanner.clear();
            }

            function onScanFailure(error: any) {
                // handle scan failure, usually better to ignore and keep scanning.
                // console.warn(`Code scan error = ${error}`);
            }

            return () => {
                scanner.clear().catch(error => console.error("Failed to clear html5-qrcode scanner. ", error));
            };
        }
    }, [scanning]);

    const handleSelectFood = (food: any) => {
        setSelectedFood(food);
        setSearchQuery(food.name);
        setSearchResults([]);
        // Default to serving unit if available, otherwise grams
        if (food.servingUnit) {
            setUnit('serving');
            setQuantity('1');
        } else {
            setUnit('grams');
            setQuantity('100');
        }
    };

    const calculateNutrition = () => {
        if (!selectedFood) return { calories: 0, protein: 0, carbs: 0, fat: 0 };

        let ratio = 0;
        if (unit === 'grams') {
            ratio = parseFloat(quantity) / 100;
        } else if (unit === 'serving' && selectedFood.servingSize) {
            ratio = (parseFloat(quantity) * selectedFood.servingSize) / 100;
        }

        return {
            calories: Math.round(selectedFood.caloriesPer100g * ratio),
            protein: Math.round(selectedFood.proteinPer100g * ratio * 10) / 10,
            carbs: Math.round(selectedFood.carbsPer100g * ratio * 10) / 10,
            fat: Math.round(selectedFood.fatPer100g * ratio * 10) / 10,
        };
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let foodData;
        if (customMode) {
            foodData = { ...customFood, mealType };
        } else if (selectedFood) {
            const nutrition = calculateNutrition();
            foodData = {
                foodName: selectedFood.name,
                ...nutrition,
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

    const nutrition = calculateNutrition();

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <button
                    type="button"
                    onClick={() => setScanning(!scanning)}
                    style={{ fontSize: '0.875rem', color: 'var(--primary)', background: 'none', border: 'none', textDecoration: 'underline' }}
                >
                    {scanning ? t('common.cancel') : 'Scan Barcode'}
                </button>
                <button
                    type="button"
                    onClick={() => { setCustomMode(!customMode); setSelectedFood(null); setSearchQuery(''); }}
                    style={{ fontSize: '0.875rem', color: 'var(--primary)', background: 'none', border: 'none', textDecoration: 'underline' }}
                >
                    {customMode ? t('dashboard.searchDatabase') : t('dashboard.enterCustomFood')}
                </button>
            </div>

            {scanning && <div id="reader" style={{ width: '100%', marginBottom: '1rem' }}></div>}

            {!customMode ? (
                <>
                    <div style={{ marginBottom: '1rem', position: 'relative' }}>
                        <label className="label">{t('dashboard.searchFood')}</label>
                        <input
                            className="input"
                            value={searchQuery}
                            onChange={e => { setSearchQuery(e.target.value); setSelectedFood(null); }}
                            placeholder="e.g. Chicken Breast"
                            required
                            autoFocus
                        />
                        {searchResults.length > 0 && (
                            <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', zIndex: 10, maxHeight: '200px', overflowY: 'auto', boxShadow: 'var(--shadow-md)' }}>
                                {searchResults.map(food => (
                                    <div
                                        key={food.id}
                                        onClick={() => handleSelectFood(food)}
                                        style={{ padding: '0.5rem 1rem', cursor: 'pointer', borderBottom: '1px solid var(--border)' }}
                                    >
                                        {food.nameEs && t('common.save') === 'Guardar' ? food.nameEs : food.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {selectedFood && (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                            <div>
                                <label className="label">{t('dashboard.quantity')}</label>
                                <input
                                    type="number"
                                    className="input"
                                    value={quantity}
                                    onChange={e => setQuantity(e.target.value)}
                                    required
                                    min="0"
                                    step="0.1"
                                />
                            </div>
                            <div>
                                <label className="label">{t('dashboard.unit')}</label>
                                <select
                                    className="input"
                                    value={unit}
                                    onChange={e => setUnit(e.target.value)}
                                >
                                    <option value="grams">Grams (g)</option>
                                    {selectedFood.servingUnit && (
                                        <option value="serving">
                                            {selectedFood.servingUnit} ({selectedFood.servingSize}g)
                                        </option>
                                    )}
                                </select>
                            </div>
                        </div>
                    )}

                    {selectedFood && (
                        <div style={{ padding: '1rem', backgroundColor: 'var(--background)', borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}>
                            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                {t('dashboard.calculated')}: {nutrition.calories} kcal |
                                P: {nutrition.protein}g |
                                C: {nutrition.carbs}g |
                                F: {nutrition.fat}g
                            </p>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '1rem' }}>
                        <div>
                            <label className="label">{t('dashboard.foodName')}</label>
                            <input
                                className="input"
                                value={customFood.foodName}
                                onChange={e => setCustomFood({ ...customFood, foodName: e.target.value })}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-grid">
                        <div>
                            <label className="label">{t('dashboard.calories')}</label>
                            <input
                                type="number"
                                className="input"
                                value={customFood.calories}
                                onChange={e => setCustomFood({ ...customFood, calories: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            <label className="label">{t('dashboard.protein')} (g)</label>
                            <input
                                type="number"
                                className="input"
                                value={customFood.protein}
                                onChange={e => setCustomFood({ ...customFood, protein: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="label">{t('dashboard.carbs')} (g)</label>
                            <input
                                type="number"
                                className="input"
                                value={customFood.carbs}
                                onChange={e => setCustomFood({ ...customFood, carbs: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="label">{t('dashboard.fat')} (g)</label>
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

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button type="button" onClick={onCancel} className="btn btn-secondary">{t('common.cancel')}</button>
                <button type="submit" className="btn btn-primary" disabled={!customMode && !selectedFood}>{t('dashboard.saveEntry')}</button>
            </div>
        </form>
    );
}

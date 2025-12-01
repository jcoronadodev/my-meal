'use client';

import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface Ingredient {
    id: string;
    name: string;
    nameEs: string | null;
    amount: number;
    unit: string;
}

interface Recipe {
    id: string;
    name: string;
    nameEs: string | null;
    description: string | null;
    descriptionEs: string | null;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    tags: string;
    prepTime: number;
    cookTime: number;
    instructions: string;
    instructionsEs: string | null;
    ingredients: Ingredient[];
}

export default function RecipesPage() {
    const { t, language } = useLanguage();
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [mealType, setMealType] = useState('breakfast');
    const [adding, setAdding] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [favorites, setFavorites] = useState<string[]>([]);
    const [showToast, setShowToast] = useState(false);

    const fetchRecipes = useCallback(async () => {
        setLoading(true);
        try {
            let url = `/api/recipes?limit=50`;
            if (searchQuery) url += `&q=${encodeURIComponent(searchQuery)}`;
            if (selectedTag) url += `&tag=${encodeURIComponent(selectedTag)}`;

            const res = await fetch(url);
            if (res.ok) {
                const data = await res.json();
                setRecipes(data);
            }
        } catch (error) {
            console.error('Error fetching recipes:', error);
        } finally {
            setLoading(false);
        }
    }, [searchQuery, selectedTag]);

    useEffect(() => {
        const savedFavorites = localStorage.getItem('favoriteRecipes');
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
        fetchRecipes();
    }, [fetchRecipes]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            fetchRecipes();
        }, 300);
        return () => clearTimeout(timeoutId);
    }, [fetchRecipes]);

    const handleRecipeClick = (recipe: Recipe) => {
        setSelectedRecipe(recipe);
        setShowModal(true);
    };

    const toggleFavorite = (e: React.MouseEvent, recipeId: string) => {
        e.stopPropagation();
        setFavorites(prev => {
            const newFavorites = prev.includes(recipeId)
                ? prev.filter(id => id !== recipeId)
                : [...prev, recipeId];
            localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
            return newFavorites;
        });
    };

    const handleAddToLog = async () => {
        if (!selectedRecipe) return;
        setAdding(true);
        try {
            const res = await fetch('/api/log-recipe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    recipeId: selectedRecipe.id,
                    mealType,
                    date: new Date().toISOString(),
                }),
            });

            if (res.ok) {
                setShowModal(false);
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
            } else {
                alert('Failed to add recipe to log');
            }
        } catch (error) {
            console.error('Error adding recipe:', error);
            alert('Error adding recipe');
        } finally {
            setAdding(false);
        }
    };

    const getRecipeName = (recipe: Recipe) => {
        return language === 'es' && recipe.nameEs ? recipe.nameEs : recipe.name;
    };

    const getRecipeDescription = (recipe: Recipe) => {
        return language === 'es' && recipe.descriptionEs ? recipe.descriptionEs : recipe.description;
    };

    const getRecipeInstructions = (recipe: Recipe) => {
        return language === 'es' && recipe.instructionsEs ? recipe.instructionsEs : recipe.instructions;
    };

    const getIngredientName = (ingredient: Ingredient) => {
        return language === 'es' && ingredient.nameEs ? ingredient.nameEs : ingredient.name;
    };

    const tags = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'High Protein', 'Low Carb', 'Vegan', 'Keto'];

    const getTagLabel = (tag: string) => {
        const keyMap: Record<string, string> = {
            'Breakfast': 'breakfast',
            'Lunch': 'lunch',
            'Dinner': 'dinner',
            'Snack': 'snack',
            'High Protein': 'highProtein',
            'Low Carb': 'lowCarb',
            'Vegan': 'vegan',
            'Keto': 'keto'
        };
        return keyMap[tag] ? t(`recipes.${keyMap[tag]}` as any) : tag;
    };

    return (
        <div className="container" style={{ paddingBottom: '5rem' }}>
            <header className="header-responsive" style={{ marginBottom: '1rem' }}>
                <h1 style={{ color: 'var(--primary)' }}>{t('recipes.title')}</h1>
            </header>

            {/* Search and Filter */}
            <div style={{ marginBottom: '1.5rem' }}>
                <input
                    type="text"
                    placeholder={t('recipes.searchPlaceholder')}
                    className="input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ marginBottom: '1rem' }}
                />
                <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                    <button
                        className={`btn ${!selectedTag ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => setSelectedTag(null)}
                        style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem', whiteSpace: 'nowrap' }}
                    >
                        {t('recipes.all')}
                    </button>
                    {tags.map(tag => (
                        <button
                            key={tag}
                            className={`btn ${selectedTag === tag ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                            style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem', whiteSpace: 'nowrap' }}
                        >
                            {getTagLabel(tag)}
                        </button>
                    ))}
                </div>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
                    {t('recipes.loading')}
                </div>
            ) : (
                <div className="grid-responsive">
                    {recipes.map((recipe) => (
                        <div
                            key={recipe.id}
                            className="card"
                            onClick={() => handleRecipeClick(recipe)}
                            style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s', position: 'relative' }}
                        >
                            <div style={{ height: '120px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                <span style={{ fontSize: '3rem' }}>🍲</span>
                                <div style={{ position: 'absolute', bottom: '0.5rem', right: '0.5rem', backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '1rem', fontSize: '0.75rem' }}>
                                    {recipe.calories} kcal
                                </div>
                                <button
                                    onClick={(e) => toggleFavorite(e, recipe.id)}
                                    style={{
                                        position: 'absolute',
                                        top: '0.5rem',
                                        right: '0.5rem',
                                        background: 'rgba(255,255,255,0.8)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '32px',
                                        height: '32px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        color: favorites.includes(recipe.id) ? 'red' : 'gray'
                                    }}
                                >
                                    ♥
                                </button>
                            </div>
                            <div style={{ padding: '1rem' }}>
                                <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{getRecipeName(recipe)}</h3>
                                <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                                    <span>⏱ {recipe.prepTime + recipe.cookTime} min</span>
                                    <span>🥩 {recipe.protein}g P</span>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                                    {recipe.tags.split(',').slice(0, 2).map(tag => (
                                        <span key={tag} style={{ backgroundColor: 'var(--background)', color: 'var(--primary)', padding: '0.1rem 0.5rem', borderRadius: '1rem', fontSize: '0.7rem' }}>
                                            {getTagLabel(tag.trim())}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Recipe Details Modal */}
            {showModal && selectedRecipe && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center'
                }} onClick={() => setShowModal(false)}>
                    <div
                        style={{
                            backgroundColor: 'var(--surface)',
                            width: '100%',
                            maxWidth: '600px',
                            maxHeight: '90vh',
                            borderTopLeftRadius: '1.5rem',
                            borderTopRightRadius: '1.5rem',
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            animation: 'slideUp 0.3s ease-out',
                            paddingBottom: '2rem',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        }}
                        className="no-scrollbar"
                        onClick={e => e.stopPropagation()}
                    >
                        <style jsx>{`
                            .no-scrollbar::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                        <div style={{ height: '200px', backgroundColor: '#e0e0e0', position: 'relative', flexShrink: 0 }}>
                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '5rem' }}>🍲</span>
                            </div>
                            <button
                                onClick={() => setShowModal(false)}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'rgba(255,255,255,0.8)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '36px',
                                    height: '36px',
                                    fontSize: '1.2rem',
                                    cursor: 'pointer',
                                    color: 'var(--text-primary)'
                                }}
                            >
                                ✕
                            </button>
                        </div>

                        <div style={{ padding: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{getRecipeName(selectedRecipe)}</h2>
                                <button
                                    onClick={(e) => toggleFavorite(e, selectedRecipe.id)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        fontSize: '1.5rem',
                                        color: favorites.includes(selectedRecipe.id) ? 'red' : 'gray',
                                        cursor: 'pointer'
                                    }}
                                >
                                    ♥
                                </button>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{getRecipeDescription(selectedRecipe)}</p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '1.5rem', backgroundColor: 'var(--background)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{t('recipes.calories')}</div>
                                    <div style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>{selectedRecipe.calories}</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{t('recipes.protein')}</div>
                                    <div style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>{selectedRecipe.protein}g</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{t('recipes.carbs')}</div>
                                    <div style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>{selectedRecipe.carbs}g</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{t('recipes.fat')}</div>
                                    <div style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>{selectedRecipe.fat}g</div>
                                </div>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{t('recipes.ingredients')}</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {selectedRecipe.ingredients.map((ing: Ingredient) => (
                                        <li key={ing.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--border)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                            <span>{getIngredientName(ing)}</span>
                                            <span style={{ color: 'var(--text-secondary)' }}>{ing.amount} {ing.unit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{t('recipes.instructions')}</h3>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                                    {getRecipeInstructions(selectedRecipe)}
                                </div>
                            </div>

                            <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{t('recipes.addToMeal')}</label>
                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                                    <select
                                        value={mealType}
                                        onChange={(e) => setMealType(e.target.value)}
                                        className="input"
                                        style={{ flex: 1 }}
                                    >
                                        <option value="breakfast">{t('recipes.breakfast')}</option>
                                        <option value="lunch">{t('recipes.lunch')}</option>
                                        <option value="dinner">{t('recipes.dinner')}</option>
                                        <option value="snack">{t('recipes.snack')}</option>
                                    </select>
                                    <button
                                        onClick={handleAddToLog}
                                        disabled={adding}
                                        className="btn btn-primary"
                                        style={{ flex: 1 }}
                                    >
                                        {adding ? t('recipes.adding') : t('recipes.addToLog')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast Notification */}
            {showToast && (
                <div style={{
                    position: 'fixed',
                    bottom: '5rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--success)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '2rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    zIndex: 2000,
                    animation: 'fadeIn 0.3s ease-out'
                }}>
                    {t('recipes.toastMessage')}
                </div>
            )}
        </div>
    );
}

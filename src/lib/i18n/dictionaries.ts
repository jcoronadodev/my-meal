export type Dictionary = {
    auth: {
        loginTitle: string;
        signupTitle: string;
        name: string;
        email: string;
        password: string;
        loginButton: string;
        signupButton: string;
        loggingIn: string;
        creatingAccount: string;
        noAccount: string;
        hasAccount: string;
        errorGeneric: string;
    };
    common: {
        loading: string;
        profileNotFound: string;
        completeSetup: string;
        logOut: string;
        cancel: string;
        save: string;
        delete: string;
        confirmDelete: string;
        saving: string;
    };
    dashboard: {
        title: string;
        profile: string;
        progress: string;
        recipes: string;
        calories: string;
        protein: string;
        carbs: string;
        fat: string;
        left: string;
        over: string;
        addFood: string;
        noFoodLogged: string;
        searchFood: string;
        enterCustomFood: string;
        searchDatabase: string;
        weight: string;
        foodName: string;
        saveEntry: string;
        calculated: string;
        quantity: string;
        unit: string;
        nutritionalDetails: string;
        close: string;
        placeholders: {
            breakfast: string;
            lunch: string;
            dinner: string;
            snack: string;
        };
        units: {
            grams: string;
            serving: string;
        };
    };
    meals: {
        breakfast: string;
        lunch: string;
        dinner: string;
        snack: string;
        morning_snack: string;
        afternoon_snack: string;
    };
    profile: {
        title: string;
        backToDashboard: string;
        gender: string;
        birthDate: string;
        height: string;
        weight: string;
        activityLevel: string;
        goal: string;
        dailyMeals: string;
        foodsYouLike: string;
        saveChanges: string;
        saving: string;
        success: string;
        error: string;
        male: string;
        female: string;
        sedentary: string;
        light: string;
        moderate: string;
        active: string;
        very_active: string;
        lose_weight: string;
        maintain: string;
        gain_muscle: string;
        meals_3: string;
        meals_4: string;
        meals_5: string;
        language: string;
    };
    progress: {
        title: string;
        backToDashboard: string;
        weeklyCheckIn: string;
        currentWeight: string;
        startWeight: string;
        totalChange: string;
        history: string;
        noCheckIns: string;
        date: string;
        waist: string;
        notes: string;
        checkInTitle: string;
        saveError: string;
        weightPlaceholder: string;
        waistSize: string;
        waistPlaceholder: string;
        optional: string;
        notesPlaceholder: string;
        saveCheckIn: string;
    };
    recipes: {
        title: string;
        searchPlaceholder: string;
        all: string;
        loading: string;
        calories: string;
        protein: string;
        carbs: string;
        fat: string;
        ingredients: string;
        instructions: string;
        addToMeal: string;
        addToLog: string;
        adding: string;
        toastMessage: string;
        breakfast: string;
        lunch: string;
        dinner: string;
        snack: string;
        highProtein: string;
        lowCarb: string;
        vegan: string;
        keto: string;
    };
};

export const dictionaries: Record<'en' | 'es', Dictionary> = {
    en: {
        auth: {
            loginTitle: 'Welcome Back',
            signupTitle: 'Create Account',
            name: 'Name',
            email: 'Email',
            password: 'Password',
            loginButton: 'Log In',
            signupButton: 'Sign Up',
            loggingIn: 'Logging In...',
            creatingAccount: 'Creating Account...',
            noAccount: "Don't have an account?",
            hasAccount: 'Already have an account?',
            errorGeneric: 'Something went wrong',
        },
        common: {
            loading: 'Loading...',
            profileNotFound: 'Profile not found.',
            completeSetup: 'Complete setup',
            logOut: 'Log Out',
            cancel: 'Cancel',
            save: 'Save',
            delete: 'Delete',
            confirmDelete: 'Are you sure you want to delete this item?',
            saving: 'Saving...',
        },
        dashboard: {
            title: "Today's Dashboard",
            profile: 'Profile',
            progress: 'Progress',
            recipes: 'Recipes',
            calories: 'Calories',
            protein: 'Protein',
            carbs: 'Carbs',
            fat: 'Fat',
            left: 'left',
            over: 'over',
            addFood: 'Add Food',
            noFoodLogged: 'No food logged yet.',
            searchFood: 'Search Food',
            enterCustomFood: 'Enter Custom Food',
            searchDatabase: 'Search Database',
            weight: 'Weight (g)',
            foodName: 'Food Name',
            saveEntry: 'Save Entry',
            calculated: 'Calculated',
            quantity: 'Quantity',
            unit: 'Unit',
            nutritionalDetails: 'Nutritional Details',
            close: 'Close',
            placeholders: {
                breakfast: 'e.g. Scrambled Eggs',
                lunch: 'e.g. Grilled Chicken',
                dinner: 'e.g. Salmon Salad',
                snack: 'e.g. Apple',
            },
            units: {
                grams: 'Grams (g)',
                serving: 'Serving',
            },
        },
        meals: {
            breakfast: 'Breakfast',
            lunch: 'Lunch',
            dinner: 'Dinner',
            snack: 'Snack',
            morning_snack: 'Morning Snack',
            afternoon_snack: 'Afternoon Snack',
        },
        profile: {
            title: 'Edit Profile',
            backToDashboard: '← Back to Dashboard',
            gender: 'Gender',
            birthDate: 'Birth Date',
            height: 'Height (cm)',
            weight: 'Weight (kg)',
            activityLevel: 'Activity Level',
            goal: 'Goal',
            dailyMeals: 'Daily Meals',
            foodsYouLike: 'Foods you like',
            saveChanges: 'Save Changes',
            saving: 'Saving...',
            success: 'Profile updated successfully!',
            error: 'Failed to update profile',
            male: 'Male',
            female: 'Female',
            sedentary: 'Sedentary (Little or no exercise)',
            light: 'Lightly active (Exercise 1-3 days/week)',
            moderate: 'Moderately active (Exercise 3-5 days/week)',
            active: 'Active (Exercise 6-7 days/week)',
            very_active: 'Very active (Hard exercise & physical job)',
            lose_weight: 'Lose Weight',
            maintain: 'Maintain Weight',
            gain_muscle: 'Gain Muscle',
            meals_3: '3 Meals (Breakfast, Lunch, Dinner)',
            meals_4: '4 Meals (+ Snack)',
            meals_5: '5 Meals (+ Morning & Afternoon Snack)',
            language: 'Language',
        },
        progress: {
            title: 'My Progress',
            backToDashboard: '← Back to Dashboard',
            weeklyCheckIn: '+ Weekly Check-in',
            currentWeight: 'Current Weight',
            startWeight: 'Start Weight',
            totalChange: 'Total Change',
            history: 'History',
            noCheckIns: 'No check-ins yet. Start tracking your progress!',
            date: 'Date',
            waist: 'Waist',
            notes: 'Notes',
            checkInTitle: 'Weekly Check-in',
            saveError: 'Failed to save check-in',
            weightPlaceholder: 'e.g. 75.5',
            waistSize: 'Waist Size (cm)',
            waistPlaceholder: 'e.g. 80',
            optional: '(Optional)',
            notesPlaceholder: 'How are you feeling? Any non-scale victories?',
            saveCheckIn: 'Save Check-in',
        },
        recipes: {
            title: 'Recipes',
            searchPlaceholder: 'Search recipes...',
            all: 'All',
            loading: 'Loading recipes...',
            calories: 'Cal',
            protein: 'Prot',
            carbs: 'Carb',
            fat: 'Fat',
            ingredients: 'Ingredients',
            instructions: 'Instructions',
            addToMeal: 'Add to Meal',
            addToLog: 'Add to Log',
            adding: 'Adding...',
            toastMessage: 'Recipe added to log!',
            breakfast: 'Breakfast',
            lunch: 'Lunch',
            dinner: 'Dinner',
            snack: 'Snack',
            highProtein: 'High Protein',
            lowCarb: 'Low Carb',
            vegan: 'Vegan',
            keto: 'Keto',
        },
    },
    es: {
        auth: {
            loginTitle: 'Bienvenido de nuevo',
            signupTitle: 'Crear Cuenta',
            name: 'Nombre',
            email: 'Correo Electrónico',
            password: 'Contraseña',
            loginButton: 'Iniciar Sesión',
            signupButton: 'Registrarse',
            loggingIn: 'Iniciando Sesión...',
            creatingAccount: 'Creando Cuenta...',
            noAccount: '¿No tienes una cuenta?',
            hasAccount: '¿Ya tienes una cuenta?',
            errorGeneric: 'Algo salió mal',
        },
        common: {
            loading: 'Cargando...',
            profileNotFound: 'Perfil no encontrado.',
            completeSetup: 'Completar configuración',
            logOut: 'Cerrar Sesión',
            cancel: 'Cancelar',
            save: 'Guardar',
            delete: 'Eliminar',
            confirmDelete: '¿Estás seguro de que deseas eliminar este elemento?',
            saving: 'Guardando...',
        },
        dashboard: {
            title: 'Dashboard',
            profile: 'Perfil',
            progress: 'Progreso',
            recipes: 'Recetas',
            calories: 'Calorías',
            protein: 'Proteína',
            carbs: 'Carbohidratos',
            fat: 'Grasas',
            left: 'restantes',
            over: 'excedidas',
            addFood: 'Agregar Comida',
            noFoodLogged: 'No hay comida registrada aún.',
            searchFood: 'Buscar Comida',
            enterCustomFood: 'Ingresar Comida Personalizada',
            searchDatabase: 'Buscar en Base de Datos',
            weight: 'Peso (g)',
            foodName: 'Nombre de la Comida',
            saveEntry: 'Guardar Entrada',
            calculated: 'Calculado',
            quantity: 'Cantidad',
            unit: 'Unidad',
            nutritionalDetails: 'Detalles Nutricionales',
            close: 'Cerrar',
            placeholders: {
                breakfast: 'ej. Huevos Revueltos',
                lunch: 'ej. Pollo a la Parrilla',
                dinner: 'ej. Ensalada de Salmón',
                snack: 'ej. Manzana',
            },
            units: {
                grams: 'Gramos (g)',
                serving: 'Porción',
            },
        },
        meals: {
            breakfast: 'Desayuno',
            lunch: 'Almuerzo',
            dinner: 'Cena',
            snack: 'Merienda',
            morning_snack: 'Media Mañana',
            afternoon_snack: 'Media Tarde',
        },
        profile: {
            title: 'Editar Perfil',
            backToDashboard: '← Volver al Panel',
            gender: 'Género',
            birthDate: 'Fecha de Nacimiento',
            height: 'Altura (cm)',
            weight: 'Peso (kg)',
            activityLevel: 'Nivel de Actividad',
            goal: 'Objetivo',
            dailyMeals: 'Comidas Diarias',
            foodsYouLike: 'Comidas que te gustan',
            saveChanges: 'Guardar Cambios',
            saving: 'Guardando...',
            success: '¡Perfil actualizado exitosamente!',
            error: 'Error al actualizar el perfil',
            male: 'Masculino',
            female: 'Femenino',
            sedentary: 'Sedentario (Poco o nada de ejercicio)',
            light: 'Ligeramente activo (Ejercicio 1-3 días/semana)',
            moderate: 'Moderadamente activo (Ejercicio 3-5 días/semana)',
            active: 'Activo (Ejercicio 6-7 días/semana)',
            very_active: 'Muy activo (Ejercicio intenso y trabajo físico)',
            lose_weight: 'Perder Peso',
            maintain: 'Mantener Peso',
            gain_muscle: 'Ganar Músculo',
            meals_3: '3 Comidas (Desayuno, Almuerzo, Cena)',
            meals_4: '4 Comidas (+ Merienda)',
            meals_5: '5 Comidas (+ Media Mañana y Media Tarde)',
            language: 'Idioma',
        },
        progress: {
            title: 'Mi Progreso',
            backToDashboard: '← Volver al Panel',
            weeklyCheckIn: '+ Check-in Semanal',
            currentWeight: 'Peso Actual',
            startWeight: 'Peso Inicial',
            totalChange: 'Cambio Total',
            history: 'Historial',
            noCheckIns: 'Aún no hay registros. ¡Comienza a seguir tu progreso!',
            date: 'Fecha',
            waist: 'Cintura',
            notes: 'Notas',
            checkInTitle: 'Check-in Semanal',
            saveError: 'Error al guardar el check-in',
            weightPlaceholder: 'ej. 75.5',
            waistSize: 'Cintura (cm)',
            waistPlaceholder: 'ej. 80',
            optional: '(Opcional)',
            notesPlaceholder: '¿Cómo te sientes? ¿Alguna victoria no relacionada con la balanza?',
            saveCheckIn: 'Guardar Check-in',
        },
        recipes: {
            title: 'Recetas',
            searchPlaceholder: 'Buscar recetas...',
            all: 'Todo',
            loading: 'Cargando recetas...',
            calories: 'Cal',
            protein: 'Prot',
            carbs: 'Carb',
            fat: 'Grasa',
            ingredients: 'Ingredientes',
            instructions: 'Instrucciones',
            addToMeal: 'Agregar a la Comida',
            addToLog: 'Agregar al Registro',
            adding: 'Agregando...',
            toastMessage: '¡Receta agregada al registro!',
            breakfast: 'Desayuno',
            lunch: 'Almuerzo',
            dinner: 'Cena',
            snack: 'Merienda',
            highProtein: 'Alto en Proteína',
            lowCarb: 'Bajo en Carbohidratos',
            vegan: 'Vegano',
            keto: 'Keto',
        },
    },
};

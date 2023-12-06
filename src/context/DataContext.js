import React, { createContext, useContext, useReducer } from 'react';

// Define your initial state (you can initialize it with empty arrays or other default values).
const initialState = {
    "expenses": [
        {
            "name": "Car insurance",
            "category": "Food",
            "cost": "200",
            "freqValue": "1",
            "freqUnit": "month(s)",
            "startDate": "2024-01-01T06:00:00.000Z",
            "oneTime": false
        },
        {
            "name": "Rent",
            "category": "Food",
            "cost": "1500",
            "freqValue": "1",
            "freqUnit": "month(s)",
            "oneTime": false
        },
        {
            "name": "Car payment",
            "category": "Utilities",
            "cost": "600",
            "freqValue": "1",
            "freqUnit": "month(s)",
            "oneTime": false
        }
    ],
    "incomes": [
        {
            "name": "Oracle salary",
            "amount": "3000",
            "freqValue": "2",
            "freqUnit": "week(s)",
            "startDate": "2024-01-01T06:00:00.000Z",
            "oneTime": false
        }
    ]
};

// Create a context for your data.
const DataContext = createContext();

// Create a data provider component that will wrap your entire application.
export function DataProvider({ children }) {
    const [state, dispatch] = useReducer(dataReducer, initialState);

    // Define your dataReducer function to handle data changes.
    function dataReducer(state, action) {
        switch (action.type) {
            case 'ADD_EXPENSE':
                return {
                    ...state,
                    expenses: [...state.expenses, action.payload],
                };
            case 'ADD_INCOME':
                return {
                    ...state,
                    incomes: [...state.incomes, action.payload],
                };
            // You can add more cases for other data management operations.
            default:
                return state;
        }
    }

    return (
        <DataContext.Provider value={{ state, dispatch }}>{children}</DataContext.Provider>
    );
}

// Create custom hooks to easily access the context and dispatch function.
export function useData() {
    return useContext(DataContext);
}
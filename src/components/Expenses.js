import React, { useState } from 'react';
import { Grid } from '@mui/material';
import ExpenseForm from './ExpenseForm';
import ExpenseGrid from './ExpenseGrid';

const Expenses = () => {
    var dummyData = [
        {
            "id": 1,
            "name": "Apple",
            "category": "Food",
            "cost": 10,
            "frequencyPerYear": 20
        },
        {
            "id": 2,
            "name": "Broccoli",
            "category": "Food",
            "cost": 20,
            "frequencyPerYear": 20
        },
        {
            "id": 3,
            "name": "Gas",
            "category": "Utilities",
            "cost": 20,
            "frequencyPerYear": 30
        },
        {
            "id": 4,
            "name": "Electric",
            "category": "Utilities",
            "cost": 20,
            "frequencyPerYear": 30
        }
    ];

    return (
        <div style={{ padding: "20px" }}>
            <Grid container spacing={2}>
                <Grid xs={12} lg={4} style={{ padding: "20px" }}>
                    <ExpenseForm />
                </Grid>
                <Grid xs={12} lg={8} style={{ padding: "20px" }}>
                    <ExpenseGrid expenses={dummyData} />
                </Grid>
            </Grid>
        </div>
    );
};

export default Expenses;

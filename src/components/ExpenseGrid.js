import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel } from '@mui/material';
import { useData } from '../context/DataContext';

function ExpenseGrid({ expenses, onDelete, onUpdate }) {
    const { state, dispatch } = useData();
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filteredExpenses =
        selectedCategory === 'All'
            ? state.expenses
            : state.expenses.filter((expense) => expense.category === selectedCategory);

    return (
        <div>
            <Typography variant="h5" gutterBottom style={{ textAlign: "left" }}>
                Expenses
            </Typography>
            <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel>Filter by Category</InputLabel>
                <Select
                    label="Filter by Category"
                    value={selectedCategory}
                    onChange={handleChange}
                >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Food">Food</MenuItem>
                    <MenuItem value="Utilities">Utilities</MenuItem>
                    <MenuItem value="Entertainment">Entertainment</MenuItem>
                    {/* Add more categories as needed */}
                </Select>
            </FormControl>


            <Grid container spacing={2}>
                {filteredExpenses.map((expense) => (
                    <Grid item xs={12} sm={6} md={4} key={expense.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {expense.name}
                                </Typography>
                                <Typography color="textSecondary">
                                    Category: {expense.category}
                                </Typography>
                                <Typography color="textSecondary">
                                    Cost: {expense.cost}
                                </Typography>
                                <Typography color="textSecondary">
                                    Frequency: Once every {expense.freqValue} {expense.freqUnit}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="primary"
                                    onClick={() => onUpdate(expense)}
                                >
                                    Update
                                </Button>
                                <Button
                                    size="small"
                                    color="secondary"
                                    onClick={() => onDelete(expense.id)}
                                >
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default ExpenseGrid;

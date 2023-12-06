import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Tooltip } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useData } from '../context/DataContext';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';


// import { API, graphqlOperation } from 'aws-amplify';
// import { listIncomes } from './graphql/queries'; // Import your GraphQL queries



const IncomeList = ({ setFormData }) => {
    const { state, dispatch } = useData();
    const [incomes, setIncomes] = useState([]);


    const fetchIncomes = async () => {
        /*
        try {
            const response = await API.graphql(graphqlOperation(listIncomes));
            const incomeData = response.data.listIncomes.items;
            setIncomes(incomeData);
        } catch (error) {
            console.error('Error fetching incomes:', error);
        }
        */

        console.log("fetchIncomes called");
    };


    const handleDelete = async (incomeId) => {
        /*
        try {
            // Call Amplify API to delete the income by ID
            // Replace 'deleteIncome' with your GraphQL mutation
            await API.graphql(
                graphqlOperation(deleteIncome, { input: { id: incomeId } })
            );

            // Refresh the income list
            fetchIncomes();
        } catch (error) {
            console.error('Error deleting income:', error);
        }
        */

        console.log("handleDelete called");
    };

    const handleEdit = (income) => {
        // Clear the fields in Income Form and set the fields to the item being edited
        setFormData({
            ID: income.ID,
            OneTime: income.OneTime,
            Amount: income.Amount,
            Frequency: income.Frequency,
            StartDate: new Date(income.StartDate),
        });
    };
    const columns = [
        { field: 'id', headerName: 'ID' },
        {
            field: 'name',
            headerName: 'Name',
            width: 100,
            editable: true,
        },
        {
            field: 'amount',
            headerName: 'Amount',
            type: 'number',
            width: 100,
            editable: true,
        },
        {
            field: 'date',
            headerName: 'Start/Pay Date',
            width: 200,
            editable: true,
        },
        {
            field: 'frequency',
            headerName: 'Frequency',
            sortable: false,
            width: 200
        },
    ];


    const rows = [
        { id: 1, name: 'Snow', amount: 'Jon', date: 35, frequency: "1 day/week" },
    ];

    const constructRows = state.incomes.map((income, index) => {
        return {
            id: index,
            name: income.name,
            amount: income.amount,
            date: income.startDate,
            frequency: "1x every " + income.freqValue + " " + income.freqUnit
        }
    })



    useEffect(() => {
        // Fetch incomes and reload the Income List when the component mounts
        // fetchIncomes();
    }, []);

    return (
        <div>
            <Typography variant="h5" gutterBottom style={{ textAlign: "left" }}>
                Income Streams
            </Typography>

            <FormControl fullWidth variant="outlined" margin="normal">
                <div style={{ height: "400px", width: '100%' }}>
                    <DataGrid
                        rows={constructRows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </div>
            </FormControl>
        </div>

    );
};

export default IncomeList;

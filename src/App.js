import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import ExpenseForm from './components/ExpenseForm';
import ExpenseGrid from './components/ExpenseGrid';
import Grid from '@mui/material/Unstable_Grid2';
import IncomeForm from './components/IncomeForm';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Expenses from './components/Expenses';
import Income from './components/Income';
import Summary from './components/Summary';
import Home from './components/Home';
import { Outlet } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";



function App({ signOut }) {

  return (
    <div className="App" style={{ padding: "20px" }}>
      <DataProvider>
        <ButtonAppBar signOut={signOut} />
        <Outlet />
      </DataProvider>
    </div>
  );
}

export default withAuthenticator(App);

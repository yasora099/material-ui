import React from 'react';
import './App.css';
import MyButton from './MyButton'
import Navbar from "./Navbar";
import Grid from "./Grid";
//npm install @types/react-routerimport Table from "./Table";
import SideMenu from "./SideMenu";
//import TableData from "./components/TableData";
//import { Router, Route, Switch } from "react-router";
//import Button from '@material-ui/core/Button';

const App: React.FC = () => {
    return (
        <div className="App">
            <MyButton buttonText={'click'}/>
            <Navbar />
            {/*<div>*/}
                {/*<Route component={SideMenu} />*/}
                {/*<Route path="/dashboard" component={TableData} />*/}
            {/*</div>*/}
            <SideMenu/>
            {/*<TableData/>*/}
            {/*<Grid />*/}
            {/*<Table />*/}
        </div>
    );
};

export default App;

import React,{ useState , useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./component/Header";
import Main from "./component/Main";
import Menu from "./component/Menu/Menu";
import "./App.css";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import Button from '@mui/material/Button';

/* ------------------ 기록 페이지 ------------------ */
import Record from "./component/Record";





export default function Index( props ) {

 return ( <>
        <BrowserRouter>
            <div className="header">
                <Header />
            </div>
            <div className="content">
                <div className="main-content">
                    <Routes >
                        <Route path="/" element = { <Main /> } />
                        <Route path="/Record" element = { <Record /> } />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </> );
}
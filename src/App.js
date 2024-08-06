import React, { useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { NavBar,SearchFeed,Feed,VideoDetails,ChannelDetails } from './Components/index';
 const App =() => 
 (
    <BrowserRouter>
    <Box>
        <NavBar/>
        <Routes>
         <Route path='/' exact element={<Feed/>}/>   
         <Route path='/video/:id' element={<VideoDetails/>}/>   
         <Route path='/channel/:id' exact element={<ChannelDetails/>}/>   
         <Route path='/search/:serchTerm' exact element={<SearchFeed/>}/>   
         <Route path='/' exact element={<Feed/>}/>   
         <Route/>   
        </Routes>
    </Box>
    </BrowserRouter>
        // <div>App</div>
    );


export default App;

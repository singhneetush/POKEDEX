import './App.css';
import NavBar from './components/NavBar';
import ColumnGroupingTable from './components/Table';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Example from './components/Example';

function App() {
	// const addUser = (userData) => {
	// 	setUserData([...userDatas, userData]);
	// };

	return (
		<div>
			<NavBar />
			{/* <Box sx={{ margin: 15 }}>
				<ColumnGroupingTable  />
			</Box> */}
			{/* <Example /> */}
		</div>
	);
}

export default App;


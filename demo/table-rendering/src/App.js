import './App.css';
import NavBar from './components/NavBar';
import ReactVirtualizedTable from './components/Table';
import Box from '@mui/material/Box';
// import Form from './components/Form';

function App() {
	return (
		<div>
			<NavBar />
			<Box sx={{ margin: 15 }}>
				<ReactVirtualizedTable />
				
			</Box>
		</div>
	);
}

export default App;

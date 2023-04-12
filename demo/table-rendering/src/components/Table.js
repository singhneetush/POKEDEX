import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
	{ id: 'name', label: 'Name', minWidth: 170 },
	{ id: 'email', label: 'Email', minWidth: 100 },
	{
		id: 'DOJ',
		label: 'DOJ',
		minWidth: 170,
		align: 'right',
		format: (value) => value.toLocaleString('en-US'),
	},
	{
		id: 'gender',
		label: 'Gender',
		minWidth: 170,
		align: 'right',
		// format: (value) => value.toLocaleString('en-US'),
	},
	{
		id: 'course',
		label: 'Course',
		minWidth: 170,
		align: 'right',
		// format: (value) => value.toFixed(2),
	},
	{
		id: 'actions',
		label: 'Actions',
		minWidth: 170,
		align: 'right',
		// format: (value) => value.toFixed(2),
	},
];

function createData(name, email, tel, DOJ, gender, course, edit, del) {
	return { name, email, tel, DOJ, gender, course, edit, del };
}

const rows = [
	createData('abc', 'abc', 123, 11, 'M', 'Web', <EditIcon />, <DeleteIcon />),
	createData('abc', 'abc', 123, 11, 'M', 'Web', <EditIcon />, <DeleteIcon />),
	createData('abc', 'abc', 123, 11, 'M', 'Web', <EditIcon />, <DeleteIcon />),
	createData('abc', 'abc', 123, 11, 'M', 'Web', <EditIcon />, <DeleteIcon />),
	createData('abc', 'abc', 123, 11, 'M', 'Web', <EditIcon />, <DeleteIcon />),
];

export default function ColumnGroupingTable() {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper elevation={10} sx={{ width: '100%' }}>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label='sticky table'>
					<TableHead>
						<TableRow>
							<TableCell align='center' colSpan={2}>
								Personal Information
							</TableCell>
							<TableCell align='center' colSpan={3}>
								Details
							</TableCell>
							<TableCell align='center' colSpan={2}>
								Actions
							</TableCell>
						</TableRow>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ top: 57, minWidth: column.minWidth }}>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => {
								return (
									<TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
										{columns.map((column) => {
											const value = row[column.id];
											return (
												<TableCell key={column.id} align={column.align}>
													{column.format && typeof value === 'number'
														? column.format(value)
														: value}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component='div'
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}

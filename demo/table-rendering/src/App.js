import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import UserTable from './components/tables/UserTable';
import AddUserForm from './components/forms/AddUserForm';
import EditUserForm from './components/forms/EditUserForm';
import Navbar from './components/Navbar';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';

// const userArray = JSON.parse(localStorage.getItem('users') || '[]');

const App = () => {
	const usersData = [];

	const [users, setUsers] = useState(usersData);

	const addUser = (user) => {
		user.id = uuidv4();
		setUsers([...users, user]);
		// userArray.push(user);
		// console.log('userarray is ', userArray);
	};

	const deleteUser = (id) => {
		setUsers(users.filter((user) => user.id !== id));
	};

	const [isEditing, setEditing] = useState(false);

	const initialFormState = { id: null, name: '', username: '' };
	const [currentUser, setCurrentUser] = useState(initialFormState);

	const editUser = (user) => {
		setEditing(true);
		setCurrentUser(user);
	};

	const updateUser = (id, editUser) => {
		setEditing(false);
		setUsers(users.map((user) => (user.id === id ? editUser : user)));
	};

	// let tasks = JSON.parse(localStorage.getItem('Tasks') || '[]');

	// const addTask = () => {
	// 	let task = {
	// 		id: Math.random(),
	// 		title: taskTitle.value,
	// 		duration: taskDuration.value,
	// 		status: taskStatus.value,
	// 	};

	// 	tasks.push(task);
	// 	console.log('Task Array is changed: ', { tasks });

	// 	form.reset();
	// };

	return (
		<Box>
			<Navbar />
			<Stack direction='row' spacing={10}>
				<Box sx={{ padding: 10 }}>
					{isEditing ? (
						<div>
							<h2>Edit user</h2>
							<EditUserForm user={currentUser} edit={updateUser} />
						</div>
					) : (
						<div>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</div>
					)}
				</Box>
				<Box sx={{ padding: 10 }}>
					<h2>View users</h2>
					{
						(window.onload = (
							<UserTable
								users={users}
								delete={deleteUser}
								isEditing={setEditing}
								edit={editUser}
							/>
						))
					}
				</Box>
			</Stack>
		</Box>
	);
};

export default App;

import React from 'react';
import UserForm from './UserForm';

// const userArray = JSON.parse(localStorage.getItem('users') || '[]');

const AddUserForm = (props) => {
	const onSubmit = (data, e) => {
		console.log(data);

		props.addUser(data);
		e.target.reset();
		// props.user.push(data);
		// localStorage.setItem('user', JSON.stringify(data));
		// localStorage.setItem('users', JSON.stringify(data));
	};
	return <UserForm onSubmit={onSubmit} />;
};

export default AddUserForm;

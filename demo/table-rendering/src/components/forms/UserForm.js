import React from 'react';
import { useForm } from 'react-hook-form';

const UserForm = (props) => {
	const initialFormState = { id: null, name: '', email: '' };
	const { register, errors, handleSubmit, setValue } = useForm({
		defaultValues: props.user ? props.user : initialFormState,
	});
	setValue('name', props.user ? props.user.name : '');
	setValue('username', props.user ? props.user.username : '');

	return (
		<form onSubmit={() => handleSubmit(props.onSubmit)}>
			<label>Name</label>
			<input
				type='text'
				name='name'
				ref={register({
					required: { value: true, message: 'name is required' },
				})}
			/>
			<div>{errors?.name?.message}</div>
			<label>Email</label>
			<input
				type='text'
				name='Email'
				ref={register({
					required: { value: true, message: 'username is required' },
				})}
			/>
			<div>{errors?.email?.message}</div>
			<button>{props.user ? 'Edit User' : 'Add new user'}</button>
		</form>
	);
};

export default UserForm;

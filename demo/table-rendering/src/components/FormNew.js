import React, { useState } from 'react';
import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	FormHelperText,
	FormLabel,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	Switch,
	TextField,
} from '@mui/material';
import { useForm } from 'react-hook-form';

import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// import { DevTool } from 'react-hook-form-devtools';

const FormNew = () => {
	const initialStates = {
		fullName: '',
		email: '',
	};
	const [users, setUsers] = useState([]); //global state

	const [userData, setUserData] = useState(initialStates); //per person state

	const onSubmit = (data) => {
		const values = getValues();
		console.log('Values are : ', values);
		// setUserData({ ...values, values });
		// console.log('Values are : ', values);

		reset();
	};

	const handleChange = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value })
	}
	const {
		register,
		handleSubmit,
		reset,
		control,
		setValue,
		getValues,
		formState: { errors },
	} = useForm({
		defaultValues: initialStates,
	});

	// setValue('fullName', props.user ? props.user.fullName : '');
	// setValue('email', props.user ? props.user.email : '');

	// const onSubmit = () => {
	// 	const values = getValues();
	// 	console.log(values);
	// 	reset();
	// };

	// const [course, setCourse] = React.useState('');

	// const handleChange = (event) => {
	// 	setCourse(event.target.value);
	// };
	const style = { marginY: 5 };

	// const onInputChange = (event) => {
	// 	console.log(event.target.value);
	// };



	return (
		<Box>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack>
					<FormControl variant='standard'>
						<TextField
							label='Full Name'
							name='name'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<AccountCircle />
									</InputAdornment>
								),
							}}
							// ref={register({
							// 	// value: { inputName },
							// 	required: 'Name is required.',

							// 	pattern: {
							// 		value: '/^[w-.]+@([w-]+.)+[w-]{2,4}$/g',
							// 		message: 'Please enter valid username',
							// 	},
							// 	maxLength: {
							// 		value: 20,
							// 		message: 'The username must be in 20 characters',
							// 	},
							// })}
							{...register('fullName', {
								onChange: (e) => {
									handleChange(e);
								},
								// value: { inputName },
								required: 'Name is required.',

								pattern: {
									value: '/^[w-.]+@([w-]+.)+[w-]{2,4}$/g',
									message: 'Please enter valid username',
								},
								maxLength: {
									value: 20,
									message: 'The username must be in 20 characters',
								},
							})}
							error={Boolean(errors.fullName)}
							helperText={errors.fullName?.message}
						/>
					</FormControl>
					<FormControl sx={style} variant='standard'>
						<TextField
							label='Email'
							type='email'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<EmailIcon />
									</InputAdornment>
								),
							}}
							name='email'
							// ref={register({
							// 	// value: { inputEmail },
							// 	required: 'This is a required field',
							// 	pattern: {
							// 		value: '/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z0-9_-]+)/gi',
							// 		message: 'Please enter a valid email address',
							// 	},
							// 	maxLength: {
							// 		value: 30,
							// 		message: 'Email cannot exceed 30 characters',
							// 	},
							// 	minLength: {
							// 		value: 10,
							// 		message: 'Email must be between 10 to 30 characters',
							// 	},
							// })}
							{...register('email', {
								onChange: (e) => {
									handleChange(e);
								},
								// value: { inputEmail },
								required: 'This is a required field',
								pattern: {
									value: '/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z0-9_-]+)/gi',
									message: 'Please enter a valid email address',
								},
								maxLength: {
									value: 30,
									message: 'Email cannot exceed 30 characters',
								},
								minLength: {
									value: 10,
									message: 'Email must be between 10 to 30 characters',
								},
							})}
							error={Boolean(errors.email)}
							helperText={errors.email?.message}
						/>
					</FormControl>
				</Stack>
				<Button variant='contained' type='submit'>
					Submit
				</Button>
			</form>
			{/* <DevTool control={control} /> */}
		</Box>
	);
};

export default FormNew;

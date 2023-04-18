import { AccountCircle } from '@mui/icons-material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {
	Box,
	TextField,
	Typography,
	Stack,
	Button,
	FormControl,
	InputAdornment,
} from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const UserForm = (props) => {
	const initialFormState = { id: null, name: '', username: '' };
	const {
		register,
		formState: { errors },
		handleSubmit,
		control,
	} = useForm({
		defaultValues: props.user ? props.user : initialFormState,
	});

	const styles = { padding: 3 };
	const style = { marginY: 5 };

	return (
		<form onSubmit={handleSubmit(props.onSubmit)}>
			<Box>
				<Stack sx={{ maxWidth: 300 }}>
					<FormControl variant='standard'>
						<Typography variant='h6'>Name</Typography>
						<TextField
							sx={{ marginTop: 2 }}
							label='Name'
							name='name'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<AccountCircle />
									</InputAdornment>
								),
							}}
							{...register('name', {
								// value: { inputName },
								required: 'Name is required.',

								pattern: {
									value: '^[A-Za-z][A-Za-z0-9_]{7,29}$',
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
						<Typography variant='h6'>Username</Typography>

						<TextField
							sx={{ marginTop: 5 }}
							label='Username'
							type='text'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<AccountBoxIcon />
									</InputAdornment>
								),
							}}
							name='username'
							{...register('username', {
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
							error={Boolean(errors.username)}
							helperText={errors.username?.message}
						/>
					</FormControl>
				</Stack>
				<Button
					sx={{ marginLeft: 5 }}
					color='success'
					variant='contained'
					type='submit'>
					{props.user ? 'Update User' : 'Add new user'}
				</Button>
			</Box>
		</form>
	);
};

export default UserForm;

// <Stack>
// 	<Box>
// 		<Box sx={styles}>
// 			<Typography variant='h6' gutterBottom>
// 				Name
// 			</Typography>
// 			{
// 				/* <Controller
// 				control={control}
// 				name='name'
// 				render={({ field }) => (
// 					<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
// 						<AccountCircle
// 							sx={{ color: 'action.active', mr: 1, my: 0.5 }}
// 						/>
// 						<TextField
// 							id='input-with-sx'
// 							label='Name'
// 							variant='standard'
// 							{...field}

// 							error={!!errors[name]}
// 							helperText={errors[name] ? errors[name].message : ''}
// 						/>
// 					</Box>
// 				)}
// 			/>

// 			<div>{errors?.name?.message}</div> */

// 				<Controller
// 					name='name'
// 					control={control}
// 					defaultValue=''
// 					render={({
// 						field: { onChange, value },
// 						fieldState: { error },
// 					}) => (
// 						// <TextField
// 						// 	label='First Name'
// 						// 	variant='filled'
// 						// 	value={value}
// 						// 	onChange={onChange}
// 						// 	error={!!error}
// 						// 	helperText={error ? error.message : null}
// 						// />
// 						<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
// 							<AccountCircle
// 								sx={{ color: 'action.active', mr: 1, my: 0.5 }}
// 							/>
// 							<TextField
// 								id='input-with-sx'
// 								label='Name'
// 								variant='standard'
// 								value={value}
// 								onChange={onChange}
// 								error={!!error}
// 								helperText={error ? error.message : null}
// 							/>
// 						</Box>
// 					)}
// 					rules={{ required: 'First name required' }}
// 				/>
// 			}
// 		</Box>
// 		<Box sx={styles}>
// 			<Typography variant='h6' gutterBottom>
// 				Username
// 			</Typography>
// 			<Controller
// 				control={control}
// 				name='username'
// 				render={({ field }) => (
// 					<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
// 						<AccountCircle
// 							sx={{ color: 'action.active', mr: 1, my: 0.5 }}
// 						/>
// 						<TextField
// 							id='input-with-sx'
// 							label='Username'
// 							variant='standard'
// 							{...field}
// 						/>
// 					</Box>
// 				)}
// 			/>
// 			<div>{errors?.username?.message}</div>
// 		</Box>
// 	</Box>
// </Stack>

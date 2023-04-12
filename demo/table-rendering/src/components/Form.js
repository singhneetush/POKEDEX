import React, { useEffect } from 'react';
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

const Form = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
		reset();
	};
	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	const style = { marginY: 5 };

	useEffect(() => {
		reset();
	}, []);

	return (
		<Box>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack>
					<FormControl variant='standard'>
						<TextField
							label='Full Name'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<AccountCircle />
									</InputAdornment>
								),
							}}
							{...register('fullName', {
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
							{...register('email', {
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
					<FormControl variant='standard'>
						<TextField
							label='Phone'
							type='tel'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<PhoneAndroidIcon />
									</InputAdornment>
								),
							}}
							name='phone'
							{...register('phone', {
								required: 'Phone Number is required.',
							})}
							error={Boolean(errors.phone)}
							helperText={errors.phone?.message}
						/>
					</FormControl>
					<FormControl sx={style} variant='standard'>
						<TextField
							label='Date Of Joining'
							type='date'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<CalendarMonthIcon />
									</InputAdornment>
								),
							}}
							name='doj'
							{...register('doj', {
								required: 'Date Of Joining is required.',
							})}
							error={Boolean(errors.doj)}
							helperText={errors.doj?.message}
						/>
					</FormControl>
					<FormControl variant='standard' error={Boolean(errors.gender)}>
						<FormLabel id='demo-radio-buttons-group-label'>Gender</FormLabel>
						<RadioGroup
							aria-labelledby='demo-radio-buttons-group-label'
							defaultValue='female'
							name='radio-buttons-group'>
							<FormControlLabel
								value='female'
								label='Female'
								control={
									<Radio
										{...register('gender', { required: 'Choose your gender' })}
									/>
								}
							/>
							<FormControlLabel
								value='male'
								control={
									<Radio
										{...register('gender', { required: 'Choose your gender' })}
									/>
								}
								label='Male'
							/>
							<FormControlLabel
								value='other'
								control={
									<Radio
										{...register('gender', { required: 'Choose your gender' })}
									/>
								}
								label='Other'
							/>
						</RadioGroup>
						<FormHelperText style={{ color: '#d32f2f' }}>
							{errors.gender?.message}
						</FormHelperText>
					</FormControl>
					<FormControl sx={style} variant='standard'>
						<Box sx={{ minWidth: 120 }}>
							<FormControl fullWidth>
								<InputLabel id='demo-simple-select-label'>
									Choose Your Course
								</InputLabel>
								<Select
									{...register('course', { required: 'Choose your Course' })}
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={age}
									label='Choose Your Course'
									onChange={handleChange}>
									<MenuItem value={'Web Development'}>Web Development</MenuItem>
									<MenuItem value={'Android Development'}>
										Android Development
									</MenuItem>
									<MenuItem value={'UI/UX Developer'}>UI/UX Developer</MenuItem>
								</Select>
							</FormControl>
						</Box>
						<FormHelperText style={{ color: '#d32f2f' }}>
							{errors.course?.message}
						</FormHelperText>
					</FormControl>
					<FormControl>
						<FormControlLabel
							control={<Switch defaultChecked />}
							label='Send Regular Updates'
						/>
					</FormControl>
					<FormControl error={Boolean(errors.tnc)}>
						<FormControlLabel
							control={
								<Checkbox
									name='tnc'
									{...register('tnc', {
										required: 'Please Agree to our terms and conditions',
									})}
								/>
							}
							label='I agree to the terms and conditions'
						/>
						<FormHelperText style={{ color: '#d32f2f' }}>
							{errors.tnc?.message}
						</FormHelperText>
					</FormControl>
				</Stack>
				<Button variant='contained' type='submit'>
					Submit
				</Button>
			</form>
		</Box>
	);
};

export default Form;

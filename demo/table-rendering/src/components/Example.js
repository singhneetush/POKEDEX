// import { Button, Grid, MenuItem, Select, TextField } from '@mui/material';
// import React from 'react';
// import { Controller, useFieldArray, useForm } from 'react-hook-form';

// const Example = () => {
// 	const { control, handleSubmit } = useForm({
// 		reValidateMode: 'onBlur',
// 	});

// 	const {
// 		field: members,
// 		append: appendRow,
// 		remove: removeRow,
// 	} = useFieldArray({
// 		control,
// 		name: 'members',
// 	});
// 	const handleAppend = () => appendRow({ email: '', role: '' });
// 	const handleOnSubmit = (evt) => {
// 		const { members } = evt;
// 		console.log(members);
// 	};
// 	return (
// 		<React.Fragment>
// 			<form onSubmit={handleSubmit(handleOnSubmit)}>
// 				{members.map((field, index) => {
// 					<Grid container key={field.id} spacing={1} alignItems='center'>
// 						<Grid item sx={6}>
// 							<Controller
// 								control={control}
// 								name={`members.${index}.email`}
// 								defaultValue=''
// 								render={({ field }) => (
// 									<TextField {...field} type='email' fullWidth />
// 								)}
// 							/>
// 						</Grid>
// 						<Grid item sx={4}>
// 							<Controller
// 								control={control}
// 								name={`members.${index}.role`}
// 								defaultValue='user'
// 								render={({ field }) => (
// 									<Select {...field} fullWidth>
// 										<MenuItem value='user'>User</MenuItem>
// 										<MenuItem value='admin'>
// 											{' '}
// 											<MenuItem value='admin'>Aser</MenuItem>
// 										</MenuItem>
// 									</Select>
// 								)}
// 							/>
// 						</Grid>
// 						<Grid item sx={2}>
// 							<Button
// 								color='error'
// 								variant='text'
// 								onClick={() => removeRow(index)}>
// 								Delete
// 							</Button>
// 						</Grid>
// 					</Grid>;
// 				})}
// 				<Button variant='contained' onClick={handleAppend}>
// 					Add Row
// 				</Button>

// 				<Button type='submit'>Submit</Button>
// 			</form>
// 		</React.Fragment>
// 	);
// };

// export default Example;


import { useForm, Controller, useFieldArray } from 'react-hook-form';
import {
	Autocomplete,
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	Radio,
	RadioGroup,
	TextField,
	Slider,
	Select,
	MenuItem,
} from '@mui/material';
// import './styles.css';

const options = ['A', 'B', 'C', 'D'];
const objOptions = [
	{ value: 65, label: 'A' },
	{ value: 66, label: 'B' },
	{ value: 67, label: 'C' },
];
const myHelper = {
	email: {
		required: 'Email is Required',
		pattern: 'Invalid Email Address',
	},
};

export default function App() {
	const { control, handleSubmit } = useForm({
		reValidateMode: 'onBlur',
	});
	const {
		fields: members,
		append: appendMemberRow,
		remove: removeMemberRow,
	} = useFieldArray({
		control,
		name: 'members',
	});

	console.count('app rerender');

	const handleOnSubmit = (evt) => {
		console.log(evt);
	};

	const addNewMemeber = () => appendMemberRow({ email: '', role: 'user' });

	return (
		<div className='App'>
			<Box component='form' onSubmit={handleSubmit(handleOnSubmit)}>
				<Grid item xs={12}>
					{members.map((field, index) => (
						<Grid container key={field.id} spacing={1} alignItems='center'>
							<Grid item xs={6}>
								<Controller
									control={control}
									// must use . for the object key!!!
									name={`members.${index}.email`}
									defaultValue=''
									render={({ field }) => (
										<TextField {...field} type='email' fullWidth />
									)}
								/>
							</Grid>
							<Grid item xs={4}>
								<Controller
									control={control}
									// must use . for the object key!!!
									name={`members.${index}.role`}
                                    defaultValue='user'
                                    
									render={({ field }) => (
										<Select {...field} fullWidth>
											<MenuItem value='user'>Member</MenuItem>
											<MenuItem value='admin'>Admin</MenuItem>
										</Select>
									)}
								/>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='error'
									variant='text'
									onClick={() => removeMemberRow(index)}>
									Delete
								</Button>
							</Grid>
						</Grid>
					))}
					<Button variant='contained' onClick={addNewMemeber}>
						Add
					</Button>
				</Grid>
				<Grid item xs={12}>
					<Button type='submit'>Submit</Button>
				</Grid>
			</Box>
		</div>
	);
}

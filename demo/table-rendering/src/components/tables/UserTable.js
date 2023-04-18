import { Button } from '@mui/material';
import React from 'react';

const UserTable = (props) => {
	return (
		<table className='table table-hover'>
			<thead>
				<tr className='hover'>
					<th className='text-success p-5'>Name</th>
					<th className='text-success p-5'>Username</th>
					<th className='text-success p-5'>Actions</th>
				</tr>
			</thead>
			<tbody>
				{props.users.length > 0 ? (
					props.users.map((user) => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.username}</td>
							<td>
								<Button
									variant='contained' sx={{marginRight:3}}
									onClick={() => {
										props.edit(user);
									}}>
									Edit
								</Button>
								<Button
									variant='contained'
									onClick={() => {
										props.delete(user.id);
									}}>
									Delete
								</Button>
							</td>
						</tr>
					))
				) : (
					<tr>
						<td className=' p-5' colSpan={3}>
							No users
						</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};

export default UserTable;

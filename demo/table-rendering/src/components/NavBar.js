import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Form from './Form';
import { Modal, Paper } from '@mui/material';
import FormNew from './FormNew';

export default function NavBar() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const style = {
		width: 500,

		maxHeight: 'min-content',
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h5' component='h1' sx={{ flexGrow: 1 }}>
						React Table Rendering
					</Typography>
					<Button color='error' variant='contained' onClick={handleOpen}>
						Register{' '}
					</Button>
					<Modal
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							maxHeight: 'min-content',
							padding: '20px',
						}}
						open={open}
						onClose={handleClose}
						aria-labelledby='modal-modal-title'
						aria-describedby='modal-modal-description'>
						<Paper sx={style}>
							<Box sx={{ padding: 10 }}>
								<FormNew sx={style} />
							</Box>
						</Paper>
					</Modal>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

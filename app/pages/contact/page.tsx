'use client'
import { Box, Container } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2';
import { Input, Button, FormGroup, List, ListItem, Stack, Typography } from '@mui/material'
import Heading from '../../components/Heading'
// import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Common from '../common';

const contact = () => {

	return (<>
		<Common />
		{/* <Header /> */}
		<Container>
			<Box bgcolor={'#eee'} width={500} height={300} justifySelf={'center'} mx={'auto'} mb={10}>

			</Box>
			<Typography variant='h4'>با ما در ارتباط باشید</Typography>
			<FormGroup sx={{ pt: '1rem', pb: '5rem' }}>
				<Grid container>
					<Grid xs={12} md={8} container flexDirection={'column'} rowGap={'1rem'}>
						<textarea placeholder='پیام' rows={10} style={{ backgroundColor: 'transparent', paddingRight: '1rem', border: '1px solid #eee' }}></textarea>
						<Grid container columnSpacing={3}>
							<Grid md={6}>
								<Input type='text' placeholder='نام شما' sx={{ width: '100%', ':before': { borderBottom: 'none' }, ':hover': { ':before': { borderBottom: 'none !important' } }, border: '1px solid #eee', paddingRight: '1rem' }} />
							</Grid>
							<Grid md={6}>
								<Input type='text' placeholder='آدرس ایمیل' sx={{ width: '100%', ':before': { borderBottom: 'none' }, ':hover': { ':before': { borderBottom: 'none !important' } }, border: '1px solid #eee', paddingRight: '1rem' }} />
							</Grid>
						</Grid>
						<Input type='text' placeholder='موضوع' sx={{ ':before': { borderBottom: 'none' }, ':hover': { ':before': { borderBottom: 'none !important' } }, border: '1px solid #eee', paddingRight: '1rem' }} />
						<Button variant='contained' color='inherit' className='button' sx={{ width: '20%', background: 'linear-gradient(to right, rgb(109 41 197 / 85%), rgb(54 13 209 / 85%))', color: 'white', fontSize: '1.1rem', boxShadow: '0px 0px 20px #aaa' }}>ارسال پیام</Button>
					</Grid>
					<Grid xs={12} md={4}>
						<Stack>
							<List>
								<ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
									<i></i>
									<Typography fontWeight={'bold'}>ایران | شیراز</Typography>
									<Typography>همین حوالی</Typography>
								</ListItem>
								<ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
									<i></i>
									<Typography fontWeight={'bold'}>0903230945</Typography>
									<Typography>همه روزه از 8 صبح تا 6 بعد از ظهر</Typography>
								</ListItem>
								<ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
									<i></i>
									<Typography fontWeight={'bold'}>info@webrubik.com</Typography>
									<Typography>برا ما پیا بفرستید</Typography>
								</ListItem>
							</List>
						</Stack>
					</Grid>
				</Grid>
			</FormGroup>
		</Container>
		{/* <Footer /> */}
	</>
	)
}

export default contact
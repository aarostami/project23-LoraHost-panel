'use client'
import { Container, Box, unstable_styleFunctionSx, SxProps, bgcolor, styled, ThemeProvider, style, borderBottom } from '@mui/system'
import Image from 'next/image';
import '../../header.css'
import { createTheme } from '@mui/material';
import Heading from './Heading'
import Search from './MidCom/Search'
import Services from './MidCom/ServicesMe'
import Prices from './MidCom/Prices'
import SecondPrices from './MidCom/SecondPrices'
import Emailnews from './MidCom/Emailnews'
import Textinfo from './MidCom/Textinfo'
import CommentsSlider from './MidCom/CommentsSlider'
import Customers from './MidCom/Customers'
import CssBaseline from '@mui/material/CssBaseline'
// import createTheme from '@mui/system/createTheme'
// import { StyleFunction, ThemeProvider } from 'styled-components'
/* import Byekan from '../fonts/Yekan.ttf'
import Mj_Anoosh from '../fonts/Mj_Anoosh.ttf' */

export default function HomeMiddle() {

	/* interface ArticleProps {
		sx?: SxProps
	} */

	// const theme = createTheme();

	//https://mui.com/system/styled/#custom-components

	const theme = createTheme({
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 768,
				lg: 1025,
				xl: 1536,
			}
		},
		typography: {
			fontFamily: 'Byekan'
		},
		/* components: {
			MuiCssBaseline: {
				styleOverrides: `
					@font-face {
						font-family: 'Byekan';
						src: url(${Byekan}) format('ttf');
					}
				`
			}
		} */
	})

	/* const Heading = styled(Typography)({
		
	}) */

	return <ThemeProvider theme={theme}>
		<main className='main'>
			{/* <Container> */}
			<Search />
			<Customers />
			<Container>
				<hr color='#aaa' />
			</Container>
			<Services />
			<Prices />
			<SecondPrices />
			<Emailnews />
			<Textinfo />
			<CommentsSlider />
			{/* </Container> */}
		</main>
	</ThemeProvider>
}

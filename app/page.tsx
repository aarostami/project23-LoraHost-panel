'use client'
import HomeMiddle from './components/HomeMiddle'
// import styles from './page.module.css'
import { createTheme, ThemeProvider } from '@mui/system'
/* import Byekan from './fonts/Yekan.ttf'
import Mj_Anoosh from './fonts/Mj_Anoosh.ttf' */
// import CssBaseline from '@mui/material/CssBaseline'
//"scripts": {
//"dev": "concurrently \"cross-end NODE_OPTIONS=--max_old_space_size=2048 next dev\"",
//}

/* export async function getStaticProps() {
	
} */

export default function Home() {

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
			fontFamily: 'Mj_Anoosh'
		},
		// components: {
		// 	MuiCssBaseline: {
		// 		styleOverrides: `
		// 			@font-face {
		// 				font-family: 'Byekan';
		// 				src: url(${Byekan}) format('ttf');
		// 			}
		// 		`
		// 	}
		// }
	})
	return (<>
		{/* <CssBaseline /> */}
		{/* <button style={{zIndex: '20', background: 'red', padding: '20px 20px', width: '200px', height: '200px', marginTop: '10px'}}>aaaaa</button> */}
		<HomeMiddle />
	</>)
}

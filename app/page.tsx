'use client'
import Header from './components/Header.jsx'
import Middle from './components/Middle.jsx'
import Footer from './components/Footer.jsx'
import styles from './page.module.css'
import { createTheme, ThemeProvider } from '@mui/system'
import Byekan from './fonts/Yekan.ttf'
import Mj_Anoosh from './fonts/Mj_Anoosh.ttf'
// import CssBaseline from '@mui/material/CssBaseline'
// import Byekan from './fonts/Yekan.ttf'
//"scripts": {
//"dev": "concurrently \"cross-end NODE_OPTIONS=--max_old_space_size=2048 next dev\"",
//}

/* export async function getStaticProps() {
	
} */

export default function Home() {
	// const [show, setShow] = useState()
	/* useEffect(() => {
		
	}, []) */

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
		<Header />
		<Middle />
		<Footer />
	</>)
}

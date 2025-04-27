"use client"
import { useState} from "react";
import FirstRowStatis from "../../components/Panel/FirstRowStatis";
import SecondRowStatis from "../../components/Panel/SecondRowStatis";
import Empolyees from "../../components/Panel/Employees";
import ReceiveMessage from "../../components/Panel/ReceiveMessage";
import LastProjects from "../../components/Panel/LastProjects";
import Grid from '@mui/material/Unstable_Grid2'
import { createTheme } from "@mui/material/styles";

/* const FirstRowStatis = dynamic(
	() => import('../Components/Panel/FirstRowStatis'),
	{ssr: false}
) */

const Main = () => {
	const theme = createTheme({
		typography: {
			fontFamily: 'Byekan'
		}
	})
	const [open, setOpen] = useState(true)

	return <>
		<FirstRowStatis />
		<SecondRowStatis />
		<Empolyees />
		<Grid container columnGap={2} mt={3}>
			<Grid md={5}>
				<ReceiveMessage />
			</Grid>
			<Grid md={6}>
				<LastProjects />
			</Grid>
		</Grid>
	</>
	{/* </Grid> */ }
	{/* </Grid> */ }
	{/* <Footer /> */ }
	// </div>
	// </ThemeProvider>
}

export default Main
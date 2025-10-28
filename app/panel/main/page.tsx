"use client"
import { useState} from "react";
import FirstRowStatis from "../../component/Panel/FirstRowStatis";
import SecondRowStatis from "../../component/Panel/SecondRowStatis";
import Empolyees from "../../component/Panel/Employees";
import ReceiveMessage from "../../component/Panel/ReceiveMessage";
import LastProjects from "../../component/Panel/LastProjects";
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
"use client"
import { useState, useEffect, useContext, useRef, createContext, Suspense } from "react";
import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import Grid from '@mui/material/Unstable_Grid2'
import { Container } from "@mui/system";
import { createTheme, Drawer, Avatar, Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from "@mui/material";
import FirstRowStatis from "../components/Panel/FirstRowStatis";
import SecondRowStatis from "../components/Panel/SecondRowStatis";
import Empolyees from "../components/Panel/Employees";
import ReceiveMessage from "../components/Panel/ReceiveMessage";
import LastProjects from "../components/Panel/LastProjects";
// import dynamic from "next/dynamic";
import IconButton from "@mui/material/IconButton";
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRight from '@mui/icons-material/ChevronRight'
import DashboardIcon from '@mui/icons-material/Dashboard';
import avatar from '../images/panel/avatar-1.jpg'
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu'
import DrawerSide from '../components/Panel/DrawerSide'
import Byekan from './fonts/Yekan.ttf'
import Mj_Anoosh from './fonts/Mj_Anoosh.ttf'
import ThemeProvider from "@mui/system/ThemeProvider";
import Main from './main/page'
import Buttons from "./buttons/page";
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter, withRouter } from 'next/router'
// import Serv from './serv'

/* const FirstRowStatis = dynamic(
	() => import('../Components/Panel/FirstRowStatis'),
	{ssr: false}
	) */

// const chContext = createContext('')
/* export async function parm() {
	'use server'
	return searchParams.size
} */
// export const dynamic = 'force-dynamic'

function Paramcomponent() {
	const searchParams = useSearchParams()
	return <>
		{(searchParams.size == 1) ? <Buttons /> : <Main />}
	</>
}

const Panel = (props: any, req: any) => {
	console.log(props)
	// console.log(searchParams.size)
	// console.log(props.searchParams)
	const theme = createTheme({
		typography: {
			fontFamily: 'Byekan'
		}
	})
	const [open, setOpen] = useState(true)
	// var open = true
	// const [hash, setHash] = useState(props.searchParams.buttons)
	// const path = usePathname()
	// const path2 = useSearchParams()
	// path2.get('buttons')
	// const path3 = useRouter().asPath
	// const path4 = useRouter()
	// console.log(path4.pathname)
	// console.log(path4.query)
	// const url = document.URL
	// const h = useRef('')
	/* function makehash(t:any) {
		setHash(t)
	} */
	// useEffect(() => {
	// setHash(window.location.hash)
	/* if(window.location.hash == '#buttons') {
		setHash('#buttons')
	} */
	// h.current = window.location.hash
	/* if(h == '#buttons') {
		h.current = '#buttons'
	} */
	// if (props.searchParams.buttons == true) { console.log('hhhhhh') }
	// console.log(hash)
	// }, [props.searchParams.buttons])
	// return <chContext.Provider value={hash}>
	return <ThemeProvider theme={theme}>
		<div style={{ display: 'flex' }}>
			{/* <Header /> */}
			{/* <aside style={{display: 'block', width: '100%'}}> */}
			{/* <Grid container> */}
			{/* <Grid md={1}> */}
			<DrawerSide OpProp={open} />
			{/* <DrawerSide OpProp={open} makehash={() => makehash('')} /> */}
			{/* </aside> */}
			{/* </Grid> */}
			{/* <Grid md={11}> */}
			<main style={{ width: open == true ? '70%' : '100%', backgroundColor: '#eee', paddingBottom: '3rem', flexGrow: 1 }}>
				<Container maxWidth={'xl'}>
					<IconButton onClick={() => setOpen(!open)}><MenuIcon /></IconButton>
					{/* <IconButton onClick={() => open = !open}><MenuIcon /></IconButton> */}
					{/* {(props.searchParams.buttons == 'true') ? <Buttons /> : <Main />} */}
					{/* bejoz in ravesh run dar local ok hast ama dar github actions workflow error mide */}
					<Suspense fallback={<h2>load</h2>}>
						{/* chon const searchParams = useSearchParams() bayad dar Suspense taarif bashe pas nemishe dar Panel taarif beshe va az function component balla estefade kardim */}
						{/* {(searchParams.size == 1) ? <Buttons /> : <Main />} */}
						<Paramcomponent />
					</Suspense>
					{/* {(props.parm == 'true') ? <Buttons /> : <Main />} */}
					{/* <Suspense fallback={<h2>load</h2>}>
						<Serv />
					</Suspense> */}
					{/* <Serv /> */}
				</Container>
			</main>
			{/* </Grid> */}
			{/* </Grid> */}
			{/* <Footer /> */}
		</div>
		{/* </chContext.Provider> */}
	</ThemeProvider>
}

export default Panel
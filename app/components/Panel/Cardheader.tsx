import { useState } from "react";
import { IconButton, Divider, Menu, MenuItem, Typography, CardHeader } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert'

const Cardheader = ({ title }: any) => {
	const [show, setShow] = useState(false)
	const [anchor, setAnchor] = useState<null | HTMLElement>(null)

	return <CardHeader action={<>
		<IconButton onClick={(e) => { setShow(true); setAnchor(e.currentTarget) }}>
			<MoreVertIcon />
		</IconButton>
		<Menu anchorEl={anchor} open={show} onClose={() => setShow(false)} slotProps={{ paper: { sx: { width: '8rem' } } }}>
			<MenuItem>فعال</MenuItem>
			<MenuItem>متن اول</MenuItem>
			<MenuItem>متن دوم</MenuItem>
			<Divider />
			<MenuItem>متن پاورقی</MenuItem>
		</Menu>
	</>}
		title={title}
		titleTypographyProps={{ variant: 'h6' }} />
}

export default Cardheader
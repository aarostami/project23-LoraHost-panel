'use client'
import Emailnews from '../../component/MidCom/Emailnews';
import Prices from '../../component/MidCom/Prices';
import Textinfo from '../../component/MidCom/Textinfo';
import { Container } from '@mui/system';
/* import Prices from '../../components/MidCom/Prices';
import Emailnews from '../../components/MidCom/Emailnews';
import Textinfo from '../../components/MidCom/Textinfo'; */

const price = () => {

	return (<header>
		<section className='Container'>
			<section>
				<Container>
					<Prices />
					<Emailnews />
					<Textinfo />
				</Container>
			</section>
		</section>
	</header>
	)
}

export default price
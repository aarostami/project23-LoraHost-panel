'use client'
import { Container } from '@mui/system';
import SecondPrices from '../../component/MidCom/SecondPrices';
import CommentsSlider from '../../component/MidCom/CommentsSlider';

const services = () => {

	return (<header>
		<section className='Container'>
			<section>
				<Container>
					<SecondPrices />
					<CommentsSlider />
				</Container>
			</section>
		</section>
	</header>
	)
}

export default services
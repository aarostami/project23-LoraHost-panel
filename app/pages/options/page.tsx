'use client'
import { Container } from '@mui/system';
import Services from '../../components/MidCom/CommentsSlider';
import CommentsSlider from '../../components/MidCom/CommentsSlider';

const options = () => {
	return (<header>
		<section className='Container'>
			<section>
				<Container>
					<Services />
					<CommentsSlider />
				</Container>
			</section>
		</section>
	</header>)
}

export default options
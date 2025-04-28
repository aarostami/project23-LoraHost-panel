'use client'
import { Container } from '@mui/system';
import ServicesMe from '../../components/MidCom/Services.js';
import CommentsSlider from '../../components/MidCom/CommentsSlider.js';

const options = () => {
	return (<header>
		<section className='Container'>
			<section>
				<Container>
					<ServicesMe />
					<CommentsSlider />
				</Container>
			</section>
		</section>
	</header>)
}

export default options
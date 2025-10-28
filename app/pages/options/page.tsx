'use client'
import CommentsSlider from '@/app/component/MidCom/CommentsSlider';
import ServicesMe from '@/app/component/MidCom/ServicesMe';
import { Container } from '@mui/system';
// import ServicesMe from '../../components/MidCom/ServicesMe.js';
// import CommentsSlider from '../../components/MidCom/CommentsSlider.js';

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
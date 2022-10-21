import CardAvocati from '../card/CardAvocati';
import { avocatiData } from '../../../../pages/api/avocatiData';

function CarouselAvocati(props) {
	return (
		<>
			<div className='max-w-7xl mx-auto'>
				<h3 className='text-center text-black'>Avocați</h3>
				<div className='mt-10'>
					<div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 pb-10  lg:pb-10 px-6'>
						{avocatiData.map((props, index) => (
							<CardAvocati
								name={props.name}
								title={props.title}
								slug={props.slug}
								image={props.image}
								description={props.description}
								facebook={props.facebook}
								linkedin={props.linkedin}
								key={props.name + index}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps(context) {
	const { slug } = context.params;
	const avocat = avocatiData.find((avocat) => avocat.slug === slug);
	return {
		props: {
			avocat,
		},
	};
}

export default CarouselAvocati;

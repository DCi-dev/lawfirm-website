import CardAvocati from "../card/CardAvocati";
import { avocatiData } from "../../../../pages/api/avocatiData";

function CarouselAvocati() {
	return (
		<>
			<div className='max-w-7xl mx-auto'>
				<h3 className='text-center text-ivory'>Avocați</h3>
				<div className='mt-10'>
					<div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 pb-10  lg:pb-10 px-6'>
						{avocatiData.map((item, index) => (
							<CardAvocati
								name={item.name}
								title={item.title}
								slug={item.slug}
								image={item.image}
								description={item.description}
								facebook={item.facebook}
								linkedin={item.linkedin}
								key={item.name + index}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default CarouselAvocati;

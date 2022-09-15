import CardAvocati from "../card/CardAvocati";
import { avocatiData } from "../../../../pages/api/avocatiData";

function CarouselAvocati() {
	return (
		<>
			<div className='px-4 max-w-7xl mx-auto'>
				<h3 className='text-center text-ivory'>Avocați</h3>
				<div className='mt-10'>
					<div className='grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-3 pb-10  lg:pb-10 px-6'>
						{avocatiData.map((item, index) => (
							<CardAvocati
								image={item.image}
								name={item.name}
								title={item.title}
								slug={item.slug}
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

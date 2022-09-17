import CardAreas from "../common/ui/card/CardAreas";
import { domeniiData } from "../../pages/api/domeniiData";

function PracticeAreas() {
	return (
		<>
			<div className='py-10 px-3 bg-ivory overflow-hidden'>
				<div className='max-w-7xl mx-auto'>
					<h2 className='text-black text-center mb-8'>Domenii de practică</h2>
					<div className='mt-10'>
						<div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 pb-10  lg:pb-10 px-6'>
							{domeniiData.map((item, index) => (
								<CardAreas
									title={item.title}
									subtitle={item.subtitle}
									slug={item.slug}
									key={item.title + index}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PracticeAreas;

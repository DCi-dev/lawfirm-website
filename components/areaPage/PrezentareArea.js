import Image from 'next/image';

function PrezentareArea(props) {
	return (
		<>
			<section className='bg-white'>
				<div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-12 lg:grid-cols-12'>
					<div className='mx-auto place-self-center lg:col-span-7'>
						{props.area.text.map((item, index) => (
							<div key={index}>
								<h2 className='max-w-2xl mb-4 text-2xl  tracking-tight leading-none md:text-3xl xl:text-4xl text-black'>
									{item.h2}
								</h2>
								<p className='max-w-2xl mb-6  text-black lg:mb-8 md:text-lg lg:text-xl'>
									{item.p1}
								</p>
							</div>
						))}
					</div>
					<div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
						<Image src={props.area.image} alt='domeniu de practică' />
					</div>
				</div>
			</section>
		</>
	);
}

export default PrezentareArea;

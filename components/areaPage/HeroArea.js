function HeroArea(props) {
	return (
		<>
			<section className='bg-black'>
				<div className='max-w-screen-xl px-4 pt-36 pb-16 mx-auto'>
					<h1 className='text-center text-gold text-3xl md:text-5xl lg:text-8xl'>
						{props.area.title}
					</h1>
					<p className='mt-4 text-center text-white text-lg md:text-xl lg:text-2xl'>
						{props.area.subtitle}
					</p>
				</div>
			</section>
		</>
	);
}

export default HeroArea;

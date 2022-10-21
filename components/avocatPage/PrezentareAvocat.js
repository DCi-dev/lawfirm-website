import { BsFillCalendarEventFill } from 'react-icons/bs';

function PrezentareAvocat(props) {
	return (
		<>
			<section className='bg-black text-center'>
				<div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
					<h2 className='mb-12 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl text-gold'>
						Biografie
					</h2>
					<p className='mb-6 font-light text-white  md:text-lg'>
						{props.avocat.bio}
					</p>
					<div className='grid grid-cols-1 gap-6 md:grid-cols-2 pb-10  lg:pb-10 px-6'>
						<div>
							<h2 className='mb-12 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl text-gold'>
								Educație
							</h2>
							<ol className='relative border-l border-gold'>
								{props.avocat.education.map((item, index) => (
									<li className='mb-10 ml-6' key={index}>
										<span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-gold rounded-full ring-8 ring-gold'>
											<BsFillCalendarEventFill className='w-5 h-5 fill-black' />
										</span>
										<h3 className='mb-1 text-lg md:text-xl lg:text-2xl font-bold text-gold'>
											{item.title}
										</h3>
										<time className='block mb-2 text-sm  leading-none text-white'>
											{item.date}
										</time>
										<p className='text-base text-white'>{item.description}</p>
									</li>
								))}
							</ol>
						</div>
						<div>
							<h2 className='mb-12 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl text-gold'>
								Carieră
							</h2>
							<ol className='relative border-l border-gold'>
								{props.avocat.cariera.map((item, index) => (
									<li className='mb-10 ml-6' key={index}>
										<span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-gold rounded-full ring-8 ring-gold'>
											<BsFillCalendarEventFill className='w-5 h-5 fill-black' />
										</span>
										<h3 className='mb-1 text-lg md:text-xl lg:text-2xl font-bold text-gold'>
											{item.title}
										</h3>
										<time className='block mb-2 text-sm  leading-none text-white'>
											{item.date}
										</time>
										<p className='text-base text-white'>{item.description}</p>
									</li>
								))}
							</ol>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default PrezentareAvocat;

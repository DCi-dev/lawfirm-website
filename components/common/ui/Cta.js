import Image from 'next/image';
import Link from 'next/link';
import { TiArrowRightThick } from 'react-icons/ti';

import heroPic from '../../../public/assets/images/hero.png';

export default function CTA() {
	return (
		<>
			<section className='bg-gold'>
				<div className='gap-8 items-center py-14 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'>
					<Image src={heroPic} alt='lawyer' />
					<div className='mt-4 md:mt-0'>
						<h2 className='mb-4 text-4xl tracking-tight font-bold text-white '>
							Doriți să planificăm o întâlnire?
						</h2>
						<p className='mb-6 font-light text-white text-xl md:text-2xl'>
							Suntem doar la un mesaj distanță.
						</p>
						<Link href='/contact'>
							<button className='inline-flex items-center text-xl text-white bg-black hover:bg-white hover:text-black hover:scale-105 transform transition duration-300 ease-in-out focus:ring-4 focus:ring-gold font-medium rounded-lg px-5 py-2.5 text-center '>
								Cere o consultație
								<TiArrowRightThick className='w-5 h-5 ml-2 -mr-1' />
							</button>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

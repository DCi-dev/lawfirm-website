import Image from 'next/image';
import Link from 'next/link';
import heroPic from '../../public/assets/images/hero.png';
import { TiArrowRightThick } from 'react-icons/ti';

export default function Hero() {
	return (
		<>
			<section className='bg-hero-image bg-cover bg-center overflow-hidden h-full min-h-screen flex justify-center items-center'>
				<div className='max-w-7xl px-8 pt-24'>
					<div className='mx-auto text-center'>
						<p className='max-w-4xl  font-light text-white text-5xl uppercase'>
							Bun venit la
						</p>
						<h1 className='max-w-4xl mb-4 text-9xl text-gold font-bold tracking-tight leading-none uppercase'>
							Mpp
						</h1>
						<p className='max-w-4xl mb-6 font-light text-white  text-2xl '>
							Misiunea noastră este să ne folosim experiența și cunoașterea
							temeinică a teoriei și practicii juridice pentru a oferi soluții
							adaptate situației fiecărui client, cu profesionalism, rigoare și
							integritate.
						</p>
						<Link href='/contact'>
							<button
								className='inline-flex items-center justify-center px-5 py-3 mr-3 mb-8 
							text-base font-bold text-center text-black rounded-lg bg-gold hover:bg-white focus:ring-4 
							focus:ring-primary-300 uppercase hover:scale-105 transform transition duration-300 ease-in-out'>
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

import Image from "next/image";
import Link from "next/link";
import heroPic from "../../public/assets/images/hero.png";
import { TiArrowRightThick } from "react-icons/ti";

export default function Hero() {
	return (
		<>
			<section className='bg-blue overflow-hidden'>
				<div className='grid max-w-7xl px-8 pt-24 mx-auto md:gap-8 xl:gap-0 h-full  md:grid-cols-12'>
					<div className='mr-auto place-self-center md:col-span-6'>
						<p className='max-w-2xl  font-light text-ivory text-lg  md:text-2xl lg:text-4xl uppercase'>
							Bun venit la
						</p>
						<h1 className='max-w-2xl mb-4 text-6xl text-gold font-bold tracking-tight leading-none md:text-7xl xl:text-9xl uppercase'>
							Mpp
						</h1>
						<p className='max-w-2xl mb-6 font-light text-ivory lg:mb-8 md:text-lg lg:text-xl'>
							Misiunea noastră este să ne folosim experiența și cunoașterea
							temeinică a teoriei și practicii juridice pentru a oferi soluții
							adaptate situației fiecărui client, cu profesionalism, rigoare și
							integritate.
						</p>
						<Link href='/contact'>
							<button
								className='inline-flex items-center justify-center px-5 py-3 mr-3 mb-8 
							text-base font-bold text-center text-black rounded-lg bg-gold hover:bg-ivory focus:ring-4 
							focus:ring-primary-300 uppercase hover:scale-105 transform transition duration-300 ease-in-out'>
								Cere o consultație
								<TiArrowRightThick className='w-5 h-5 ml-2 -mr-1' />
							</button>
						</Link>
					</div>
					<div className='hidden md:mt-0 md:col-span-6 md:flex '>
						<Image src={heroPic} />
					</div>
				</div>
			</section>
		</>
	);
}

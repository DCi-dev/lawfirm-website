import Image from "next/image";
import Link from "next/link";
import { TiArrowRightThick } from "react-icons/ti";

import heroPic from "../../../../public/assets/images/hero.png";

export default function CTA() {
	return (
		<>
			<section className='bg-ivory'>
				<div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'>
					<Image src={heroPic} />
					<div className='mt-4 md:mt-0'>
						<h2 className='mb-4 text-4xl tracking-tight font-bold text-black '>
							Doriți să planificăm o întâlnire?
						</h2>
						<p className='mb-6 font-light text-black md:text-lg '>
							Suntem doar la un mesaj distanță.
						</p>
						<Link href='/contact'>
							<button className='inline-flex items-center text-xl text-white bg-blue hover:bg-gold focus:ring-4 focus:ring-gold font-medium rounded-lg px-5 py-2.5 text-center '>
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

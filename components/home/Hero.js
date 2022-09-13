import Image from "next/image";
import Link from "next/link";
import heroPic from "../../public/assets/images/hero.png";

export default function Hero() {
	return (
		<>
			<div className='bg-blue h-full pt-20 '>
				<div className='flex sm:flex-col lg:flex-row items-center lg:items-end justify-around px-3 max-w-7xl mx-auto'>
					<div className='flex flex-col my-auto lg:w-6/12 w-auto text-center'>
						<p className='text-5xl text-white mt-8 uppercase'>Bun venit la</p>
						<h1 className='text-gold text-9xl font-bold uppercase'>Mpp</h1>
						<p className='text-xl text-white w-auto mt-4'>
							Misiunea noastră este să ne folosim experiența și cunoașterea
							temeinică a teoriei și practicii juridice pentru a oferi soluții
							adaptate situației fiecărui client, cu profesionalism, rigoare și
							integritate.
						</p>
						<Link href='/contact'>
							<button
								className='mx-auto mt-8 mb-8 inline-block
							bg-gold border-0 py-5 px-5 focus:outline-none hover:bg-ivory 
							rounded-2xl text-base hover:text-black shadow-lg text-center'>
								<span className='text-black  font-body text-xl'>
									CERE O CONSULTAȚIE
								</span>
							</button>
						</Link>
					</div>
					<div className='w-6/12 hidden lg:flex flex-col items-end'>
						<Image src={heroPic} />
					</div>
				</div>
			</div>
		</>
	);
}

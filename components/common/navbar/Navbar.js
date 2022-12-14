import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { BsFillTelephoneFill } from 'react-icons/bs';

function Navbar() {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<>
			<nav className='bg-white px-2 sm:px-4 py-2.5  fixed w-screen z-20 top-0 left-0 border-b border-gold overflow-hidden'>
				<div className='container flex flex-wrap justify-between items-center mx-auto max-w-7xl'>
					<Link href='/'>
						<a className='flex items-center'>
							<Image src='/logo.svg' height={50} width={100} alt='logo MPP' />
						</a>
					</Link>

					{/* Menu */}
					<div className='flex md:order-2'>
						{/* Click to Dial button */}
						<button className='text-black bg-gold hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 hover:scale-105 transform transition duration-300 ease-in-out'>
							<a
								href='tel:+40752171727'
								data-rel='external'
								className='flex flex-row justify-between items-center'>
								<BsFillTelephoneFill className='fill-inherit' />
								<span className='ml-1'>Sună-ne!</span>
							</a>
						</button>
						<button
							className='inline-flex items-center p-2 text-sm text-black rounded-lg md:hidden'
							onClick={handleClick}>
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						</button>
					</div>
					{/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
					<div
						className={`${
							active ? '' : 'hidden'
						}   justify-between bg-white items-center w-full md:flex md:w-auto md:order-1`}>
						<div className='flex flex-col p-4 mt-4 bg-white rounded-lg border border-gold md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 '>
							<Link href='/'>
								<a
									onClick={handleClick}
									className='block py-2 pr-4 pl-3 text-lg text-black font-bold rounded hover:text-white hover:bg-gold md:hover:bg-transparent md:hover:text-gold md:p-0'>
									Acasă
								</a>
							</Link>
							<Link href='/echipa'>
								<a
									onClick={handleClick}
									className='block py-2 pr-4 pl-3 text-lg text-black  font-bold rounded hover:text-white hover:bg-gold md:hover:bg-transparent md:hover:text-gold md:p-0'>
									Echipa noastră
								</a>
							</Link>
							<Link href='/domenii-de-practica'>
								<a
									onClick={handleClick}
									className='block py-2 pr-4 pl-3 text-lg text-black  font-bold rounded hover:text-white hover:bg-gold md:hover:bg-transparent md:hover:text-gold md:p-0'>
									Domenii de practica
								</a>
							</Link>
							<Link href='/contact'>
								<a
									onClick={handleClick}
									className='block py-2 pr-4 pl-3 text-lg text-black  font-bold rounded hover:text-white hover:bg-gold md:hover:bg-transparent md:hover:text-gold md:p-0'>
									Contact
								</a>
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
export default Navbar;

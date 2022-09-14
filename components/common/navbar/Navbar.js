import Link from "next/link";
import { useState } from "react";

function Navbar() {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<>
			<nav className='bg-ivory px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 border-b border-gold'>
				<div class='container flex flex-wrap justify-between items-center mx-auto max-w-7xl'>
					<Link href='/'>
						<a className='flex items-center'>
							<svg
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
								className='mr-3 h-6 sm:h-9'>
								<path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
							</svg>
							<span className='self-center text-xl font-bold whitespace-nowrap uppercase'>
								Mpp
							</span>
						</a>
					</Link>

					{/* Menu */}
					<div class='flex md:order-2'>
						{/* Click to Dial button */}
						<button className='text-white bg-blue hover:bg-gold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0'>
							<a href='tel:+40758513642' data-rel='external'>
								<span className='text-white'>Sună-ne!</span>
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
							active ? "" : "hidden"
						}   justify-between bg-ivory items-center w-full md:flex md:w-auto md:order-1`}>
						<div className='flex flex-col p-4 mt-4 bg-ivory rounded-lg border border-gray md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 '>
							<Link href='/'>
								<a className='block py-2 pr-4 pl-3 text-black font-bold rounded hover:text-ivory hover:bg-blue md:hover:bg-transparent md:hover:text-blue md:p-0'>
									Acasa
								</a>
							</Link>
							<Link href='/echipa'>
								<a className='block py-2 pr-4 pl-3 text-black  font-bold rounded hover:text-ivory hover:bg-blue md:hover:bg-transparent md:hover:text-blue md:p-0'>
									Echipa noastră
								</a>
							</Link>
							<Link href='/domenii-de-practica'>
								<a className='block py-2 pr-4 pl-3 text-black  font-bold rounded hover:text-ivory hover:bg-blue md:hover:bg-transparent md:hover:text-blue md:p-0'>
									Domenii de practica
								</a>
							</Link>
							<Link href='/contact'>
								<a className='block py-2 pr-4 pl-3 text-black  font-bold rounded hover:text-ivory hover:bg-blue md:hover:bg-transparent md:hover:text-blue md:p-0'>
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

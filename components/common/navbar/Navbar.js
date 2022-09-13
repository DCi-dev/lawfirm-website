import Link from "next/link";
import { useState } from "react";

function Navbar() {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<>
			<div className='fixed top-0 left-0 w-full bg-white'>
				<nav className='flex items-center flex-wrap  p-3 max-w-7xl mx-auto'>
					<Link href='/'>
						<a className='inline-flex items-center p-2 mr-4 '>
							<svg
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
								className='fill-current text-gold h-8 w-8 mr-2'>
								<path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
							</svg>
							<span className='text-xl text-blue font-bold uppercase tracking-wide'>
								mpp
							</span>
						</a>
					</Link>

					{/* Menu */}
					<button
						className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-blue mx-auto hover:text-blue outline-none'
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
					{/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
					<div
						className={`${
							active ? "" : "hidden"
						}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
						<div className='lg:inline-flex lg:flex-row lg:mx-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
							<Link href='/'>
								<a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-blue hover:text-ivory '>
									Acasa
								</a>
							</Link>
							<Link href='/'>
								<a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-blue hover:text-ivory'>
									Echipa noastră
								</a>
							</Link>
							<Link href='/'>
								<a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-blue hover:text-ivory'>
									Domenii de practica
								</a>
							</Link>
							<Link href='/'>
								<a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-blue hover:text-ivory'>
									Contact
								</a>
							</Link>
						</div>
					</div>
					{/* Click to Dial button */}
					<a
						href='tel:+40758513642'
						data-rel='external'
						className='inline-flex items-center p-2 mr-4'>
						<button className='inline-flex items-center bg-blue border-0 py-1 px-3 focus:outline-none hover:bg-gold rounded text-base shadow-xl'>
							<span className='text-white'>Sună-ne!</span>
						</button>
					</a>
				</nav>
			</div>
		</>
	);
}
export default Navbar;

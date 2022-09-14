import Link from "next/link";

export default function FourOhFour() {
	return (
		<>
			<section class='flex items-center h-screen p-16 bg-ivory'>
				<div class='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
					<div class='max-w-xl text-center'>
						<h2 class='mb-8 font-bold text-9xl '>Error 404</h2>
						<p class='text-2xl font-semibold md:text-3xl'>
							Nu ați încălcat legea, dar nu putem găsi ceea ce căutați.
						</p>
						<p class='mt-4 mb-8'>
							Dar nu vă faceți griji, puteți găsi o mulțime de alte lucruri pe
							pagina noastră de pornire.
						</p>
						<Link href='/'>
							<button
								className='inline-flex items-center justify-center px-5 py-3 mr-3 mb-8 
							text-base font-bold text-center text-black hover:text-white rounded-lg bg-gold hover:bg-black focus:ring-4 
							focus:ring-primary-300 uppercase hover:scale-105 transform transition duration-300 ease-in-out'>
								Înapoi acasă
								<svg
									className='w-5 h-5 ml-2 -mr-1'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
										clipRule='evenodd'></path>
								</svg>
							</button>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

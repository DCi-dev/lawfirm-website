import Link from "next/link";
import Image from "next/image";

function Footer() {
	return (
		<>
			<footer className='bg-black'>
				<div className='width-full'>
					<iframe
						style={{
							width: "100%",
							minHeight: "20vw",
							border: "0",
							frameBorder: "0",
						}}
						className='width-full border-0 h-auto'
						src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJP3CVY4T7ykARAeY9c2zETuU&key=AIzaSyCSqXIo1eMBZ3-zxkGvzY5l0NhfsCh-_fU`}></iframe>
				</div>
				<div>
					<div className='md:flex md:justify-between mx-auto max-w-7xl p-4 sm:p-6'>
						<div className='mb-6 md:mb-0'>
							<Link href='/'>
								<a className='flex items-center'>
									<Image
										src='/logo.svg'
										style={{
											filter:
												"invert(100%) sepia(75%) saturate(611%) hue-rotate(306deg) brightness(108%) contrast(107%)",
											stroke:
												"invert(100%) sepia(75%) saturate(611%) hue-rotate(306deg) brightness(108%) contrast(107%)",
										}}
										height={150}
										width={300}
									/>
								</a>
							</Link>
						</div>
						<div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2'>
							<div>
								<h5 className='mb-6 font-bold text-gold uppercase text-center'>
									Contact
								</h5>
								<ul className='text-ivory'>
									<li className='mb-4'>
										<p>Strada Tătărași 9, Iasi, Romania</p>
									</li>
									<li>
										<a href='tel:+40758513642' data-rel='external'>
											<p className='text-white'>tel: +40758513642</p>
										</a>
									</li>
									<li>
										<a href='mailto:contact@mpp.ro' data-rel='external'>
											<p className='text-white'>contact@mpp.ro</p>
										</a>
									</li>
								</ul>
							</div>
							<div className='text-center'>
								<h5 className='mb-6  font-bold text-gold uppercase'>Legal</h5>
								<ul className='text-ivory'>
									<li className='mb-4'>
										<a href='#' className='hover:underline'>
											Privacy Policy
										</a>
									</li>
									<li>
										<a href='#' className='hover:underline'>
											Terms &amp; Conditions
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<hr className='my-6 border-gold sm:mx-auto lg:my-3' />
					<div className='sm:flex sm:items-center sm:justify-between mx-auto max-w-7xl p-4 sm:p-6'>
						<span className='text-sm text-ivory sm:text-center dark:text-gray-400'>
							© 2022{" "}
							<a href='https://flowbite.com' className='hover:underline'>
								Manolache, Pădurariu & Partners
							</a>
							. All Rights Reserved.
						</span>
						<div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
							<Link href='https://www.facebook.com/mpp.law.ro'>
								<div className='text-ivory hover:text-gold'>
									<svg
										className='w-5 h-5'
										fill='currentColor'
										viewBox='0 0 24 24'
										aria-hidden='true'>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z'
										/>
									</svg>
								</div>
							</Link>
							<Link href='https://www.linkedin.com/company/mpp-law/'>
								<div className='text-ivory hover:text-gold'>
									<svg
										className='w-5 h-5'
										fill='currentColor'
										viewBox='0 0 24 24'
										aria-hidden='true'>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
										/>
									</svg>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;

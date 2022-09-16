import Link from "next/link";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationArrow, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

function Footer() {
	return (
		<>
			<footer className='bg-black overflow-hidden'>
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
										<p className='flex flex-row justify-start items-center'>
											<FaLocationArrow className='w-5 h-5' />
											<span className='ml-2'>
												Strada Tătărași 9, Iași, România
											</span>
										</p>
									</li>
									<li>
										<a href='tel:+40752171727' data-rel='external'>
											<p className='flex flex-row justify-start items-center'>
												<BsFillTelephoneFill className='w-5 h-5' />
												<span className='ml-2 text-gold'>0752 171 727</span>
											</p>
										</a>
									</li>
									<li>
										<a href='mailto:office@mpp.ro' data-rel='external'>
											<p className='flex flex-row justify-start items-center'>
												<MdEmail className='w-5 h-5' />
												<span className='ml-2 text-gold'>office@mpp.ro</span>
											</p>
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
									<FaFacebookSquare className='w-5 h-5' />
								</div>
							</Link>
							<Link href='https://www.linkedin.com/company/mpp-law/'>
								<div className='text-ivory hover:text-gold'>
									<FaLinkedin className='w-5 h-5' />
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

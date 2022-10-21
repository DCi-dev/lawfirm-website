import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

export default function CardAvocati({
	title,
	name,
	slug,
	image,
	description,
	facebook,
	linkedin,
}) {
	const router = useRouter();
	function showAreas() {
		router.push(`/echipa/avocati/${slug}`);
	}

	return (
		<>
			<div className='max-w-sm bg-black rounded-lg shadow-md hover:scale-105 transform transition duration-300 ease-in-out'>
				<div onClick={showAreas} key={name} className='cursor-pointer'>
					<div className='relative p-0 m-0 rounded-t-lg w-full bg-gold lg:grayscale lg:hover:grayscale-0'>
						<Image src={image} alt={name} />
					</div>
				</div>
				<div className='p-5'>
					<div onClick={showAreas} key={name} className='cursor-pointer'>
						<h4 className='my-2 text-2xl font-bold tracking-tight text-gold hover:text-white'>
							{name}
						</h4>
					</div>
					<p className='mb-3 font-normal text-white'>{title}</p>
					<p className='mb-3 font-normal text-white'>{description}</p>
					<ul className='flex space-x-4 sm:mt-0'>
						<li>
							<Link href={facebook}>
								<div className='cursor-pointer text-gold hover:text-white'>
									<FaFacebookSquare className='w-8 h-8' />
								</div>
							</Link>
						</li>
						<li>
							<Link href={linkedin}>
								<div className='cursor-pointer text-gold hover:text-white'>
									<FaLinkedin className='w-8 h-8' />
								</div>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

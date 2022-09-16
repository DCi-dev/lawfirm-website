import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationArrow, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

function HeroAvocat(props) {
	return (
		<>
			<section className='bg-ivory pt-8'>
				<div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'>
					<Image src={props.avocat.image} />
					{/* Prezentare avocat */}
					<div className='mt-4 md:mt-0'>
						<h2 className='mb-4 text-4xl tracking-tight font-bold text-black '>
							{props.avocat.name}
						</h2>
						<p className='mb-6 text-xl text-black md:text-2xl '>
							{props.avocat.title}
						</p>

						<p className='mb-6 font-bold text-black md:text-lg flex flex-row justify-start items-center'>
							<MdEmail className='w-5 h-5 mr-1' />
							Email:
							<a href={`mailto:${props.avocat.email}`} data-rel='external'>
								<span className='ml-2 text-gold'>{props.avocat.email}</span>
							</a>
						</p>
						<p className='mb-6 font-bold text-black md:text-lg flex flex-row justify-start items-center'>
							<BsFillTelephoneFill className='w-5 h-5 mr-1' />
							Telefon:
							<a href={`tel:+4${props.avocat.telefon}`} data-rel='external'>
								<span className='ml-2 text-gold'>{props.avocat.telefon}</span>
							</a>
						</p>
						<ul className='flex space-x-4 sm:mt-0 mb-6 '>
							<li>
								<Link href={props.avocat.facebook}>
									<div className='cursor-pointer text-gold hover:text-blue'>
										<FaFacebookSquare className='w-8 h-8' />
									</div>
								</Link>
							</li>
							<li>
								<Link href={props.avocat.linkedin}>
									<div className='cursor-pointer text-gold hover:text-blue'>
										<FaLinkedin className='w-8 h-8' />
									</div>
								</Link>
							</li>
						</ul>
						<p className='mb-6 font-bold text-black md:text-lg'>
							Domenii de practică:
						</p>
						<div className='grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-2 mb-6 '>
							{props.avocat.domain.map((item, index) => (
								<p
									className='mb-6 text-black md:text-lg flex flex-row justify-start items-center'
									item={item}
									key={item + index}>
									<AiFillStar className='w-5 h-5 mr-1' />
									{item}
								</p>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default HeroAvocat;

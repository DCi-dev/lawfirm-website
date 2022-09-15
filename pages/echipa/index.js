import Head from "next/head";
import Image from "next/image";

import heroPic from "../../public/assets/images/hero.png";

export default function Team() {
	return (
		<>
			<Head>
				<title>Echipa & Cariere</title>
			</Head>
			<section className='bg-black'>
				<div className='max-w-7xl px-8 pt-32 pb-8 mx-auto text-center text-ivory'>
					<h1 className='text-gold'>Echipa & Cariere</h1>
					<div>
						<Image src={heroPic} />
					</div>
				</div>
			</section>
		</>
	);
}

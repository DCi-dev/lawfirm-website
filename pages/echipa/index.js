import Head from "next/head";
import Image from "next/image";
import Team from "../../components/home/Team";
import CTA from "../../components/common/ui/cta/cta";

import heroPic from "../../public/assets/images/hero.png";

export default function TeamPage() {
	return (
		<>
			<Head>
				<title>Echipa & Cariere</title>
			</Head>
			{/* Hero */}
			<section className='bg-black'>
				<div className='max-w-screen-xl px-4 pt-32 pb-16 mx-auto bg-black'>
					<h1 className='text-center text-gold'>Echipa & Cariere</h1>
				</div>
			</section>
			{/* Team */}
			<section className='bg-ivory'>
				<div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-12 lg:grid-cols-12'>
					<div className='mx-auto place-self-center lg:col-span-7'>
						<h2 className='max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl text-black'>
							Succesul clienților noștri este succesul nostru.
						</h2>
						<p className='max-w-2xl mb-6 font-light text-gray lg:mb-8 md:text-lg lg:text-xl'>
							O echipă complexă, formată din specialiști în toate ramurile
							dreptului, este pregătită să te asiste.
						</p>
						<p className='max-w-2xl mb-6 font-light text-gray lg:mb-8 md:text-lg lg:text-xl'>
							Prin continuă dezvoltare și specializare, am creat în cadrul
							societății Manolache, Pădurariu & Partners o echipă modernă,
							creativă și profesionistă, în care experiența partenerilor seniori
							se îmbină cu dăruirea și entuziasmul tinerilor avocați. Cu o vastă
							experiență academică și practică, echipa noastră poate aborda
							probleme din toate ramurile dreptului.
						</p>
					</div>
					<div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
						<Image src={heroPic} />
					</div>
				</div>
			</section>
			<Team />
			{/* Cariere */}
			<section className='bg-black'>
				<div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
					<div className='mx-auto max-w-screen-xl text-center'>
						<h2 className='mb-12 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl text-gold'>
							Cariere
						</h2>
						<p className='mb-6 font-light text-ivory  md:text-lg'>
							Societatea Manolache, Pădurariu & Partners oferă un mediu de lucru
							profesionist și, în același timp, prietenos, atât pentru avocații
							începători, cât și pentru cei care au acumulat deja experiență în
							această profesie.
						</p>
						<p className='mb-6 font-light text-ivory  md:text-lg'>
							Suntem în permanență în căutare de avocați care împărtășesc
							valorile şi principiile noastre, talentați și determinați să
							obțină rezultate excelente în domeniu, pentru fiecare client
							alături de care lucrăm. Dacă vrei să te alături celei mai mari
							echipe de avocatură din Iași, într-un mediu în care vei permanent
							provocat la dezvoltare profesională, dacă crezi că ai entuziasmul,
							pregătirea profesională, rigoarea și ambiția de a reuși în
							carieră, e momentul să ne dai un semn!
						</p>
						<p className='mb-6 font-light text-ivory  md:text-lg'>
							Trimite-un un CV, însoțit de o scrisoare de intenție care să
							descrie motivele pentru care vrei să ni te alături, la adresa de
							email
							<a href='mailto:office@mpp.ro' data-rel='external'>
								<span className='ml-2 text-gold'>office@mpp.ro</span>
							</a>
							.
						</p>
					</div>
				</div>
			</section>
			<CTA />
		</>
	);
}

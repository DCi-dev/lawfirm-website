import Head from "next/head";

import CardAreas from "../../components/common/ui/card/CardAreas";
import { areasData } from "../../pages/api/domeniiData";

export default function Areas() {
	return (
		<>
			<Head>
				<title>Echipa & Cariere</title>
			</Head>
			{/* Hero */}
			<section className='bg-black'>
				<div className='max-w-screen-xl px-4 pt-32 pb-16 mx-auto bg-black'>
					<h1 className='text-center text-gold'>Domenii de practică</h1>
					<h2 className='text-center text-white'>
						Servicii juridice de la A la Z
					</h2>
					<p className='mt-4 text-center text-white'>
						Echipa Manolache, Pădurariu & Partners are capacitatea profesională
						de a aborda chestiuni din orice domeniu al dreptului, de la civil și
						comercial până la dreptul penal, administrativ sau fiscal.
						Calificarea profesională de excepție a membrilor echipei și
						existența unor departamente specializate ne permit să abordăm cauze
						complexe în cel mai eficient mod, chiar și atunci când dosarul
						impune soluționarea unor probleme ce aparțin unor ramuri diferite
						ale dreptului.
					</p>
					<p className='mt-4 text-center text-white'>
						Soluțiile juridice propuse sunt fundamentate pe o cunoaștere
						aprofundată a sistemului de justiție românesc. Experiența practică
						de muncă a echipei Manolache, Pădurariu & Partners, înțelegerea
						jurisprudenței și a legislației naționale și internaționale sunt tot
						atâtea avantaje care ne permit să oferim soluții utile și inovative,
						într-un timp cât mai scurt.
					</p>
					<p className='mt-4 text-center text-white'>
						Suntem prezenți oriunde este nevoie de noi, în România și peste
						hotarele ei, pentru a oferi asistență juridică, pentru a fi un aliat
						puternic în negocierile de afaceri și pentru a oferi reprezentare în
						fața organelor de anchetă și instanțelor românești și
						internaționale. Suntem alături de oamenii care au nevoie de un
						apărător al propriilor drepturilor și alături de companiile care își
						doresc să desfășoare afaceri în deplină legalitate, cu riscuri
						minime, alături de un partener de încredere cu expertiză dovedită în
						domeniul juridic.
					</p>
				</div>
			</section>
			{/* Domenii */}
			<section className='py-10 px-3 bg-ivory overflow-hidden'>
				<div className='max-w-7xl mx-auto'>
					<div className='mt-10'>
						<div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 pb-10  lg:pb-10 px-6'>
							{areasData.map((item, index) => (
								<CardAreas
									title={item.title}
									text={item.text}
									slug={item.slug}
									key={item.title + index}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

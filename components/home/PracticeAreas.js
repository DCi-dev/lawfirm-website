import CardAreas from "../common/ui/CardAreas/CardAreas";

const areasData = [
	{
		title: "Drept penal",
		text: "Asistență și reprezentare în fața organelor de urmărire penală civile și militare",
		slug: "penal",
	},
	{
		title: "Drept civil",
		text: "Consultanță și asistență juridică în materia contractelor și reprezentare în instanță",
		slug: "drept-civil",
	},
	{
		title: "Drept administrativ",
		text: "Consultanță și asistență juridică în materia contractelor și reprezentare în instanță",
		slug: "drept-administrativ",
	},
	{
		title: "Drept fiscal",
		text: "Consultanță și asistență juridică în materia contractelor și reprezentare în instanță",
		slug: "drept-fiscal",
	},
	{
		title: "Drept penal",
		text: "Asistență și reprezentare în fața organelor de urmărire penală civile și militare",
		slug: "penal",
	},
	{
		title: "Drept civil",
		text: "Consultanță și asistență juridică în materia contractelor și reprezentare în instanță",
		slug: "drept-civil",
	},
	{
		title: "Drept administrativ",
		text: "Consultanță și asistență juridică în materia contractelor și reprezentare în instanță",
		slug: "drept-administrativ",
	},
	{
		title: "Drept fiscal",
		text: "Consultanță și asistență juridică în materia contractelor și reprezentare în instanță",
		slug: "drept-fiscal",
	},
];

export default function PracticeAreas() {
	return (
		<>
			<div className='py-20 px-3'>
				<div className='max-w-7xl mx-auto'>
					<h2 className='text-5xl text-black text-center mb-8'>
						Domenii de practică
					</h2>
					<div className='mt-10'>
						<div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pb-10  lg:pb-10 px-20 lg:px-0'>
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
			</div>
		</>
	);
}

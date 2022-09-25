import david from "../../public/assets/images/hero.png";
import { DreptPenal } from "../domenii/dreptPenal";
import { DreptCivil } from "../domenii/dreptCivil";
import { DreptAdministrativ } from "../domenii/dreptAdministrativ";
import { DreptFiscal } from "../domenii/dreptFiscal";

export const MariaB = {
	name: "Maria-Teodora Bița",
	title: "Avocat colaborator",
	slug: "maria-bita",
	image: david,
	description:
		"Ambițios de nu se poate, te duce cu papagalul de nu știi ce-i cu tine",
	telefon: "0744555666",
	email: "maria.bita@mpp-law.ro",
	facebook: "https://www.facebook.com/manolache.eddy",
	linkedin: "https://www.linkedin.com/company/mpp-law/",
	bio: "John is the leader of the Working Group on International Taxation & EU Harmonization in UK at the American Chamber of Commerce. He is also the Committee Head of the Permanent Scientific Committee of IFA. During 2011 John served as the Co-Chair of the Tax Committee of the American Chamber of Commerce and was the member of the working group on VAT reform at the Ministry of Finance of United Kingdom.",
	domain: [DreptPenal, DreptCivil, DreptAdministrativ, DreptFiscal],
	education: [
		{
			title: "Master în drept - UAIC - Cariere juridice",
			date: "2018-2019",
			description: "Lucrare de disertație - Dreptul familiei",
		},
		{
			title: "Licență în drept - UAIC",
			date: "2014-2018",
			description: "Absolvent de la UAIC - Facultatea de Drept",
		},
		{
			title: "Master în drept - UAIC - Cariere juridice",
			date: "2018-2019",
			description: "Lucrare de disertație - Dreptul familiei",
		},
		{
			title: "Licență în drept - UAIC",
			date: "2014-2018",
			description: "Absolvent de la UAIC - Facultatea de Drept",
		},
	],
	cariera: [
		{
			title: "Avocat definitiv",
			date: "2021-2022",
			description: "Înființează cea mai mare casă de avocatură din Iași",
		},
		{
			title: "Avocat stagiar",
			date: "2019-2021",
			description: "Avocat stagiar sub tutela unei avocate",
		},
	],
};

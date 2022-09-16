import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { avocatiData } from "../../../api/avocatiData";

import HeroAvocat from "../../../../components/avocatPage/HeroAvocati";
import PrezentareAvocat from "../../../../components/avocatPage/PrezentareAvocat";
import CTA from "../../../../components/common/ui/cta/cta";

function Avocat(props) {
	return (
		<>
			<Head>
				<title>{props.avocat.name}</title>
			</Head>

			<HeroAvocat avocat={props.avocat} />
			<PrezentareAvocat avocat={props.avocat} />
			<CTA />
		</>
	);
}

export async function getStaticPaths() {
	const paths = avocatiData.map((avocat) => ({
		params: { slug: `${avocat.slug}` },
	}));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const { slug } = context.params;
	const avocat = avocatiData.find((avocat) => avocat.slug === slug);
	return {
		props: {
			avocat,
		},
	};
}

export default Avocat;

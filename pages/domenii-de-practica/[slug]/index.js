import Head from 'next/head';

import { domeniiData } from '../../api/domeniiData';

import HeroArea from '../../../components/areaPage/HeroArea';
import PrezentareArea from '../../../components/areaPage/PrezentareArea';
import CTA from '../../../components/common/ui/Cta';

function Area(props) {
	return (
		<>
			<Head>
				<title>{props.area.name}</title>
			</Head>

			<HeroArea area={props.area} />
			<PrezentareArea area={props.area} />
			<CTA />
		</>
	);
}

export async function getStaticPaths() {
	const paths = domeniiData.map((area) => ({
		params: { slug: `${area.slug}` },
	}));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const { slug } = context.params;
	const area = domeniiData.find((area) => area.slug === slug);
	return {
		props: {
			area,
		},
		revalidate: 100,
	};
}

export default Area;

import Head from "next/head";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import PracticeAreas from "../components/home/PracticeAreas";

export default function Home() {
	return (
		<>
			<Head>
				<title>Mpp</title>
				<meta name='description' content='MARE BAROU' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Hero />
			<PracticeAreas />
			<About />
		</>
	);
}

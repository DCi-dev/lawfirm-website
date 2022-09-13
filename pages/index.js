import Head from "next/head";
import Hero from "../components/home/Hero";

export default function Home() {
	return (
		<>
			<Head>
				<title>Mpp</title>
				<meta name='description' content='MARE BAROU' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Hero />
		</>
	);
}

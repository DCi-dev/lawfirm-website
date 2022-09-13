import Image from "next/image";

export default function Hero() {
	return (
		<div className='flex flex-col items-center justify-center h-screen bg-blue'>
			<div>
				<p>BUN VENIT LA</p>
				<h1 className='text-6xl font-bold'>MPP</h1>
			</div>
			<Image src='/assets/image/hero.png' width={500} height={500} />
		</div>
	);
}

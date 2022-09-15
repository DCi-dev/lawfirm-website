import { useRouter } from "next/router";

export default function CardAreas({ title, text, slug }) {
	const router = useRouter();
	function showAreas() {
		router.push(`/domenii-de-practica/${slug}`);
	}

	return (
		<>
			<button
				onClick={showAreas}
				key={title}
				className='rounded-2xl px-4 py-8 relative hover:scale-105 transform transition duration-300 ease-in-out overflow-hidden'
				style={{
					boxShadow:
						"rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
				}}>
				<h3 className='leading-10 text-black'>{title}</h3>
				<p className='mt-2 text-gray'>{text}</p>
			</button>
		</>
	);
}

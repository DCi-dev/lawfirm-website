import { useRouter } from "next/router";
import Image from "next/image";

export default function CardAvocati({ title, name, slug, image }) {
	const router = useRouter();
	function showAreas() {
		router.push(`/echipa/avocati/${slug}`);
	}

	return (
		<>
			<div
				onClick={showAreas}
				key={name}
				className='rounded-md  relative hover:scale-105
        transform transition duration-300 ease-in-out bg-black
        overflow-hidden flex flex-col text-center'
				style={{
					boxShadow:
						"rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
				}}>
				<div className='overflow-hidden relative p-0 m-0  w-full bg-ivory'>
					<Image src={image} alt={name} />
				</div>
				<div className='py-4 px-2 w-full '>
					<h3 className='leading-10 text-ivory '>{name}</h3>
					<p className='mt-2 text-gray'>{title}</p>
				</div>
			</div>
		</>
	);
}

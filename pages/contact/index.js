import Head from "next/head";
import ContactForm from "../../components/common/contact-form/contactForm";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact</title>
			</Head>
			<div className='bg-black'>
				<div className='max-w-7xl px-8 pt-32 pb-8 mx-auto text-center text-ivory'>
					<h1 className='text-gold'>Contact</h1>
					<p>
						Societatea noastră îşi desfăşoră activitatea atât în cadrul biroului
						din Iași cât şi în județele conexe, tocmai pentru a fi cât mai
						aproape de clienţii noştri şi pentru a veni în întâmpinarea
						necesităţilor acestora. Ne puteţi contacta folosind informaţiile de
						mai jos sau formularul de contact.
					</p>
					<div>
						<div className='grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-3 py-10 px-6'>
							<div>
								<FaLocationArrow className='w-12 h-12 -mb-6 mx-auto text-gold' />
								<h3 className='text-ivory'>Adresă</h3>
								<p className='text-2xl'>Strada Tătărași 9, Iași, România</p>
							</div>
							<div>
								<BsFillTelephoneFill className='w-12 h-12 -mb-6 mx-auto text-gold' />
								<h3 className='text-ivory'>Telefon</h3>
								<a href='tel:+40752171727' data-rel='external'>
									<p className='text-2xl text-gold'>0752 171 727</p>
								</a>
							</div>
							<div>
								<MdEmail className='w-12 h-12 -mb-6 mx-auto text-gold' />
								<h3 className='text-ivory'>E-mail</h3>
								<a href='mailto:contact@mpp.ro' data-rel='external'>
									<p className='text-2xl text-gold'>contact@mpp.ro</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<ContactForm />
		</>
	);
}

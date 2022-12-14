// For handling input states
import { useState } from 'react';

// For display toasts
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function ContactForm() {
	// Input states
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [purpose, setPurpose] = useState('');
	const [message, setMessage] = useState('');

	// Form submit handler
	const submitForm = async (e) => {
		e.preventDefault();
		const res = await fetch('/api/submit-form', {
			method: 'POST',
			body: JSON.stringify({ name, phone, purpose, message }),
		});
		// Success if status code is 201
		if (res.status === 201) {
			toast('Mulțumim pentru mesaj! Te vom contacta în curând', {
				type: 'success',
			});
		} else {
			toast('Ne pare rău, dar nu am primit mesajul!', { type: 'error' });
		}
	};

	return (
		<>
			<div className='bg-white pt-12'>
				<ToastContainer />
				<div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
					<h1 className='mb-4 text-4xl tracking-tight font-bold text-center'>
						Lăsați-ne un mesaj
					</h1>
					<p className='mb-8 lg:mb-16 text-center text-black sm:text-xl'>
						Got a technical issue? Want to send feedback about a beta feature?
						Need details about our Business plan? Let us know.
					</p>
					<form className='space-y-8' onSubmit={submitForm}>
						<div>
							<label htmlFor='name' className='block mb-2 text-lg text-black'>
								Nume Prenume
							</label>
							<input
								type='text'
								id='name'
								name='name'
								placeholder='John Doe'
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
								className='shadow-sm bg-white border border-black 
								text-black text-lg rounded-lg focus:ring-black 
								focus:border-gold block w-full p-2.5'
							/>
						</div>
						<div>
							<div>
								<label
									htmlFor='phone'
									className='block mb-2 text-lg text-black'>
									Număr de telefon
								</label>
								<input
									type='text'
									name='phone'
									placeholder='0745123456'
									minLength='10'
									maxLength='10'
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									required
									className='shadow-sm bg-white border border-black 
								text-black text-lg rounded-lg focus:ring-gold 
								focus:border-gold block w-full p-2.5'
								/>
							</div>
							<div>
								<label
									htmlFor='purpose'
									className='block mb-2 mt-2 text-lg text-black'>
									Avocați
								</label>
								<select
									name='purpose'
									id='purpose'
									value={purpose}
									onChange={(e) => setPurpose(e.target.value)}
									className='bg-white border border-black text-black text-lg rounded-lg focus:ring-gold focus:border-gold block w-full p-2.5'>
									<option value='' disabled required>
										Alege unu partener
									</option>
									<option value='General'>General</option>
									<option value='David Padurariu'>
										David Alexandru Pădurariu
									</option>
									<option value='Eduard Manolache'>Eduard Manolache</option>
									<option value='Anamaria Bita'>Maria-Teodora Bița</option>
								</select>
							</div>
						</div>
						<div>
							<label
								htmlFor='message'
								className='block mb-2 text-lg text-black'>
								Mesaj
							</label>
							<textarea
								name='message'
								id='message'
								rows='5'
								placeholder='Bună ziua, vreau să vă contactez pentru...'
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								required
								className='shadow-sm bg-white border border-black= 
								text-black text-lg rounded-lg focus:ring-gold 
								focus:border-gold block w-full p-2.5'></textarea>
						</div>
						<button
							className='py-3 px-5 text-xl
							text-center text-black rounded-lg bg-gold 
							sm:w-fit hover:bg-black hover:text-white focus:ring-4 
							focus:outline-none focus:ring-primary-300'
							type='submit'>
							Trimite
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

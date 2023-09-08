import { useState } from 'react';
import './Contact.scss';
import sanitizeHtml from 'sanitize-html';
import Button from '../Button/Button';

const Contact = () => {
	const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Limpia los datos antes de enviarlos a Formspree
		const cleanedName = sanitizeHtml(formData.name);
		const cleanedEmail = sanitizeHtml(formData.email);
		const cleanedMessage = sanitizeHtml(formData.message);

		// Actualiza el estado con los datos limpios
		setFormData({
			name: cleanedName,
			email: cleanedEmail,
			message: cleanedMessage,
		});

		// Ahora puedes enviar los datos limpios a Formspree
		try {
			const response = await fetch(`https://formspree.io/f/${apiKey}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData), // Envía los datos limpios
			});

			if (response.ok) {
				// Procesar la respuesta de éxito
				console.log('Formulario enviado con éxito');
				setFormData({
					name: '',
					email: '',
					message: '',
				});
			} else {
				// Procesar posibles errores
				console.error('Error al enviar el formulario');
			}
		} catch (error) {
			console.error('Error de red:', error);
		}
	};

	return (
		<section id='contact'>
			<div
				className='contact__container container'
				data-aos='fade-zoom-in'
				data-aos-easing='ease-in-back'
				data-aos-delay='300'
				data-aos-offset='0'>
				<div className='contact__header'>
					<h2>Contact</h2>
					<p>
						I would love to hear about your project and how I could
						help. <br />
						Please dill in the form, and I'll get back to you as
						soon as possible.
					</p>
				</div>
				<form
					onSubmit={handleSubmit}
					action={`https://formspree.io/f/${apiKey}`}
					method='POST'>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Name'
						required
						value={formData.name}
						onChange={handleChange}
					/>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Email'
						required
						value={formData.email}
						onChange={handleChange}
					/>
					<textarea
						name='message'
						id='message'
						rows={3}
						placeholder='Message'
						required
						value={formData.message}
						onChange={handleChange}
					/>
					<button
						className='contact__button contact__button--black form__button'
						type='submit'>
						SEND MESSAGE
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;

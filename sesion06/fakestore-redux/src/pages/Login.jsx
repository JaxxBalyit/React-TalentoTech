import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
	const navigate = useNavigate()
	const { login, user, loadingSession } = useLogin()

	const [form, setForm] = useState({
		email: '',
		password: '',
	})
	const [error, setError] = useState(null)

	if (loadingSession) {
		return <span>Cargando...</span>
	}

	if (!loadingSession && user) {
		return (
			<Navigate
				to='/'
				replace={true}
			/>
		)
	}

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
		setError(null)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await login(form.email, form.password)
			navigate('/')
			console.log(res)
		} catch (error) {
			if (error.code === 'auth/invalid-login-credentials') {
				setError('Credenciales inválidas')
			}
		}
	}

	return (
		<div className='flex flex-col w-full h-full items-center'>
			<div className='flex flex-col items-center justify-center w-fit h-fit bg-slate-200 rounded-md p-8'>
				<h1 className='text-2xl font-bold text-slate-900'>Iniciar sesión</h1>
				<form
					className='flex flex-col w-full mt-4'
					onSubmit={handleSubmit}
				>
					<input
						type='email'
						placeholder='Email'
						className='text-black w-full p-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-500'
						name='email'
						onChange={handleChange}
					/>
					<input
						type='password'
						placeholder='Contraseña'
						className='text-black w-full p-2 mt-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-500'
						name='password'
						onChange={handleChange}
					/>
					<button
						type='submit'
						className='w-full p-2 mt-4 bg-slate-500 text-white rounded-md hover:bg-slate-600'
					>
						Iniciar sesión
					</button>
					{error ? <span className='text-red-500'>{error}</span> : null}
				</form>
			</div>
		</div>
	)
}

export default Login

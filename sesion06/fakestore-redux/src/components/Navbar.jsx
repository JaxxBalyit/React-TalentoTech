import { Link, useNavigate } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'
import { useSelector } from 'react-redux'

const Navbar = () => {
	const { user, logout } = useLogin()
	const navigate = useNavigate()
	const cart = useSelector((state) => state.cart)

	const handleLogout = async () => {
		await logout()
		navigate('/login')
	}

	return (
		<nav className='bg-black p-4 w-full flex justify-center'>
			<div className='container flex justify-between items-center text-white px-4'>
				<Link
					to='/'
					className='text-xl'
				>
					FakeStore
				</Link>
				<Link to='/cart'>Carrito {cart.length > 0 && <span className='text-red-500'>({cart.length})</span>}</Link>
				<Link to='/new-product'>Agregar Nuevo Producto</Link>

				{!user ? (
					<Link to='/login'>Iniciar sesión</Link>
				) : (
					<div className='flex gap-4 items-center'>
						<span>{user.email}</span>
						<button
							className='text-red-500 underline p-2 rounded-md hover:text-red-600'
							onClick={handleLogout}
						>
							Cerrar sesión
						</button>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar

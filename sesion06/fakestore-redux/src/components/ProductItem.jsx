/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/cartSlice'

const ProductItem = ({ product }) => {
	const dispatch = useDispatch()
	const location = useLocation().pathname
	const cart = useSelector((state) => state.cart)

	const isInCart = cart.some((item) => item.id === product.id)

	const handleAddToCart = () => {
		dispatch(addToCart(product))
		alert('Producto añadido al carrito')
	}

	const handleRemoveFromCart = () => {
		dispatch(removeFromCart(product.id))
		alert('Producto eliminado del carrito')
	}

	return (
		<li className='flex flex-col gap-2 p-4 items-center bg-white rounded-xl shadow text-black'>
			<img
				src={product.image}
				className='w-20'
				alt={product.title}
			/>
			<Link to={`/product/${product.id}`}>
				<span className='text-center font-bold text-black'>{product.title}</span>
			</Link>
			<span className='text-center font-bold text-sm text-black'>${product.price}</span>
			{location !== '/cart' ? (
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					onClick={handleAddToCart}
				>
					Añadir al carrito{' '}
				</button>
			) : isInCart ? (
				<button
					className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
					onClick={handleRemoveFromCart}
				>
					Eliminar del carrito{' '}
				</button>
			) : null}
		</li>
	)
}

export default ProductItem

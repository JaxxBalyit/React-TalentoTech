import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/cartSlice'
import { useLocation } from 'react-router-dom'

const ProductItem = ({ product }) => {
	const location = useLocation()

	const dispatch = useDispatch()

	const handleAddToCart = () => {
		dispatch(addToCart)
		alert('Producto agregado al carrito')
	}

	const handleRemoveFromCart = () => {
		dispatch(removeFromCart)
		alert('Producto removido del carrito')
	}

	return (
		<li className='flex flex-col gap-2 p-4 items-center bg-white rounded-xl shadow'>
			<img
				src={product.image}
				className='w-20'
			/>
			<span className='text-center font-bold text-black'>{product.title}</span>
			<span className='text-center font-bold text-sm text-black'>${product.price}</span>
			<button
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
				onClick={handleAddToCart}
			>
				Añadir al carrito{' '}
			</button>
			<button
				className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
				onClick={handleRemoveFromCart}
			>
				Remover del carrito
			</button>
		</li>
	)
}

export default ProductItem

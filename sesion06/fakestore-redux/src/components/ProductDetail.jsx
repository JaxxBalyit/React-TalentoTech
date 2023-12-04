import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { db } from '../main'

const ProductDetail = () => {
	const { productId } = useParams()
	const [product, setProduct] = useState(null)
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const productRef = doc(db, 'products', productId)
				const productDoc = await getDoc(productRef)
				if (productDoc.exists()) {
					setProduct({ id: productDoc.id, ...productDoc.data() })
				} else {
					console.log('No such document!')
				}
			} catch (error) {
				console.error('Error fetching product:', error)
			}
		}

		fetchProduct()
	}, [productId])

	const handleAddToCart = () => {
		// Dispatch addToCart action with the product
		dispatch(addToCart(product))
		alert('Product added to cart')
	}

	if (!product) {
		return <div className='text-center mt-8'>Loading...</div>
	}

	return (
		<div className='max-w-2xl mx-auto mt-8'>
			<h2 className='text-3xl font-semibold mb-4 text-black'>{product.title}</h2>
			<img
				src={product.image}
				alt={product.title}
				className='mb-4'
			/>
			<p className='mb-4 text-black text-lg'>{product.description}</p>
			<p className='text-xl font-bold text-indigo-700 mb-4'>${product.price}</p>
			<button
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
				onClick={handleAddToCart}
			>
				Add to Cart
			</button>
		</div>
	)
}

export default ProductDetail

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useFakestoreApi } from '../hooks/useFakestoreApi'
import ProductItem from '../components/ProductItem'

const Home = () => {
	const [search, setSearch] = useState('')
	const handleChange = (e) => {
		e.preventDefault()
		setSearch(e.target.value)
	}
	const { data: products, loading, error, getProducts } = useFakestoreApi()

	useEffect(() => {
		const get = async () => {
			const unsubscribe = getProducts()
			return () => {
				if (typeof unsubscribe === 'function') {
					unsubscribe()
				}
			}
		}
		get(), []
	})

	return (
		<div className='text-black'>
			<div className='flex justify-between pb-3'>
				<h1 className='text-xl font-bold'>Página Principal</h1>
				<input
					type='text'
					className='border border-white rounded px-2 w-1/4 font-bold'
					placeholder='Buscar...'
					value={search}
					onChange={(e) => handleChange(e)}
				/>
			</div>
			{loading ? <span>Cargando...</span> : null}
			{error ? <span>Hubo un error</span> : null}

			{products ? (
				<ul className='grid grid-cols-5 gap-4 '>
					{products.map((product) =>
						!search || product.title.toLowerCase().includes(search.toLowerCase()) ? (
							<ProductItem
								product={product}
								key={product.id}
							/>
						) : null,
					)}
				</ul>
			) : null}
		</div>
	)
}

export default Home

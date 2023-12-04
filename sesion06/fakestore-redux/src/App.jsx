import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Auth from './hoc/Auth'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Cart from './pages/Cart'
import Restricted from './pages/auth/Restricted'
import NewProduct from './pages/auth/RegisterNewProduct'
import ProductDetail from './components/ProductDetail'

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<main className='min-h-screen min-w-screen bg-gray-100 flex flex-col'>
					<Navbar />
					<div className='w-full flex justify-center'>
						<div className='container flex text-white p-4'>
							<Routes>
								<Route
									path='/'
									element={<Home />}
								/>
								<Route
									path='/cart'
									element={<Cart />}
								/>
								<Route
									path='/login'
									element={<Login />}
								/>
								<Route
									path='/product/:productId'
									element={<ProductDetail />}
								/>
								<Route
									element={
										<Auth>
											<Outlet />
										</Auth>
									}
								>
									<Route
										path='/restricted'
										element={<Restricted />}
									/>
									<Route
										path='/new-product'
										element={<NewProduct />}
									/>
								</Route>
							</Routes>
						</div>
					</div>
				</main>
			</BrowserRouter>
		</Provider>
	)
}

export default App

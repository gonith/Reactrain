import Banner from './Banner'
// import Cart from './Cart'
import ShoppingList from './ShoppingList'
import logo from '../assets/logo.png'
import Footer from './Footer.js'
import Cart from './Cart'
import '../styles/Layout.css'

function App() {
  return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart />
				<ShoppingList />
			</div>
			<Footer />
		</div>
	)
}

export default App
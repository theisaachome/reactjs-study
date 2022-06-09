import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const {cartIsVisiable} = useSelector((state)=>state.ui);
  return (
    <Layout>
     {cartIsVisiable && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

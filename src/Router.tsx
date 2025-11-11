import { createBrowserRouter } from 'react-router-dom';
import HeadphonesPage from './PageContent/HeadphonesPage';
import SpeakersPage from './PageContent/SpeakersPage';
import EarphonesPage from './PageContent/EarphonesPage';
import Home from './PageContent/Home';
import MasterLayout from './Pages/MasterLayout';
import ProductDetailsPage from './PageContent/ProductDetailsPage';
import CheckoutPage from './PageContent/CheckoutPage';

function Router() {
  const routes = [
    {
        path: '/',
        element: <MasterLayout/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'headphones',
                element: <HeadphonesPage/>,
            },
            {
                path: 'speakers',
                element: <SpeakersPage/>,
            },
            {
                path: 'earphones',
                element: <EarphonesPage/>
            },
            {
                path: ':category/:id',
                element: <ProductDetailsPage/>
            },
            {
                path: 'checkout',
                element: <CheckoutPage/>
            }
        ],
    },
    
  ];
    return createBrowserRouter(routes);
}

export default Router
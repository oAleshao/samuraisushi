import Login from '../components/header-elements/login';
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SushiPage from '../components/pages/sushi-page';
import SetsPage from '../components/pages/sets-page';
import BeveragesPage from '../components/pages/beverages-page';
import OtherPage from '../components/pages/other-page';
import SoupsPage from '../components/pages/soups-page';


const router = createBrowserRouter([{
    path: '/',
    element: <App></App>,
    children: [
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/sushipage',
            element: <SushiPage></SushiPage>
        },
        {
            path: '/setspage',
            element: <SetsPage></SetsPage>
        },
        {
            path: '/beveragespage',
            element: <BeveragesPage></BeveragesPage>
        },
        {
            path: '/otherspage',
            element: <OtherPage></OtherPage>
        },
        {
            path: '/soupspage',
            element: <SoupsPage></SoupsPage>
        },
    ]
}]);

export default router;
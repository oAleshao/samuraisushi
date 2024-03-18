import './App.css';
import Header from './components/Header';
import LeftMenu from './components/body-element/left-menu';
import Carousel from './components/body-element/carousel';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { soups_list } from './all-products-list/temp-product-soups.js';
import { sets_list } from './all-products-list/temp-product-sets.js';
import { sushi_list } from './all-products-list/temp-product-list.js';
import Footer from './components/body-element/footer.jsx';
import TitleOffers from './components/body-element/title-offers.jsx';
import OffersMainPage from './components/body-element/offers-main-page.jsx';
import MyLiner from './components/body-element/my-liner.jsx';
import CartOpenProvider from './providers/cartOpenProvider.js';


function App() {

  const [setsOffers, setSetsOffers] = useState(sets_list);
  const [soupsOffers, setSoupsOffers] = useState(soups_list);
  const [sushiOffers, setSushiOffers] = useState(sushi_list);

  const cart = useSelector(state => state.cart);
  const openPage = useSelector(state => state.openPage);

  const FilterDiscount = (obj) => obj.discount !== 0;

  useEffect(() => {
    setSetsOffers(sets_list.filter(FilterDiscount));
    setSoupsOffers(soups_list.filter(FilterDiscount));
    setSushiOffers(sushi_list.filter(FilterDiscount));
  }, [])

  return (
    <CartOpenProvider>
      <div>
        <Header></Header>
        <main id='main-box'>
          <section>
            <LeftMenu></LeftMenu>
          </section>
          <section id='main-page'>
            {openPage.isOpen ? '' : <>
              <Carousel></Carousel>
              <div>
                <TitleOffers>Sets</TitleOffers>
                <OffersMainPage list={setsOffers}></OffersMainPage>
                <MyLiner></MyLiner>

                <TitleOffers>Sushi/rolls</TitleOffers>
                <OffersMainPage list={sushiOffers}></OffersMainPage>
                <MyLiner></MyLiner>

                <TitleOffers>Soups</TitleOffers>
                <OffersMainPage list={soupsOffers}></OffersMainPage>

              </div>

            </>}
            <Outlet></Outlet>

          </section>


        </main>

        <Footer></Footer>


      </div>
    </CartOpenProvider>
  );
}

export default App;

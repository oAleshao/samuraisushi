import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LeftMenu from './components/body-element/left-menu';
import Carousel from './components/body-element/carousel';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { soups_list } from './all-products-list/temp-product-soups.js';
import { sets_list } from './all-products-list/temp-product-sets.js';
import ProductItem from './components/body-element/product-item.jsx';

function App() {

  const [setsOffers, setSetsOffers] = useState(sets_list);
  const [soupsOffers, setSoupsOffers] = useState(soups_list);

  const openPage = useSelector(state => state.openPage)

  const FilterDiscount = (obj) => obj.discount !== 0;

  useEffect(() => {
    setSetsOffers(sets_list.filter(FilterDiscount));
    setSoupsOffers(soups_list.filter(FilterDiscount));
  }, [])

  return (
    <div>
      <Header></Header>
      <LeftMenu></LeftMenu>
      <main id='main-box'>
        {openPage.isOpen ? '' : <>
          <Carousel id='carousel-item'></Carousel>
          <div id='main-page'>
            <div className='all-items-style '>
              {setsOffers?.map((item) => (<ProductItem {...item} isFood={true} key={item.id}></ProductItem>))}
              {soupsOffers.map((item) => (<ProductItem {...item} isFood={false} key={item.id}></ProductItem>))}
            </div>
          </div>
        </>}

        <Outlet></Outlet>
        {openPage.isOpen}
      </main>

    </div>
  );
}

export default App;

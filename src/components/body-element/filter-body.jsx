import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFilter, setFilter } from '../../slices/PageFilterSlice';


const FilterBody = () => {

    const dispatch = useDispatch();

    const [maxPrice, setMaxPrice] = useState(50);

    return (
        <div className='filter-body'>
            <h2>Filter</h2>
            <div className='price-filter-box'>
                <section>
                    <p>Max price</p>
                </section>
                <section>
                    <input type="range" id='range-max-price' min={0} max={50} onChange={(e) => { setMaxPrice(e.target.value); console.log(e.target.value); }} />
                    <input type="number" id='helper-range' value={maxPrice} readOnly={true} />
                </section>
            </div>
            <hr className='hr-filter' />
            <div className='checkbox-box'>
                <input type="checkbox" value={'sale'}
                    onChange={(e) => {
                        dispatch(setFilter(e.target.value));
                    }} />
                <span>Sale</span>
            </div>
            <div className='checkbox-box'>
                <input type="checkbox" value={'hot'}
                    onChange={(e) => {
                        dispatch(setFilter(e.target.value));
                    }} />
                <span>Hot</span>
            </div>
            <div className='checkbox-box'>
                <input type="checkbox" value={'spicy'}
                    onChange={(e) => {
                        dispatch(setFilter(e.target.value));
                    }} />
                <span>Spicy</span>
            </div>
            <div className='btn-remove-filter'>
                <button onClick={() => {
                    dispatch(removeFilter());
                }}>Remove filter</button>
            </div>
        </div>
    );
}

export default FilterBody;

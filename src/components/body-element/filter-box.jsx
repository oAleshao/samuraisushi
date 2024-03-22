import React, { useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import FilterBody from '../body-element/filter-body'
import { useDispatch, useSelector } from 'react-redux';
import { openFilterBox } from '../../slices/PageFilterSlice';

const FilterBox = ({ pageName, listProduct }) => {

    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const open = () => {
        dispatch(openFilterBox())
    };

    return (
        <div className='filter-box'>
            <div>
                <h2>{pageName}</h2>
            </div>
            <div className='all-filter-buttons'>
                <h2>Filter
                    {filter.sale && '/sale'}
                    {filter.hot && '/hot'}
                    {filter.spicy && '/spicy'}
                </h2>
                {!filter.hasFilter ?
                    <FilterListIcon id='filterIcon' onClick={() => { open() }}></FilterListIcon> :
                    <>
                        <FilterListOffIcon id='filterIcon' onClick={() => { open() }}></FilterListOffIcon>
                        <FilterBody></FilterBody>
                    </>
                }
            </div>
        </div>
    );
}

export default FilterBox;

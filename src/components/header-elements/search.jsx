import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    const [searchedData, setSearchedData] = useState('');
    return (
        <div id='search-box'>
            <div>
                <SearchIcon className='search-icon-style'></SearchIcon>
                <input placeholder='search' value={searchedData}
                    onChange={(e) => { setSearchedData(e.target.value); }}></input>
            </div>
        </div>
    );
}

export default Search;

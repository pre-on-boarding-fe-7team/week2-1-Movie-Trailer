import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon, Search, SearchIconWrapper, StyledInputBase } from './SearchInput.style';

const SearchInput = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const changeHandler = e => {
    setKeyword(e.target.value);
  };
  const searchHandler = e => {
    if (e.key === 'Enter') {
      setKeyword('');
      navigate('/search', { state: { query: e.target.value } });
    }
  };
  return (
    <Search>
      <SearchIconWrapper>
        <Icon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onKeyDown={searchHandler}
        onChange={changeHandler}
        value={keyword}
      />
    </Search>
  );
};

export default SearchInput;

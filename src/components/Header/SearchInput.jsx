import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon, Search, SearchIconWrapper, StyledInputBase } from './SearchInput.style';

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const changeHandler = e => {
    setQuery(e.target.value);
  };
  const searchHandler = ({ target: { value }, key }) => {
    if (key !== 'Enter') return;
    if (!value) return;

    setQuery('');
    navigate('/search', { state: { query: value } });
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
        value={query}
      />
    </Search>
  );
};

export default SearchInput;

import React from 'react'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch('00SC4J6Z9T', 'd0343528014a311175465c9e87cd21fc');

const Search = () => (
  <InstantSearch searchClient={searchClient} indexName="demo_ecommerce">
    <SearchBox />
    <Hits />
  </InstantSearch>
);
export default Search
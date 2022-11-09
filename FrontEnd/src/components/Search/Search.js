import React from 'react'
import ReactDOM from 'react-dom';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits  } from 'react-instantsearch-hooks-web';

const searchClient = algoliasearch('00SC4J6Z9T', 'd0343528014a311175465c9e87cd21fc');

function Hit({ hit }) {
    return (
      <article>
        <img src={hit.image} alt={hit.name} />
        <h1>{hit.name}</h1>
        <p>${hit.price}</p>
      </article>
    );
  }

function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="product_search">
      <SearchBox />
    </InstantSearch>
  )
}

export default Search
import React, { createContext, useEffect, useState } from 'react'
export const ListProductContext = createContext()

const ListProductProvider = (props) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
  }, [])
  const addProduct = async (product) => {
    const existedProduct = products.find((item) => {
      return item.id === product.id && item.name === product.name
    })
    if (existedProduct) {
      products.forEach((item) => {
        if (item.id === product.id && item.name === product.name) {
          item.amount += 1
        }
      })
      setProducts([...products])
      localStorage.setItem('cart', JSON.stringify([...products]));
    } else {
      setProducts([...products, product])
      localStorage.setItem('cart', JSON.stringify([...products, product]));
    }
  }


  const delProduct = (name) => {
    setProducts(products.filter((n) => (n.name !== name)))
    localStorage.setItem('cart', JSON.stringify(products.filter((n) => (n.name !== name))));
  }

  const upAmount = (id, name) => {
    products.forEach((item) => {
      if (item.id === id && item.name === name) {
        item.amount += 1
      }
    })
    setProducts([...products])
    localStorage.setItem('cart', JSON.stringify([...products]));
  }

  const downAmount = (id, name) => {
    products.forEach((item) => {
      if (item.id === id && item.name === name) {
        item.amount -= 1
        if (item.amount <= 1) {
          item.amount = 1
        }
      }
    })
    setProducts([...products])
    localStorage.setItem('cart', JSON.stringify([...products]));
  }

  const clearCart = () => {
    setProducts([])
    localStorage.removeItem('cart');
  }

  return (
    <ListProductContext.Provider
      value={{
        products,
        addProduct,
        delProduct,
        upAmount,
        downAmount,
        clearCart,
      }}
    >
      {props.children}
    </ListProductContext.Provider>
  )
}

export default ListProductProvider

import React, { createContext, useState } from 'react'
export const ListProductContext = createContext()

const ListProductProvider = (props) => {
  const [products, setProducts] = useState([])

  const addProduct = async (product) => {
    const existedProduct = products.find((item) => {
      return item.id === product.id //co
    })
    //Luong
    if (existedProduct) {
      products.forEach((item) => {
        if (item.id === product.id) {
          item.amount += 1
        }
      })
      setProducts([...products])
      // alert("Sản phẩm đã được thêm 1 !!!")
    } else {
      setProducts([...products, product])
      // alert("Sản phẩm đã được thêm mới!");
    }
  }

  const delProduct = (id) => setProducts(products.filter((n) => n.id !== id))

  const upAmount = (id) => {
    products.forEach((item) => {
      if (item.id === id) {
        item.amount += 1
      }
    })
    setProducts([...products])
  }

  const downAmount = (id) => {
    products.forEach((item) => {
      if (item.id === id) {
        item.amount -= 1
        if (item.amount <= 1) {
          item.amount = 1
        }
      }
    })
    setProducts([...products])
  }

  // const sumMoney = () => {
  //   const sum = 0
  //   products.map((item) => {
  //     sum = sum + item.price * item.amount
  //   })
  //   return sum
  // }

  return (
    <ListProductContext.Provider
      value={{
        products,
        addProduct,
        delProduct,
        upAmount,
        downAmount,
        // sumMoney,
      }}
    >
      {props.children}
    </ListProductContext.Provider>
  )
}

export default ListProductProvider

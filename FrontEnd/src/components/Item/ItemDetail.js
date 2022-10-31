import React, { useEffect, useState ,useContext} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Header from '../Header/Header'
import Button from '../Button/Button'
import ItemCard from './ItemCard'
import { ListProductContext } from '../../context/ListProductContext'

const ItemDetail = () => {
  const { id } = useParams()
  const [info, setInfo] = useState([])
  const {addProduct} = useContext(ListProductContext);
  
  const add = (e) => {
    e.preventDefault();
    const id = info._id;
    const name = info.name;
    const price = info.price;
    const amount = 1;
    const product = {id,name,price,amount};
    addProduct(product);
  };

  axios.get(`http://localhost:8000/product/${id}`).then((res) => setInfo(res.data))

  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/product').then((res) => {
      setProduct(res.data)
    })
  }, [])

  return (
    <div>
      <Header />
      <div className="h-20"></div>
      <div className="sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px] font-googleSansRegular">
        <div className="grid grid-cols-2">
          <img
            className="rounded-[1.5rem] hover:rounded-[2rem] transition-all"
            src={info.image}
            alt="product-thumbnail"
          />
          <div>
            <p className="text-[26px] mb-[18px] text-black leading-6">
              {info.name}
            </p>
            <div className="text-base mt-4">
              <span className="text-[26px] font-semibold mr-[37px]">
                {info.price} đ
              </span>
            </div>
            <div className="items-center mt-4">
              <Button
                type="button"
                buttonSize="btn--medium"
                buttonStyle="btn--primary--fill"
                icon="cart-outline"
                onClick={add}
              >
                Thêm vào giỏ hàng
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h4 className="text-[18px] mb-2 font-semibold">Mô tả sản phẩm</h4>
          <p className="leading-6 text-[14px] font-normal">
            Được sản xuất theo công nghệ Nhật, Cà Phê Sữa Espresso The Coffee
            House giữ trọn hương vị đậm đà của 100% cà phê Robusta nguyên chất
            quyện hoà cùng sữa béo thơm lừng. Bật nắp trải nghiệm ngay chất cà
            phê mạnh mẽ giúp sảng khoái tức thì, tuôn trào hứng khởi
          </p>
        </div>
        <div className="mt-16">
          <h4 className="text-[18px] mb-2 font-semibold">Sản phẩm liên quan</h4>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {product.map((item) => (
              <Link to={'/product/' + item._id}>
                <ItemCard
                  key={item._id}
                  title={item.name}
                  price={item.price}
                  image={item.image}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail

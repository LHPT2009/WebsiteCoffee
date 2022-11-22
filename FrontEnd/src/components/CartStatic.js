import React from 'react'
import Button from '../components/Button/Button'
import TextInput from '../components/Input/TextInput'

const CartStatic = () => {
  return (
    <div>
      <div className="border-s5 border-[2px] rounded-[24px] border-collapse overflow-hidden">
        <table>
          <thead className="text-l2 sm:text-l1 text-on-surface bg-s5">
            <tr>
              <th>Sản phẩm</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Tổng tiền (1 sản phẩm)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-l2 bg-background hover:bg-s1">
              <td>Cà Phê Đen Đá - Size: M</td>
              <td>35.000 ₫</td>
              <td>
                <div className="flex">
                  <Button
                    btnStyle="btn-tonal"
                    icon="remove"
                    type="button"
                    children=""
                  />
                  <input
                    className="w-20 h-10 mx-2 text-center bg-transparent rounded-full"
                    type="text"
                    value={1}
                  />
                  <Button
                    btnStyle="btn-tonal"
                    icon="add"
                    type="button"
                    children=""
                  />
                </div>
              </td>
              <td className="lowercase">35.000 ₫</td>
              <td>
                <Button
                  btnStyle="btn-danger"
                  icon="delete"
                  type="button"
                  children=""
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div></div>
      {/* Discount - Payment */}
      <div className="flex justify-between mt-6">
        <div className="flex">
          <div>
            <TextInput
              // defaultValue={namediscount}
              placeholder="Mã giảm giá (nếu có)"
              className="mr-3"
            />
          </div>
          <div>
            <Button btnStyle="btn-tonal" btnCSS={'h-[50px]'} icon={''}>
              Áp dụng
            </Button>
          </div>
        </div>
      </div>
      {/* Card total - discount */}
      <div className="p-6 my-6 rounded-3xl bg-s5 text-on-surface border-outline-var">
        {/* <div className="mb-2 text-l2">Giảm giá: </div> */}
        <div className="flex items-center justify-between">
          <div className="text-t1">Tồng tiền: 35.000 ₫</div>
          <div className="flex flex-col gap-2">
            <Button btnStyle="" btnCSS={'shadow-5'} icon="payments">
              Thanh toán
            </Button>
            <Button btnStyle="" btnCSS={'!bg-[#d41f8d] shadow-5'} icon="wallet">
              Momo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartStatic

import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import barista2 from '../../assets/images/barista_2.png'
import Divider from '../../components/Divider'
import CartStatic from '../../components/CartStatic'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
  const navigate = useNavigate()
  useEffect(() => {
    document.title = 'Về chúng tôi - Coffee Bug Ổn'
  }, [])
  return (
    <div className="relative min-h-screen pb-24 bg-background lg:pb-12">
      <Header />
      <div className="mx-8 my-[64px] bg-background lg:mx-40">
        <div className="flex flex-col gap-10 text-center">
          <div className="grid h-full grid-cols-12 gap-6 lg:h-4/5">
            <div className="flex flex-col col-span-12 lg:col-span-5 justify-center text-left items-start gap-[24px]">
              <h2 className="text-h2 text-primary">Về chúng tôi</h2>
              <d1 className="text-black text-d1">Quán cà phê Bug Ổn</d1>
              <p className="text-black text-body">
                Chúng tôi rất thích uống cà phê, nên chúng tôi muốn làm một thứ
                gì đó với nó. Mở một cửa hàng để bán? Chúng tôi còn là sinh viên
                mà. May mắn là chúng tôi là sinh viên ngành công nghệ thông tin.
                Chúng tôi có thể dùng kiến thức đã học và nhờ sự phát triển của
                thương mại điện tử để xây dựng một website kinh doanh của chúng
                tôi. Chúng tôi đặt tên nó là <b>“BUG ỔN”</b>.
              </p>
            </div>
            <div className="lg:col-span-1"></div>
            <div className="relative mx-20 lg:mx-0 bg-secondary-cont col-span-12 lg:col-span-6 rounded-[24px] h-[500px]">
              <img
                className="absolute w-[490px] h-auto left-[-40px] top-[-9px]
                lg:left-[-46px] lg:top-[-8px]  
                z-10"
                src={barista2}
              />
              <circle className="absolute w-[56px] h-[56px] right-[56px] top-[150px] bg-on-primary-cont rounded-full"></circle>
              <div className="absolute rounded-full border-secondary border-[10px] h-[200px] w-auto right-[-40px] left-[28.98%] bottom-[-36px] z-0"></div>
            </div>
          </div>
          <div className="mb-20 mt-28">
            <Divider />
          </div>
          <p className="text-black text-body">
            Nếu như mọi người có theo dõi FAPTV thì có lẽ đã từng xem qua 1
            series tiểu phẩm hài tên “Quán cà phê bất ổn”.
          </p>
          <div className="flex justify-center">
            <iframe
              className="w-full xs:h-[360px] md:h-[540px] lg:h-[720px] !rounded-[32px]"
              src="https://www.youtube.com/embed/videoseries?list=PLEyKu1JwbU4uArHCA6p9MuK10Sr49NV3b"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
            />
          </div>
          <p className="text-left text-black text-body">
            Chúng tôi cũng rất thích xem nó vì nó mang lại tiếng cười sau những
            giờ làm việc mệt mỏi. Khi chúng tôi đề xuất cần đặt tên cho website
            thì có vài thành viên đã nêu lên và sau đó đổi từ “bất” thành “bug”.
            Bug thì mọi người lập trình viên đều quá quen thuộc. Một website bán
            cà phê dành cho developer.
          </p>
          <div className="my-6">
            <Divider />
          </div>
          <d1 className="mb-2 text-left text-black text-d1">
            Bug Ổn một cách mới mẻ
          </d1>
          <div className="text-left">
            <h2 className="text-h2">Giao diện Material You hiện đại</h2>
            <div className="flex justify-center">
              <img
                className="mt-3 rounded-[48px]"
                src="https://lh3.googleusercontent.com/552oGSlinN0Gd7T8EjNkYGCBzHt0UmoG_pWtHSUY6FwaGT4q4-zJlGHD9rWO7MT5Oe_rtQZmyVnGRxVXch7Q1CTSQMs_1TcwbIMX9xZYDjEK2_R7PA=w1400-v0"
                alt="material-you"
                width={'100%'}
              />
            </div>
            <h2 className="mt-10 mb-3 text-h2">Mua cà phê nhanh chóng</h2>
            <p className="mb-3 text-left text-black text-body">
              Khách hàng sau khi có tài khoản, chỉ mất một vài bước để mua được
              sản phẩm. Lựa chọn thanh toán theo 2 hình thức là online qua ví
              Momo hoặc ngay khi nhận được sản phẩm.
            </p>
            <CartStatic />
            <h2 className="mt-10 mb-3 text-h2">
              Những tính năng <b>mới lạ</b> trong tương lai
            </h2>
            <p className="mb-3 text-left text-black text-body">
              Chúng tôi biết những gì mang lại cho quý khách hàng hiện tại là
              chưa đủ. Trong tương lai gần, chúng tôi sẽ thêm nhiều chức năng
              hay hơn nữa, cũng như bán nhiều loại sản phẩm và mở rộng quy mô
              hoạt động.
            </p>
            <p className="mb-3 text-left text-black text-body">
              Một trong những tính năng trong ý tưởng của chúng tôi là dành cho
              các developer. Chúng tôi sẽ cho ra mắt tính nhắn viết code để mua
              hàng. Thay vì nhấn vào giao diện có sẵn, sử dụng kiến thức của bạn
              và trải qua thử thách mua hàng bằng việc viết code.
            </p>
            <p className="text-left text-black text-body">
              Tiết lộ 1 tính năng như trên, hy vọng quý khách hàng sẽ thích khi
              nó được ra mắt.
            </p>
          </div>
          <div className="my-6">
            <Divider />
          </div>
          <button
            onClick={() => navigate('/bugonteam')}
            className="px-4 py-8 transition-all duration-200 ease-out bg-tertiary-cont text-h2 font-googleSansMedium rounded-[32px] hover:rounded-3xl"
          >
            Gặp gỡ những người bạn đã tạo nên Coffee Bug Ổn
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs

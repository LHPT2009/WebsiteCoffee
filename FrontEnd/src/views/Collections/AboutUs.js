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
    <div className="relative min-h-screen pb-24 bg-background lg:pb-12 overflow-clip">
      <Header />
      <div className="text-center items-center lg:flex lg:flex-col mx-2 sm:mx-8 lg:mx-auto lg:px-24 my-[64px] max-w-[1440px] bg-background transition-all ease-in-out duration-300">
          <div className="grid h-full grid-cols-12 gap-6 lg:h-4/5">
            <div className="flex flex-col col-span-12 lg:col-span-5 justify-center text-left items-start gap-[24px]">
              <h2 className="text-h2 text-primary">Về chúng tôi</h2>
              <d1 className="text-h1 sm:text-black sm:text-d1">Quán cà phê Bug Ổn</d1>
              <p className="text-black text-bodylg">
                Chúng tôi rất thích uống cà phê, nên chúng tôi muốn làm một thứ
                gì đó với nó. Mở một cửa hàng để bán? Chúng tôi còn là sinh viên
                mà. May mắn là chúng tôi là sinh viên ngành công nghệ thông tin.
                Chúng tôi có thể dùng kiến thức đã học và nhờ sự phát triển của
                thương mại điện tử để xây dựng một website kinh doanh của chúng
                tôi. Chúng tôi đặt tên nó là <b>“BUG ỔN”</b>.
              </p>
            </div>
            <div className="lg:col-span-1"></div>
            <div className="relative mx-0 lg:mx-0 bg-secondary-cont col-span-12 lg:col-span-6 rounded-[24px] h-[500px]">
              <img
                className="absolute w-[490px] h-auto left-[2%] top-[-5%]
                lg:left-[-8%] lg:top-[-3%]  
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

          {/* body--------------------------------------- */}
          <wrapper className="items-center gap-4 w-full text-black max-w-[1024px]">
            {/* article 1 */}
            <articlewrap className="flex flex-col ">
              <h1 className="text-h1">
                Tên là <span className="text-primary">Bug Ổn</span>
              </h1>
              <p className="text-bodylg">
                Nếu như mọi người có theo dõi FAPTV thì có lẽ đã từng xem qua 1
                series hài “Quán cà phê bất ổn”.
              </p>
              <div className="flex justify-center">
                <iframe
                  className="mx-4 w-full h-[240px] md:h-[360px] lg:h-[480px] !rounded-[32px]"
                  src="https://www.youtube.com/embed/videoseries?list=PLEyKu1JwbU4uArHCA6p9MuK10Sr49NV3b"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
                />
              </div>
              <p className="py-6 text-left text-bodylg">
                Chúng tôi cũng rất thích xem nó vì nó mang lại tiếng cười sau
                những giờ làm việc mệt mỏi. Khi chúng tôi đề xuất cần đặt tên
                cho website thì có vài thành viên đã nêu lên và sau đó đổi từ
                “bất” thành “bug”. Bug thì mọi người lập trình viên đều quá quen
                thuộc. Một website bán cà phê dành cho developer.
              </p>
            </articlewrap>
            <div className="my-6">
              <Divider />
            </div>
            {/* article 2 */}
            <articlewrap className="">
              <h1 className="text-h1 my-4">
                <span className='text-primary'>Bug Ổn</span> một cách mới mẻ
              </h1>
              <div className="text-left">
              <h2 className="text-h2 text-[#924642]">Giao diện Material You hiện đại</h2>
              <div className="flex justify-center">
                <img
                  className="mt-3 rounded-[48px]"
                  src="https://lh3.googleusercontent.com/552oGSlinN0Gd7T8EjNkYGCBzHt0UmoG_pWtHSUY6FwaGT4q4-zJlGHD9rWO7MT5Oe_rtQZmyVnGRxVXch7Q1CTSQMs_1TcwbIMX9xZYDjEK2_R7PA=w1400-v0"
                  alt="material-you"
                  width={'100%'}
                />
              </div>
              <h2 className="mt-10 mb-3 text-h2 text-secondary">Mua hàng nhanh chóng</h2>
              <p className="mb-3 text-left text-bodylg">
                Khách hàng sau khi có tài khoản, chỉ mất một vài bước để mua
                được sản phẩm. Lựa chọn thanh toán theo 2 hình thức là online
                qua ví Momo hoặc ngay khi nhận được sản phẩm.
              </p>
              <CartStatic />
              <h2 className="mt-10 mb-3 text-h2">
                Những tính năng <span className='text-primary underline'>mới lạ</span> trong tương lai
              </h2>
              <p className="mb-3 text-left text-bodylg">
                Chúng tôi biết những gì mang lại cho quý khách hàng hiện tại là
                chưa đủ. Trong tương lai gần, chúng tôi sẽ thêm nhiều chức năng
                hay hơn nữa, cũng như bán nhiều loại sản phẩm và mở rộng quy mô
                hoạt động.
              </p>
              <p className="mb-3 text-left text-bodylg">
                Một trong những tính năng trong ý tưởng của chúng tôi là dành
                cho các developer. Chúng tôi sẽ cho ra mắt tính nhắn viết code
                để mua hàng. Thay vì nhấn vào giao diện có sẵn, sử dụng kiến
                thức của bạn và trải qua thử thách mua hàng bằng việc viết code.
              </p>
              <p className="text-left text-bodylg">
                Tiết lộ 1 tính năng như trên, hy vọng quý khách hàng sẽ thích
                khi nó được ra mắt.
              </p>
            </div>
            </articlewrap>  
            <div className="my-6">
              <Divider />
            </div>
            <button
              onClick={() => navigate('/bugonteam')}
              className="px-4 py-8 transition-all duration-200 ease-out bg-tertiary-cont text-h2 font-googleSansMedium rounded-[32px] hover:rounded-3xl"
            >
              Gặp gỡ những người bạn đã tạo nên Coffee Bug Ổn
            </button>
          </wrapper>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs

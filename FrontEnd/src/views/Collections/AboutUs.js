import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import barista2 from '../../assets/images/barista_2.png'

const AboutUs = () => {
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
            <div className="relative mx-20 lg:mx-0 bg-secondary-cont col-span-12 lg:col-span-6  rounded-[24px] h-[500px]">
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
          <div className="box-border flex flex-col bg-outline-var mx-60 md:mx-72 py-[2px] my-32 rounded-full"></div>
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
          <div className="text-left">
            <d1 className="text-black text-d1">Bug Ổn một cách mới mẻ</d1>
            <p>Giao diện hiện đại</p>
            <p>Chức năng tiện lợi</p>
            <p>Mua hàng nhanh chóng</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs

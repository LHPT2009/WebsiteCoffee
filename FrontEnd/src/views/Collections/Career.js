import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import barista2 from '../../assets/images/barista_2.png'
import Divider from '../../components/Divider'

const Career = () => {
  useEffect(() => {
    document.title = 'Tuyển dụng - Coffee Bug Ổn'
  }, [])
  return (
    <div className="relative min-h-screen pb-24 bg-background lg:pb-12">
      <Header />
      <div className="mx-2 sm:mx-8 lg:mx-auto lg:px-24 my-[64px] max-w-[1440px] bg-background transition-all ease-in-out duration-300">
        <div className="flex flex-col gap-10 text-center">
          <div className="grid h-full grid-cols-12 gap-6 lg:h-4/5">
            <div className="flex flex-col col-span-12 lg:col-span-5 justify-center text-left items-start gap-4">
              <h2 className="text-h2 text-primary">Tuyển dụng</h2>
              <d1 className="text-d2 font-[700] sm:text-black sm:text-d1">
                Bạn đang tìm vị trí ở Bug Ổn?
              </d1>
              <p className="text-black text-bodylg">
                Ở ngôi nhà Bug Ổn chúng tôi luôn có vị trí cho bạn. Hãy tham gia
                ngay. Các vị trí Bug Ổn đang tuyển dụng nằm ở phía dưới.{' '}
              </p>
            </div>
            <div className="lg:col-span-1"></div>
            <div className="relative mx-0 lg:mx-0 bg-secondary-cont col-span-12 lg:col-span-6  rounded-[24px] h-[500px]">
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
          <div className="my-24">
            <Divider />
          </div>
          {/* articleblock 1 */}
          <div className="box-border flex flex-col gap-[16px] bg-primary-cont text-on-primary-cont px-16 py-12 rounded-[32px] lg:mx-32 border-[2px] border-primary-cont hover:border-outline-var ease-in transition-all">
            <h2 className="text-h2">TẦM NHÌN</h2>
            <p className="text-bodylg ">
              Trở thành hệ thống cửa hàng cà phê sáng tạo và khác biệt nhất.
            </p>
          </div>
          {/* articleblock 2 */}
          <div className="box-border flex flex-col gap-[16px] bg-secondary-cont text-on-secondary-cont px-16 py-12 rounded-[32px] lg:mx-32 border-[2px] border-secondary-cont hover:border-outline-var ease-in transition-all">
            <h2 className="text-h2">Giá trị cốt lõi</h2>
            <p className="text-bodylg ">
              Thành thật và ấm áp. Sáng tạo và khác biệt. Tiêu chuẩn cao và tỉ
              mỉ trong mọi chi tiết. Theo đuổi mục tiêu và lý tưởng chung.
            </p>
          </div>
          {/* articleblock 3 */}
          <div className="box-border flex flex-col gap-[16px] bg-tertiary-cont text-on-tertiary-cont px-16 py-12 rounded-[32px] lg:mx-32 border-[2px] border-tertiary-cont hover:border-outline-var ease-in transition-all">
            <h2 className="text-h2">Là thành viên của Bug ổn</h2>
            <p className="text-bodylg ">
              Bug Ổn hiện có hơn 60 cửa hàng trải dọc khắp Việt Nam và trên thế
              giới. Với mong muốn khơi dậy trí tưởng tượng và mang đến một trải
              nghiệm cảm xúc khác biệt về Việt-nam, Bug Ổn đã và đang trở thành
              hệ thống cửa hàng cà phê sáng tạo và khác biệt nhất dành cho mọi
              lứa tuổi!
            </p>
          </div>
          <div className="my-12">
            <Divider />
          </div>
          {/* Vi tri tuyen dung */}
          <div className="box-border bg-s3 flex flex-col gap-[16px] px-16 py-12 rounded-[32px] lg:mx-32">
            <h2 className="text-center text-d2 text-on-surface">
              Các vị trí hiện tại
            </h2>
            <div className="flex flex-col items-start p-6 rounded-[16px] bg-secondary-cont text-on-secondary-cont border-outline-var border-[2px] hover:bg-tertiary-cont hover:text-on-tertiary-cont transition-all ease-out">
              <p className="text-h2">Quản lí cửa hàng</p>
              <div className="flex items-start gap-2 p-2 text-left text-l2">
                <span class="material-symbols-outlined">schedule</span>Full-time
              </div>
              <div className="flex items-start gap-2 p-2 text-left text-l2">
                <span class="material-symbols-outlined">location_on</span>134 -
                136 Điện Biên Phủ, Quận Bình Thạnh, TP. Hồ Chí Minh
              </div>
            </div>
            <div className="flex flex-col items-start p-6 rounded-[16px] bg-secondary-cont text-on-secondary-cont border-outline-var border-[2px] hover:bg-tertiary-cont hover:text-on-tertiary-cont transition-all ease-out">
              <p className="text-h2">Nhân viên bán hàng</p>
              <div className="flex items-start gap-2 p-2 text-left text-l2">
                <span class="material-symbols-outlined">schedule</span>Part-time
              </div>
              <div className="flex items-start gap-2 p-2 text-left text-l2">
                <span class="material-symbols-outlined">location_on</span>134 -
                136 Điện Biên Phủ, Quận Bình Thạnh, TP. Hồ Chí Minh
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Career

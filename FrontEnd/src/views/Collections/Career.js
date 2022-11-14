import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import barista from '../../assets/images/barista.png'
import Button from '../../components/Button/Button'

const Career = () => {
  return (
    <div className="relative min-h-screen pb-24 bg-background lg:pb-12 font-googleSansRegular">
      <Header />
      <div className="mx-[32px] my-[64px] bg-background lg:mx-40">
        <div className="flex flex-col gap-10 text-center">
          <div className="flex flex-col gap-12 lg:flex-row">
            <div className="flex flex-col gap-6">
              <h1 className="text-primary text-d1 lg:text-left">Tuyển dụng</h1>
              <p className="text-black text-t1 lg:text-left">
                Ngôi nhà Bug Ổn luôn có chỗ cho bạn
              </p>
            </div>
            <div className="items-end">
              <img
                className="h-auto px-16 border-none md:px-32 lg:px-40 sm:w-screen"
                src={barista}
                alt=""
              />
            </div>
          </div>

          {/* articleblock 1 */}
          <div className="box-border flex flex-col gap-[16px] bg-primary-cont text-on-primary-cont px-16 py-12 rounded-[32px] lg:mx-32 border-[2px] border-primary-cont hover:border-outline-var ease-in transition-all">
            <h2 className="text-h1">TẦM NHÌN</h2>
            <p className="text-h2 ">
              Trở thành hệ thống cửa hàng cà phê sáng tạo và khác biệt nhất.
            </p>
          </div>
          {/* articleblock 2 */}
          <div className="box-border flex flex-col gap-[16px] bg-secondary-cont text-on-secondary-cont px-16 py-12 rounded-[32px] lg:mx-32 border-[2px] border-secondary-cont hover:border-outline-var ease-in transition-all">
            <h2 className="text-h1">Giá trị cốt lõi</h2>
            <p className="text-h2 ">
              Thành thật và ấm áp. Sáng tạo và khác biệt. Tiêu chuẩn cao và tỉ
              mỉ trong mọi chi tiết. Theo đuổi mục tiêu và lý tưởng chung.
            </p>
          </div>
          {/* articleblock 3 */}
          <div className="box-border flex flex-col gap-[16px] bg-tertiary-cont text-on-tertiary-cont px-16 py-12 rounded-[32px] lg:mx-32 border-[2px] border-tertiary-cont hover:border-outline-var ease-in transition-all">
            <h2 className="text-h1">Là thành viên của Bug ổn</h2>
            <p className="text-h2 ">
              Bug Ổn hiện có hơn 60 cửa hàng trải dọc khắp Việt Nam và trên thế
              giới. Với mong muốn khơi dậy trí tưởng tượng và mang đến một trải
              nghiệm cảm xúc khác biệt về Việt-nam, Bug Ổn đã và đang trở thành
              hệ thống cửa hàng cà phê sáng tạo và khác biệt nhất dành cho mọi
              lứa tuổi!
            </p>
          </div>
          {/* Vi tri tuyen dung */}
          <div className="box-border bg-s3 flex flex-col gap-[16px] px-16 py-12 rounded-[32px] lg:mx-32">
            <h2 className="text-center text-h1 text-on-surface">
              Các vị trí hiện tại
            </h2>
            <div className="flex flex-col items-start p-6 rounded-[16px] bg-secondary-cont text-on-secondary-cont border-outline-var border-[2px] hover:bg-secondary hover:text-white transition-all ease-out">
              <p className="text-h2">Quản lí cửa hàng</p>
              <div className="flex items-start gap-2 p-2 text-left text-l2">
                <span class="material-symbols-outlined">schedule</span>Full-time
              </div>
              <div className="flex items-start gap-2 p-2 text-left text-l2">
                <span class="material-symbols-outlined">location_on</span>134 -
                136 Điện Biên Phủ, Quận Bình Thạnh, TP. Hồ Chí Minh
              </div>
            </div>
            <div className="flex flex-col items-start p-6 rounded-[16px] bg-secondary-cont text-on-secondary-cont border-outline-var border-[2px] hover:bg-secondary hover:text-white transition-all ease-out">
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

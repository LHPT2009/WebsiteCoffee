import React from 'react'

const Introduce = () => {
  return (
    <section className="pt-12 px-0 pb-11 font-normal">
      {/* block right */}
      <div className="mb-2">
        {/* container */}
        <div className="mx-[-15px] sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px]">
          {/* flex */}
          <div className="justify-between items-center flex-wrap flex">
            {/* info block */}
            <div className="order-2 w-[49%] flex-grow-0 flex-shrink-0 basis-[49%]">
              <div className="mb-3">
                <img
                  className="border-none max-w-full h-auto"
                  src="https://file.hstatic.net/1000075078/file/cloudtea_tagline_1_c39d8fd0d46b4144be9cebd05e318796.png"
                  alt="img-title"
                />
              </div>
              {/* description */}
              <div className="text-base text-black mb-4">
                Vừa êm mượt dịu dàng, vừa bùng nổ nồng nàn, BST Trà Sữa CloudTea
                Hương Vị Nụ Hôn Đầu mang đến trải nghiệm đầy mới mẻ. Chạm môi là
                foam béo mịn bồng bềnh, càng thêm đậm đà nhờ topping vụn bánh
                quy phô mai hoặc bột ca cao thơm lừng. Kế tiếp là tầng trà sữa
                sóng sánh, đậm hương, rõ vị. Và tầng thạch nguyên chất, dai giòn
                giúp giữ trọn vị trà sữa đến ngụm cuối cùng. 3 tầng hòa quyện,
                nhấp một ngụm là ghiền, nhớ mãi không thôi.
              </div>
              <a
                className="block max-w-[282px] bg-primary text-center text-[16px] leading-10 px-4 py-0 font-semibold rounded-full text-white items-center hover:text-white active:rounded-xl hover:rounded-xl transition-all"
                href="https://order.thecoffeehouse.com/Cloud-tea"
                target="_blank"
              >
                <span>Thử ngay</span>
              </a>
            </div>
            {/* img block */}
            <div className="flex-grow-0 flex-shrink-0 basis-[49%]">
              <img
                src="https://file.hstatic.net/1000075078/file/cloudtea_1_5dc49fd17ba04030993d2f797dc570f2.png"
                alt="img-block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduce

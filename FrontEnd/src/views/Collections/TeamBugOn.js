import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Divider from '../../components/Divider'
import { useNavigate } from 'react-router-dom'

const TeamBugOn = () => {
  useEffect(() => {
    document.title = 'Team - Coffee Bug Ổn'
  }, [])

  return (
    <div className="relative min-h-screen pb-24 bg-background lg:pb-12">
      <Header />
      <div className="mx-8 my-[64px] bg-background lg:mx-40">
        <div className="flex flex-col gap-10 text-center">
          <div className="flex flex-col col-span-12 lg:col-span-5 justify-center text-left items-start gap-[24px]">
            <h2 className="text-h2 text-primary">Đồ Án Chuyên Ngành</h2>
            <d1 className="text-black text-d1">
              Những người bạn tạo nên Bug Ổn
            </d1>
            <p className="text-black text-body">
              Đến từ những vùng đất khác nhau, chúng ta mất nhiều thời gian để
              cùng nhau học tập và làm việc. Qua những thời gian như vậy, mang
              lại nhiều sự gắn kết và chúng ta càng hiểu nhau hơn. Chúng ta có
              ước mơ của mỗi cá nhân nhưng vẫn có thể gắn ghép nó lại cùng với
              nhau thành 1 ước mơ to hơn nữa. Đó là <b>Coffee Bug Ổn</b>.
            </p>
          </div>
          <div className="my-6">
            <Divider />
          </div>
          <d1 className="text-black text-h1">Họ là những ai?</d1>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <>
              <div className="flex flex-col relative self-auto h-full rounded-[24px] bg-s1 text-on-surface bg-no-repeat overflow-hidden hover:bg-secondary-cont hover:text-on-secondary-cont active:rounded-[40px] transition-all ease-in active:ease-in duration-150">
                <img
                  className="flex relative items-center self-stretch justify-center rounded-[16px] z-[1] bg-cover bg-no-repeat overflow-hidden transition-all"
                  src="https://i.imgur.com/NaVSn9j.jpg"
                  alt="image-founder"
                />
                <div className="flex flex-col items-start gap-[8px] self-stretch px-6 py-4">
                  <span className="text-l2 font-[700] sm:text-l1 text-left truncate">
                    Nguyễn Trường Tồn
                  </span>
                  <span className="text-caption font-[700] text-left truncate">
                    Frontend Developer
                  </span>
                  <span className="text-caption font-[500]">Lớp 19DTHD4</span>
                </div>
              </div>
            </>
            <>
              <div className="flex flex-col relative self-auto h-full rounded-[24px] bg-s1 text-on-surface bg-no-repeat overflow-hidden hover:bg-secondary-cont hover:text-on-secondary-cont active:rounded-[40px] transition-all ease-in active:ease-in duration-150">
                <img
                  className="flex relative items-center self-stretch justify-center rounded-[16px] z-[1] bg-cover bg-no-repeat overflow-hidden transition-all"
                  src="https://i.imgur.com/o7wOQHU.jpg"
                  alt="image-founder"
                />
                <div className="flex flex-col items-start gap-[8px] self-stretch px-6 py-4">
                  <span className="text-l2 font-[700] sm:text-l1 text-left truncate">
                    Nguyễn Việt Hoàng
                  </span>
                  <span className="text-caption font-[700] text-left truncate">
                    Frontend Developer
                  </span>
                  <span className="text-caption font-[500]">Lớp 19DTHA6</span>
                </div>
              </div>
            </>
            <>
              <div className="flex flex-col relative self-auto h-full rounded-[24px] bg-s1 text-on-surface bg-no-repeat overflow-hidden hover:bg-secondary-cont hover:text-on-secondary-cont active:rounded-[40px] transition-all ease-in active:ease-in duration-150">
                <img
                  className="flex relative items-center self-stretch justify-center rounded-[16px] z-[1] bg-cover bg-no-repeat overflow-hidden transition-all"
                  src="https://i.imgur.com/rupSvV8.jpg"
                  alt="image-founder"
                />
                <div className="flex flex-col items-start gap-[8px] self-stretch px-6 py-4">
                  <span className="text-l2 font-[700] sm:text-l1 text-left truncate">
                    Lê Huỳnh Phương Tùng
                  </span>
                  <span className="text-caption font-[700] text-left truncate">
                    Backend Developer
                  </span>
                  <span className="text-caption font-[500]">Lớp 19DTHD4</span>
                </div>
              </div>
            </>
            <>
              <div className="flex flex-col relative self-auto h-full rounded-[24px] bg-s1 text-on-surface bg-no-repeat overflow-hidden hover:bg-secondary-cont hover:text-on-secondary-cont active:rounded-[40px] transition-all ease-in active:ease-in duration-150">
                <img
                  className="flex relative items-center self-stretch justify-center rounded-[16px] z-[1] bg-cover bg-no-repeat overflow-hidden transition-all"
                  src="https://i.imgur.com/oi5rySj.png"
                  alt="image-founder"
                />
                <div className="flex flex-col items-start gap-[8px] self-stretch px-6 py-4">
                  <span className="text-l2 font-[700] sm:text-l1 text-left truncate">
                    Nguyễn Diệp Thanh Tùng
                  </span>
                  <span className="text-caption font-[700] text-left truncate">
                    Frontend Developer
                  </span>
                  <span className="text-caption font-[500]">Lớp 19DTHD4</span>
                </div>
              </div>
            </>
          </div>
          <d1 className="text-black text-h1">
            Một mình khó có thể hiện thực ước mơ
          </d1>
          <p className="text-left text-black text-body">
            Mỗi người điều mang cho mình một ước mơ, điểm mạnh riêng của bản
            thân. Họ tìm thấy điểm chung, có 1 ước mơ chung và cùng nhau bắt tay
            hỗ trợ lẫn nhau để hiện thực nó.
          </p>
          <p className="text-left text-black text-body">
            Frontend chiếm tới 3/4 thành viên. Tồn, T. Tùng, Hoàng là những
            thành viên điều thích vẻ đẹp hoàn mỹ và chỉnh chu. Họ thích sự sáng
            tạo trong thiết kế, cách bố trí, sắp xếp bố cục từ trong cuộc sống
            và cả vào phần mềm. Mang đến sự đẹp mắt và trải nghiệm tốt về UI/UX
            là những ước mơ của 3 người.
          </p>
          <p className="text-left text-black text-body">
            Backend chỉ có 1 thành viên là P. Tùng. Một người luôn muốn thử
            thách bản thân mình vào những điều mới mẻ của công nghệ. P. Tùng tìm
            hiểu rất nhiều về những ngôn ngữ, framework,... cũng như các khái
            niệm trong công nghệ phần mềm phát triển nhanh chóng hiện tại. Khả
            năng suy nghĩ về một vấn đề, xử lý vấn đề theo nhiều hướng là điểm
            mạnh nhất. Dù đang học IT như vậy nhưng ước mơ lớn nhất của P. Tùng
            là ca hát.
          </p>
          <d1 className="text-black text-h1">
            Chúng tôi làm việc cùng nhau như thế nào?
          </d1>
          <p className="text-left text-black text-body">
            Giai đoạn đầu gặp rất nhiều khó khăn trong việc lựa chọn công nghệ
            làm web, các công cụ hỗ trợ quản lý code, quản lý task,... Chúng tôi
            cũng gặp không ít khó khăn trong việc phân tích nghiệp vụ và mô hình
            hóa cơ sở dữ liệu.
          </p>
          <p className="text-left text-black text-body">
            Trong giai đoạn tiếp theo, từ những phân tích ở giai đoạn đầu, chúng
            tôi bắt tay vào thiết kế các chức năng cũng như UI cho website.
            Chúng tôi đã áp dụng nhiều cách thực hiện và công cụ khác nhau trong
            suốt quá trình này.
          </p>
          <p className="text-left text-black text-body">
            Giai đoạn viết code cho trang web có lẽ là giai đoạn khó nhất. Việc
            chưa hiểu ý nhau dẫn đến gặp nhiều lỗi trong quá trình này. Nhưng
            sau khi hoàn thành, chúng tôi tự nhận thấy khả năng học hỏi và hiểu
            được công nghệ đã hơn so với trước.
          </p>
          <p className="text-left text-black text-body">
            Trải qua những khó khăn thì phiên bản đầu tiên đã hoàn tất. Và chúng
            ta đang thấy và sử dụng nó tại đây.
          </p>
          <div className="text-right">
            <p className="mb-2 text-l1">Cảm ơn vì tất cả</p>
            <p className="mb-1">Nguyễn Việt Hoàng</p>
            <p className="mb-1">Nguyễn Trường Tồn</p>
            <p className="mb-1">Lê Huỳnh Phương Tùng</p>
            <p className="mb-1">Nguyễn Diệp Thanh Tùng</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TeamBugOn
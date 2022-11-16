import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const PaymentSuccess = () => {
  return (
    <div className="relative min-h-screen pb-24 lg:pb-12">
      <Header />
      <div className="mt-10 mx-[-15px] sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px]">
        <div className="text-center text-[100px] font-bold">THÀNH CÔNG</div>
      </div>
      <Footer />
    </div>
  )
}

export default PaymentSuccess

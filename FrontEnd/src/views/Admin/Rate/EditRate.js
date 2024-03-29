import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../../../components/Button/Button'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import TextInput from '../../../components/Input/TextInput'
import Topnav from '../../../components/Admin/topnav/TopNav'
import Swal from 'sweetalert2'

const EditRate = () => {
    const [rate, setRate] = useState([])

    const { id } = useParams()
    const [receiptid, setReceiptId] = useState(rate.receiptid)
    const [productid, setProductId] = useState(rate.productid)
    const [userid, setUserId] = useState(rate.usertid)
    const [point, setPoint] = useState(rate.point)
    const [content, setContent] = useState(rate.content)
    const [status, setStatus] = useState(rate.status)
    const [statusrate, setStatusRate] = useState(rate.statusrate)

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/rate/one/${id}`).then((res) => {
            setRate(res.data)
            setStatus(res.data.status)
        })
    }, [])

    const editRate = async (e) => {
        e.preventDefault()
        const edit = await axios.put(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/rate/${id}`, {
            receiptid,
            productid,
            userid,
            point,
            content,
            status,
            statusrate,
        })
        if (edit) {
            Toast.fire({
                icon: 'success',
                title: 'Chỉnh sửa thành công!'
            })
            navigate('/admin/rate')
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Chỉnh sửa thất bại!',
                text: 'Vui lòng thử lại.',
                confirmButtonColor: '#3d685e'
            })
        }
    }
    return (
        <div>
            <Topnav />
            <form onSubmit={editRate}>
                <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
                    <b>Chỉnh sửa đánh giá người dùng</b>
                </h2>
                <div>
                    <div className="inline-block w-[200px] mr-3">Mã hóa đơn</div>
                    <TextInput
                        placeholder={'Mã hóa đơn'}
                        type="text"
                        required={'required'}
                        onChange={(e) => setReceiptId(e.target.value)}
                        defaultValue={rate.receiptid}
                        className="inline-block w-[400px]"
                    />
                    <br />
                    <div className="inline-block w-[200px] mr-3">Mã sản phẩm</div>
                    <TextInput
                        placeholder={'Mã sản phẩm'}
                        type="text"
                        required={'required'}
                        onChange={(e) => setProductId(e.target.value)}
                        defaultValue={rate.productid}
                        className="inline-block w-[400px]"
                    />
                    <br />
                    <div className="inline-block w-[200px] mr-3">Mã người dùng</div>
                    <TextInput
                        placeholder={'Mã người dùng'}
                        type="text"
                        required={'required'}
                        onChange={(e) => setUserId(e.target.value)}
                        defaultValue={rate.userid}
                        className="inline-block w-[400px]"
                    />
                    <br />
                    <div className="inline-block w-[200px] mr-3">Điểm đánh giá</div>
                    <TextInput
                        placeholder={'Điểm đánh giá'}
                        type="text"
                        required={'required'}
                        onChange={(e) => setPoint(e.target.value)}
                        defaultValue={rate.point}
                        className="inline-block w-[400px]"
                        disabled={true}
                    />
                    <br />
                    <div className="inline-block w-[200px] mr-3">Nội dung</div>
                    <TextInput
                        placeholder={'Nội dung'}
                        type="text"
                        required={'required'}
                        onChange={(e) => setContent(e.target.value)}
                        defaultValue={rate.content}
                        className="inline-block w-[400px]"
                    />
                    <br />
                    <div className="inline-block w-[200px] mr-3">Trạng thái</div>
                    <select
                        className="border-outline-var w-[400px] border-[2px] border-solid rounded-full text-l2 mb-[16px] pt-[13px] px-[16px] pb-[13px] hover:border-primary hover:rounded-[32px] focus:border-primary focus:rounded-[16px] focus:text-on-primary-cont focus:bg-primary-cont transition-all ease-in duration-100"
                        onChange={(e) => setStatus(e.target.value)}
                        value={status}
                    >
                        <option value="true">Hiện thị đánh giá</option>
                        <option value="false">Ẩn đánh giá</option>
                    </select>
                </div>
                <div className="flex gap-3 mt-5">
                    <Button
                        type="button"
                        icon="edit"
                        onClick={editRate}
                        className="hover:text-white"
                    >
                        Sửa
                    </Button>
                    <Button
                        type="button"
                        icon="navigate_before"
                        onClick={() => navigate('../rate')}
                    >
                        Quay về
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default EditRate

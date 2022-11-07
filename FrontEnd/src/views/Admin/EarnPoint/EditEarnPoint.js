import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

const EditEarnPoint = () => {
    const { id } = useParams();
    const [earnPoints, setEarnPoints] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/earnpoints/${id}`).then((res) => setEarnPoints(res.data));
    }, []);
    return (
        <div>
            <h2 className="page-header">
                <b>Chỉnh sửa tích điểm</b>
            </h2>
            <div>
                <h1>Mã người dùng</h1>
                <input type={"text"} placeholder={"Mã người dùng"} defaultValue={earnPoints.userid} /> <br />
                <h1>Điểm tích lũy</h1>
                <input type={"text"} placeholder={"Điểm tích lũy"} defaultValue={earnPoints.point} /> <br />
                <h1>Ngày bắt đầu</h1>
                <input type={"date"} placeholder={"Ngày bắt đầu"} defaultValue={earnPoints.startdate} /> <br />
                <h1>Ngày kết thúc</h1>
                <input type={"date"} placeholder={"Ngày kết thúc"} defaultValue={earnPoints.finaldate} /> <br />
            </div>
            <div>
                <Button type="button" btnCSS={'h-[44px] mr-2'} icon="edit">
                    <a>
                        Sửa
                    </a>
                </Button>
                <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
                    <a href="./EarnPoints">
                        Quay về
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default EditEarnPoint

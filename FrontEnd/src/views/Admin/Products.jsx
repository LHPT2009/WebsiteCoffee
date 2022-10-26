import React from 'react'

import Table from '../../components/Admin/table/Table'

import productList from '../../assets/JsonData/products-list.json'

const productTableHead = [
    '',
    'name',
    'amount',
    'price'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.amount}</td>
        <td>{item.price}</td>
    </tr>
)

const Products = () => {
    return (
        <div>
            <h2 className="page-header">
                Sản phẩm
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={productTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={productList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products

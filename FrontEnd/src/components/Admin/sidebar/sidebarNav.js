const sidebarNav = [
    {
        link: '/admin',
        section: 'home',
        icon: <i className='bx bx-home-alt'></i>,
        text: 'Trang chủ'
    },
    {
        link: '/admin/receipts',
        section: 'receipts',
        icon: <i className='bx bx-receipt' ></i>,
        text: 'Đơn hàng',
        iconClosed: <i className='bx bx-down-arrow'></i>,
        iconOpened: <i className='bx bx-up-arrow'></i>,
    },
    {
        link: '/admin/products',
        section: 'products',
        icon: <i className='bx bx-cube'></i>,
        text: 'Sản phẩm',
        iconClosed: <i className='bx bx-down-arrow'></i>,
        iconOpened: <i className='bx bx-up-arrow'></i>,

        subNav: [
            {
                link: '/admin/productcategories',
                section: 'productcategories',
                icon: <i className='bx bx-cube'></i>,
                text: 'Loại sản phẩm'
            },
            {
                link: '/admin/sizeproducts',
                section: 'sizeproducts',
                icon: <i className='bx bx-test-tube'></i>,
                text: 'Kích cỡ',
            },
        ]
    },
    {
        link: '/admin/users',
        section: 'users',
        icon: <i className='bx bx-user'></i>,
        text: 'Tài khoản',
        iconClosed: <i className='bx bx-down-arrow'></i>,
        iconOpened: <i className='bx bx-up-arrow'></i>,

        subNav: [
            {
                link: '/admin/roles',
                section: 'roles',
                icon: <i className='bx bx-user'></i>,
                text: 'Quyền'
            },
        ]
    },
    {
        link: '/admin/rate',
        section: 'receipts',
        icon: <i className='bx bx-receipt' ></i>,
        text: 'Đánh giá',
    },
    {
        link: '/admin/discount',
        section: 'receipts',
        icon: <i className='bx bx-receipt' ></i>,
        text: 'Giảm Giá',
    },
]

export default sidebarNav
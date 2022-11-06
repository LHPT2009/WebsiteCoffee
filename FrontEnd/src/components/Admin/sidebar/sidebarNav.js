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
                text: 'Kích cỡ'
            },
            {
                link: '/admin/recipes',
                section: 'recipes',
                icon: <i className='bx bxs-food-menu'></i>,
                text: 'Công thức'
            }
        ]
    },
    {
        link: '/admin/ingredients',
        section: 'ingredients',
        icon: <i className='bx bxs-vial' ></i>,
        text: 'Nguyên liệu',
        iconClosed: <i className='bx bx-down-arrow'></i>,
        iconOpened: <i className='bx bx-up-arrow'></i>,

        subNav: [
            {
                link: '/admin/receiptingredients',
                section: 'receiptingredients',
                icon: <i className='bx bx-receipt'></i>,
                text: 'Phiếu nhập'
            },
        ]
    },
    {
        link: '/admin/earnpoints',
        section: 'earnpoints',
        icon: <i className='bx bx-gift' ></i>,
        text: 'Tích điểm'
    },
    {
        link: '/admin/suppliers',
        section: 'suppliers',
        icon: <i className='bx bxs-truck' ></i>,
        text: 'Nhà cung cấp'
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
                text: 'Loại tài khoản'
            },
        ]
    },
    {
        link: '/admin/staffs',
        section: 'staffs',
        icon: <i className='bx bxs-user-badge'></i>,
        text: 'Nhân viên',
        iconClosed: <i className='bx bx-down-arrow'></i>,
        iconOpened: <i className='bx bx-up-arrow'></i>,

        subNav: [
            {
                link: '/admin/positions',
                section: 'positions',
                icon: <i className='bx bxs-badge-check'></i>,
                text: 'Chức vụ'
            },
        ]
    },
    {
        link: '/admin/stats',
        section: 'stats',
        icon: <i className='bx bx-line-chart'></i>,
        text: 'Thống kê'
    }
]

export default sidebarNav
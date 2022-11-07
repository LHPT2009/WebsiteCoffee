const sidebarNav = [
  {
    link: '/admin',
    section: 'home',
    icon: <span className="material-symbols-rounded">dashboard</span>,
    text: 'Trang chủ',
  },
  {
    link: '/admin/receipts',
    section: 'receipts',
    icon: <span className="material-symbols-rounded">list_alt</span>,
    text: 'Đơn hàng',
    iconClosed: <span className="material-symbols-rounded">expand_more</span>,
    iconOpened: <span className="material-symbols-rounded">expand_less</span>,
  },
  {
    link: '/admin/products',
    section: 'products',
    icon: <span className="material-symbols-rounded">inventory_2</span>,
    text: 'Sản phẩm',
    iconClosed: <span className="material-symbols-rounded">expand_more</span>,
    iconOpened: <span className="material-symbols-rounded">expand_less</span>,

    subNav: [
      {
        link: '/admin/productcategories',
        section: 'productcategories',
        icon: '',
        text: 'Loại sản phẩm',
      },
      {
        link: '/admin/sizeproducts',
        section: 'sizeproducts',
        icon: '',
        text: 'Kích cỡ',
      },
    ],
  },
  {
    link: '/admin/users',
    section: 'users',
    icon: <span className="material-symbols-rounded">account_box</span>,
    text: 'Tài khoản',
    iconClosed: <span className="material-symbols-rounded">expand_more</span>,
    iconOpened: <span className="material-symbols-rounded">expand_less</span>,

    subNav: [
      {
        link: '/admin/roles',
        section: 'roles',
        icon: '',
        text: 'Quyền',
      },
    ],
  },
  {
    link: '/admin/rate',
    section: 'receipts',
    icon: <span className="material-symbols-rounded">thumbs_up_down</span>,
    text: 'Đánh giá',
  },
  {
    link: '/admin/discount',
    section: 'receipts',
    icon: <span className="material-symbols-rounded">percent</span>,
    text: 'Giảm Giá',
  },
]

export default sidebarNav

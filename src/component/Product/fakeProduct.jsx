const fakeProducts = [
  {
    id: 1,
    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lognmhcbb0be81",
    discount: "10%",  //Giảm giá của sản phẩm
    show_free_shipping: true, //cho biết liệu sản phẩm có miễn phí vận chuyển
    coin_info: null,  //Thông tin về xu (coin) liên quan đến sản phẩm (nếu có).
    show_official_shop_label_in_title: false, //Biến boolean cho biết liệu sản phẩm có nhãn "Mall" hoặc "Tài trợ" trong tiêu đề không.
    name: "Sản phẩm 1",
    raw_discount: 10, //Giảm giá (discount) trong dạng số.
    price: 500000,  //Giá của sản phẩm.
    historical_sold: 5000,  //Số lượng sản phẩm đã bán
    liked_count: 15000, // Số lượt thích của sản phẩm
    show_official_shop_label: false // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltd90tloym556e",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/cn-11134301-7qukw-lk7scdx4aljx76",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  // =====================================
  {
    id: 1,
    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lognmhcbb0be81",
    discount: "10%",  //Giảm giá của sản phẩm
    show_free_shipping: true, //cho biết liệu sản phẩm có miễn phí vận chuyển
    coin_info: null,  //Thông tin về xu (coin) liên quan đến sản phẩm (nếu có).
    show_official_shop_label_in_title: false, //Biến boolean cho biết liệu sản phẩm có nhãn "Mall" hoặc "Tài trợ" trong tiêu đề không.
    name: "Sản phẩm 1",
    raw_discount: 10, //Giảm giá (discount) trong dạng số.
    price: 500000,  //Giá của sản phẩm.
    historical_sold: 5000,  //Số lượng sản phẩm đã bán
    liked_count: 15000, // Số lượt thích của sản phẩm
    show_official_shop_label: false // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltd90tloym556e",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/cn-11134301-7qukw-lk7scdx4aljx76",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 1,
    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lognmhcbb0be81",
    discount: "10%",  //Giảm giá của sản phẩm
    show_free_shipping: true, //cho biết liệu sản phẩm có miễn phí vận chuyển
    coin_info: null,  //Thông tin về xu (coin) liên quan đến sản phẩm (nếu có).
    show_official_shop_label_in_title: false, //Biến boolean cho biết liệu sản phẩm có nhãn "Mall" hoặc "Tài trợ" trong tiêu đề không.
    name: "Sản phẩm 1",
    raw_discount: 10, //Giảm giá (discount) trong dạng số.
    price: 500000,  //Giá của sản phẩm.
    historical_sold: 5000,  //Số lượng sản phẩm đã bán
    liked_count: 15000, // Số lượt thích của sản phẩm
    show_official_shop_label: false // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltd90tloym556e",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/cn-11134301-7qukw-lk7scdx4aljx76",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 1,
    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lognmhcbb0be81",
    discount: "10%",  //Giảm giá của sản phẩm
    show_free_shipping: true, //cho biết liệu sản phẩm có miễn phí vận chuyển
    coin_info: null,  //Thông tin về xu (coin) liên quan đến sản phẩm (nếu có).
    show_official_shop_label_in_title: false, //Biến boolean cho biết liệu sản phẩm có nhãn "Mall" hoặc "Tài trợ" trong tiêu đề không.
    name: "Sản phẩm 1",
    raw_discount: 10, //Giảm giá (discount) trong dạng số.
    price: 500000,  //Giá của sản phẩm.
    historical_sold: 5000,  //Số lượng sản phẩm đã bán
    liked_count: 15000, // Số lượt thích của sản phẩm
    show_official_shop_label: false // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltd90tloym556e",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/cn-11134301-7qukw-lk7scdx4aljx76",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 1,
    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lognmhcbb0be81",
    discount: "10%",  //Giảm giá của sản phẩm
    show_free_shipping: true, //cho biết liệu sản phẩm có miễn phí vận chuyển
    coin_info: null,  //Thông tin về xu (coin) liên quan đến sản phẩm (nếu có).
    show_official_shop_label_in_title: false, //Biến boolean cho biết liệu sản phẩm có nhãn "Mall" hoặc "Tài trợ" trong tiêu đề không.
    name: "Sản phẩm 1",
    raw_discount: 10, //Giảm giá (discount) trong dạng số.
    price: 500000,  //Giá của sản phẩm.
    historical_sold: 5000,  //Số lượng sản phẩm đã bán
    liked_count: 15000, // Số lượt thích của sản phẩm
    show_official_shop_label: false // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltd90tloym556e",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/cn-11134301-7qukw-lk7scdx4aljx76",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 1,
    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lognmhcbb0be81",
    discount: "10%",  //Giảm giá của sản phẩm
    show_free_shipping: true, //cho biết liệu sản phẩm có miễn phí vận chuyển
    coin_info: null,  //Thông tin về xu (coin) liên quan đến sản phẩm (nếu có).
    show_official_shop_label_in_title: false, //Biến boolean cho biết liệu sản phẩm có nhãn "Mall" hoặc "Tài trợ" trong tiêu đề không.
    name: "Sản phẩm 1",
    raw_discount: 10, //Giảm giá (discount) trong dạng số.
    price: 500000,  //Giá của sản phẩm.
    historical_sold: 5000,  //Số lượng sản phẩm đã bán
    liked_count: 15000, // Số lượt thích của sản phẩm
    show_official_shop_label: false // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltd90tloym556e",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/cn-11134301-7qukw-lk7scdx4aljx76",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 1,
    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lognmhcbb0be81",
    discount: "10%",  //Giảm giá của sản phẩm
    show_free_shipping: true, //cho biết liệu sản phẩm có miễn phí vận chuyển
    coin_info: null,  //Thông tin về xu (coin) liên quan đến sản phẩm (nếu có).
    show_official_shop_label_in_title: false, //Biến boolean cho biết liệu sản phẩm có nhãn "Mall" hoặc "Tài trợ" trong tiêu đề không.
    name: "Sản phẩm 1",
    raw_discount: 10, //Giảm giá (discount) trong dạng số.
    price: 500000,  //Giá của sản phẩm.
    historical_sold: 5000,  //Số lượng sản phẩm đã bán
    liked_count: 15000, // Số lượt thích của sản phẩm
    show_official_shop_label: false // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltd90tloym556e",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/cn-11134301-7qukw-lk7scdx4aljx76",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 1,
    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lognmhcbb0be81",
    discount: "10%",  //Giảm giá của sản phẩm
    show_free_shipping: true, //cho biết liệu sản phẩm có miễn phí vận chuyển
    coin_info: null,  //Thông tin về xu (coin) liên quan đến sản phẩm (nếu có).
    show_official_shop_label_in_title: false, //Biến boolean cho biết liệu sản phẩm có nhãn "Mall" hoặc "Tài trợ" trong tiêu đề không.
    name: "Sản phẩm 1",
    raw_discount: 10, //Giảm giá (discount) trong dạng số.
    price: 500000,  //Giá của sản phẩm.
    historical_sold: 5000,  //Số lượng sản phẩm đã bán
    liked_count: 15000, // Số lượt thích của sản phẩm
    show_official_shop_label: false // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltd90tloym556e",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/cn-11134301-7qukw-lk7scdx4aljx76",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 1,
    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lognmhcbb0be81",
    discount: "10%",  //Giảm giá của sản phẩm
    show_free_shipping: true, //cho biết liệu sản phẩm có miễn phí vận chuyển
    coin_info: null,  //Thông tin về xu (coin) liên quan đến sản phẩm (nếu có).
    show_official_shop_label_in_title: false, //Biến boolean cho biết liệu sản phẩm có nhãn "Mall" hoặc "Tài trợ" trong tiêu đề không.
    name: "Sản phẩm 1",
    raw_discount: 10, //Giảm giá (discount) trong dạng số.
    price: 500000,  //Giá của sản phẩm.
    historical_sold: 5000,  //Số lượng sản phẩm đã bán
    liked_count: 15000, // Số lượt thích của sản phẩm
    show_official_shop_label: false // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltd90tloym556e",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/cn-11134301-7qukw-lk7scdx4aljx76",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 1,
    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lognmhcbb0be81",
    discount: "10%",  //Giảm giá của sản phẩm
    show_free_shipping: true, //cho biết liệu sản phẩm có miễn phí vận chuyển
    coin_info: null,  //Thông tin về xu (coin) liên quan đến sản phẩm (nếu có).
    show_official_shop_label_in_title: false, //Biến boolean cho biết liệu sản phẩm có nhãn "Mall" hoặc "Tài trợ" trong tiêu đề không.
    name: "Sản phẩm 1",
    raw_discount: 10, //Giảm giá (discount) trong dạng số.
    price: 500000,  //Giá của sản phẩm.
    historical_sold: 5000,  //Số lượng sản phẩm đã bán
    liked_count: 15000, // Số lượt thích của sản phẩm
    show_official_shop_label: false // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltd90tloym556e",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/cn-11134301-7qukw-lk7scdx4aljx76",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 1,
    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lognmhcbb0be81",
    discount: "10%",  //Giảm giá của sản phẩm
    show_free_shipping: true, //cho biết liệu sản phẩm có miễn phí vận chuyển
    coin_info: null,  //Thông tin về xu (coin) liên quan đến sản phẩm (nếu có).
    show_official_shop_label_in_title: false, //Biến boolean cho biết liệu sản phẩm có nhãn "Mall" hoặc "Tài trợ" trong tiêu đề không.
    name: "Sản phẩm 1",
    raw_discount: 10, //Giảm giá (discount) trong dạng số.
    price: 500000,  //Giá của sản phẩm.
    historical_sold: 5000,  //Số lượng sản phẩm đã bán
    liked_count: 15000, // Số lượt thích của sản phẩm
    show_official_shop_label: false // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltd90tloym556e",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/cn-11134301-7qukw-lk7scdx4aljx76",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 1,
    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lognmhcbb0be81",
    discount: "10%",  //Giảm giá của sản phẩm
    show_free_shipping: true, //cho biết liệu sản phẩm có miễn phí vận chuyển
    coin_info: null,  //Thông tin về xu (coin) liên quan đến sản phẩm (nếu có).
    show_official_shop_label_in_title: false, //Biến boolean cho biết liệu sản phẩm có nhãn "Mall" hoặc "Tài trợ" trong tiêu đề không.
    name: "Sản phẩm 1",
    raw_discount: 10, //Giảm giá (discount) trong dạng số.
    price: 500000,  //Giá của sản phẩm.
    historical_sold: 5000,  //Số lượng sản phẩm đã bán
    liked_count: 15000, // Số lượt thích của sản phẩm
    show_official_shop_label: false // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltd90tloym556e",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/cn-11134301-7qukw-lk7scdx4aljx76",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 1,
    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lognmhcbb0be81",
    discount: "10%",  //Giảm giá của sản phẩm
    show_free_shipping: true, //cho biết liệu sản phẩm có miễn phí vận chuyển
    coin_info: null,  //Thông tin về xu (coin) liên quan đến sản phẩm (nếu có).
    show_official_shop_label_in_title: false, //Biến boolean cho biết liệu sản phẩm có nhãn "Mall" hoặc "Tài trợ" trong tiêu đề không.
    name: "Sản phẩm 1",
    raw_discount: 10, //Giảm giá (discount) trong dạng số.
    price: 500000,  //Giá của sản phẩm.
    historical_sold: 5000,  //Số lượng sản phẩm đã bán
    liked_count: 15000, // Số lượt thích của sản phẩm
    show_official_shop_label: false // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltd90tloym556e",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/cn-11134301-7qukw-lk7scdx4aljx76",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 1,
    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lognmhcbb0be81",
    discount: "10%",  //Giảm giá của sản phẩm
    show_free_shipping: true, //cho biết liệu sản phẩm có miễn phí vận chuyển
    coin_info: null,  //Thông tin về xu (coin) liên quan đến sản phẩm (nếu có).
    show_official_shop_label_in_title: false, //Biến boolean cho biết liệu sản phẩm có nhãn "Mall" hoặc "Tài trợ" trong tiêu đề không.
    name: "Sản phẩm 1",
    raw_discount: 10, //Giảm giá (discount) trong dạng số.
    price: 500000,  //Giá của sản phẩm.
    historical_sold: 5000,  //Số lượng sản phẩm đã bán
    liked_count: 15000, // Số lượt thích của sản phẩm
    show_official_shop_label: false // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltd90tloym556e",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/cn-11134301-7qukw-lk7scdx4aljx76",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 1,
    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lognmhcbb0be81",
    discount: "10%",  //Giảm giá của sản phẩm
    show_free_shipping: true, //cho biết liệu sản phẩm có miễn phí vận chuyển
    coin_info: null,  //Thông tin về xu (coin) liên quan đến sản phẩm (nếu có).
    show_official_shop_label_in_title: false, //Biến boolean cho biết liệu sản phẩm có nhãn "Mall" hoặc "Tài trợ" trong tiêu đề không.
    name: "Sản phẩm 1",
    raw_discount: 10, //Giảm giá (discount) trong dạng số.
    price: 500000,  //Giá của sản phẩm.
    historical_sold: 5000,  //Số lượng sản phẩm đã bán
    liked_count: 15000, // Số lượt thích của sản phẩm
    show_official_shop_label: false // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltd90tloym556e",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/cn-11134301-7qukw-lk7scdx4aljx76",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 1,
    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lognmhcbb0be81",
    discount: "10%",  //Giảm giá của sản phẩm
    show_free_shipping: true, //cho biết liệu sản phẩm có miễn phí vận chuyển
    coin_info: null,  //Thông tin về xu (coin) liên quan đến sản phẩm (nếu có).
    show_official_shop_label_in_title: false, //Biến boolean cho biết liệu sản phẩm có nhãn "Mall" hoặc "Tài trợ" trong tiêu đề không.
    name: "Sản phẩm 1",
    raw_discount: 10, //Giảm giá (discount) trong dạng số.
    price: 500000,  //Giá của sản phẩm.
    historical_sold: 5000,  //Số lượng sản phẩm đã bán
    liked_count: 15000, // Số lượt thích của sản phẩm
    show_official_shop_label: false // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltd90tloym556e",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/cn-11134301-7qukw-lk7scdx4aljx76",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltd90tloym556e",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },
  {
    id: 2,
    image: "https://down-vn.img.susercontent.com/file/cn-11134301-7qukw-lk7scdx4aljx76",
    discount: "20%",
    show_free_shipping: false,
    coin_info: { coins: 100 },
    show_official_shop_label_in_title: true,
    name: "Sản phẩm 2",
    raw_discount: 20,
    price: 8000,
    historical_sold: 11000,
    liked_count: 20000, // Số lượt thích của sản phẩm
    show_official_shop_label: true // Hiển thị nhãn "Tài trợ" cho sản phẩm hay không
  },



];
export default fakeProducts;
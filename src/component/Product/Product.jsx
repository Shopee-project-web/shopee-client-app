import React,{useEffect,useState,memo} from 'react'
import "./product.scss"

function Product() {
  const [products, setProducts] = useState([])
  const [show,setShow] = useState(12)
  // const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getProduct = async () =>{
      // setIsLoading(true)
      try {
        const proxyurl = 'https://cors-anywhere.herokuapp.com/';
        const respond = await fetch(proxyurl + 'https://shopee.vn/api/v4/recommend/recommend?bundle=daily_discover_main&item_card=1&limit=112')
        const res = await respond.json()
        setProducts(res.data.sections)
        // setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
    return () => {
      getProduct({});
    };
  }, [])


  // console.log(products);

  const setCout = (cout) =>{
    setShow(cout => cout + 6)
  }

  // tab
  useEffect(() => {
    let tabs = document.querySelectorAll('.recommended-tab');
    let panes = document.querySelectorAll('.recommended-list');

    tabs.forEach((tab,index)=>{
      let t = tab;
      let pane = panes[index];
      t.onclick = function(){
        document.querySelector('.recommended-tab.active').classList.remove('active')
        document.querySelector('.recommended-list.active').classList.remove('active')
        t.classList.add('active')
        pane.classList.add('active')
      }
    })
  }, []);



  // if(isLoading){
  //     return (
  //         <div>Loading...</div>
  //     )
  // }

  return (
    <div className="recommended">
      <div className="container">
        <div className="recommended-container">
          <div className="recommended-head">
            <div className="recommended-tab active">
              <div className="recommended-heading">Gợi ý hôm nay</div>
              <div className="line"></div>
            </div>
            <div className="recommended-tab">
              <img src="https://cf.shopee.vn/file/42a28847b773ee5eccdbd931e44d6af7" alt="" />
              <div className="line"></div>
            </div>
          </div>
        </div>
        <ul className="recommended-list active">

          {
            products[0]?.data.item.slice(0,show).map(item =>(
              <li key={item.itemid} className="recommended-item">
                <a href=".#" className="recommended-item-link">
                  <img src={`https://cf.shopee.vn/file/${item.image}`} alt="" />

                  {
                    item.discount ?
                      <div className="recommended-item-label sale">
                        <span>{item.discount}</span>
                        <span>Giảm</span>
                      </div> : null
                  }

                  {
                    item.show_free_shipping  && item.liked_count > 10000?
                      <div className="recommended-item-ship-xu">
                        <img src="https://cf.shopee.vn/file/461691071df30827265cc48e9b5e76f3" alt="" />
                      </div> : null
                  }

                  {
                    item.show_free_shipping && item.coin_info === null ?
                      <div className="recommended-item-ship">
                        <img src="https://cf.shopee.vn/file/64cc6e5365663b97de6a51b303be7d35" alt="" />
                      </div> : null
                  }

                  {
                    item.liked_count > 10000 && !item.show_official_shop_label_in_title ?
                      <div className="recommended-item-wishlist">
                        Yêu thích
                      </div> : null
                  }

                  {
                    item.show_official_shop_label_in_title ?
                      <div className="recommended-item-mall">
                        Mall
                      </div> : null

                  }

                  {
                    item.show_official_shop_label_in_title || item.show_official_shop_label ?
                      <div className="recommended-item-sponsor">
                        Tài trợ
                      </div> : null
                  }
                  <div className="recommended-item-info">
                    <p className="recommended-item-name">
                      {item.name}
                    </p>
                    {
                      item.raw_discount === 50 ?
                        <div className="recommended-item-saleup">
                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16"><path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth="1" transform="" stroke="currentColor" fill="#f69113"></path></svg>
                          <div>50% giảm</div>
                          <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16"><path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth="1" transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113"></path></svg>
                        </div> : null
                    }
                    <div className="recommended-item-bottom">
                      <span className="recommended-item-price"><u>đ</u>{item.price/10000}</span>
                      <span className="recommended-item-sold">
                                            Đã bán {Math.ceil(item.historical_sold/1000).toFixed(1)}k
                                        </span>
                    </div>
                  </div>
                </a>
              </li>
            ))
          }
        </ul>

        <ul className="recommended-list">
          {
            products[0]?.data.item.slice(6,show).map(item =>(
                <li key={item.itemid} className="recommended-item">
                  <a href=".#" className="recommended-item-link">
                    <img src={`https://cf.shopee.vn/file/${item.image}`} alt="" />

                    {
                      item.discount ?
                        <div className="recommended-item-label sale">
                          <span>{item.discount}</span>
                          <span>Giảm</span>
                        </div> : null
                    }

                    {
                      item.show_free_shipping  && item.liked_count > 10000?
                        <div className="recommended-item-ship-xu">
                          <img src="https://cf.shopee.vn/file/461691071df30827265cc48e9b5e76f3" alt="" />
                        </div> : null
                    }

                    {
                      item.show_free_shipping && item.coin_info === null ?
                        <div className="recommended-item-ship">
                          <img src="https://cf.shopee.vn/file/64cc6e5365663b97de6a51b303be7d35" alt="" />
                        </div> : null
                    }

                    {
                      item.liked_count > 10000 && !item.show_official_shop_label_in_title ?
                        <div className="recommended-item-wishlist">
                          Yêu thích
                        </div> : null
                    }

                    {
                      item.show_official_shop_label_in_title ?
                        <div className="recommended-item-mall">
                          Mall
                        </div> : null

                    }

                    {
                      item.show_official_shop_label_in_title || item.show_official_shop_label ?
                        <div className="recommended-item-sponsor">
                          Tài trợ
                        </div> : null
                    }
                    <div className="recommended-item-info">
                      <p className="recommended-item-name">
                        {item.name}
                      </p>
                      {
                        item.raw_discount === 50 ?
                          <div className="recommended-item-saleup">
                            <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16"><path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth="1" transform="" stroke="currentColor" fill="#f69113"></path></svg>
                            <div>50% giảm</div>
                            <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16"><path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth="1" transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113"></path></svg>
                          </div> : null
                      }
                      <div className="recommended-item-bottom">
                        <span className="recommended-item-price"><u>đ</u>{item.price/10000}</span>
                        <span className="recommended-item-sold">
                                            Đã bán {Math.ceil(item.historical_sold/1000).toFixed(1)}k
                                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              )
            )
          }
        </ul>
        {
          (show < products[0]?.data.item.length) ?
            <div className="recommended-loadmore">
              <button className="btn" onClick={()=>setCout()}>Xem thêm</button>
            </div> : null
        }
      </div>
    </div>
  )
}

export default Product

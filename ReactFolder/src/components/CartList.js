//import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

function CartList() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://localhost:44315/api/Shop/ProductListCart")
  //     .then((result) => {
  //       debugger;
  //       setData(result.data.listproducts);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

//   const handleAddproduct = (id) => {
//      const data = {
//         Id : id
//      };
//      axios.post('https://localhost:44315/api/Shop/AddProduct',data)
//      .then((result) =>{
//         if(result.data.statusCode === 200)
//         {
//             alert('item added')
//         }
//         else
//         {
//             alert('No item added')
//         }
//      })
//      .catch((error) => {
//         console.log(error);
//       });
//   }

  return (
    <Fragment>
      <div class="banner">
        <div class="banner-layer">
          <h1 class="title-w3layouts">
            <span class="fa fa-cart-arrow-down" aria-hidden="true"></span>
            shopping cart
          </h1>
        </div>

        <div class="wthreeproductdisplay">
          <div class="container">
            <div class="top-grid">
              {data && data.length > 0
                ? data.map((item, index) => {
                    return (
                      <Fragment>
                        <div class="cart-grid" id="cart-1">
                          <div class="img">
                            <img src={item.image} alt="img" />
                          </div>
                          <ul class="info">
                            <li>${item.discountedPrice}</li>
                            <li class="right-text">${item.actualPrice}</li>
                          </ul>
                          <div class="snipcart-details ">                            
                              <button
                                type="submit"
                                class="button w3l-cart"
                                data-id="cart-1"
                                //onClick={() => handleAddproduct(item.id)}
                              >
                                Remove Item
                              </button>                           
                          </div>
                        </div>  
                      </Fragment>
                    );
                  })
                : "No data"}

              <div class="clear"></div>
            </div>
          </div>
        </div>
        <div class="wthreecartaits wthreecartaits2 cart cart box_1">
          
            <button class="w3view-cart" type="submit" name="submit" value="">
              view cart
              <span class="fa fa-cart-arrow-down" aria-hidden="true"></span>
            </button>
          
        </div>
        <div class="copyright text-center">
          <p>© 2017 Shopping Cart. All rights reserved | Design by</p>
        </div>
      </div>
    </Fragment>
  );
}

export default CartList;

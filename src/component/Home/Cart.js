import React from 'react'

const Cart = () => {
  return (
  <div>
  <div className="cart-content" style={{background: 'linear-gradient(#fffcf7,#F7F5E5)'}}>
    <div className="container">
      <h2>Your Cart</h2>
      <div className="container" style={{padding: 30}}>
        <div className="row">
          <div className="col-sm-4">
            <img src="assets/images/Rectangle 7.png" alt />
          </div>
          <div className="col-sm-6">
            <h4>Divine Essence - Including Agarbatti and Dhoop, fosters a deeper connection to the divine.</h4>
            <p>Size</p>
            <div style={{border: '1px solid #000000', borderRadius: 20, padding: '5px 10px', display: 'inline-block'}}>Pack of 1</div>
            <p>Quantity</p>
            <div style={{border: '1px solid #000000', borderRadius: 20, padding: '5px 10px', display: 'inline-block', width: 135}}>&nbsp;<img src="assets/images/addition.png" alt />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="assets/images/minus.png" alt /></div>
            <ul style={{display: 'flex', listStyleType: 'none', gap: 20, paddingLeft: 0, marginTop: 20}}>
              <li>Delete</li>
              <li>Save for later</li>
              <li>See more like this</li>
              <li>Share</li>
            </ul>
          </div>
          <div className="col-sm-2">
            <img src="assets/images/Star icon.png" alt />
            <img src="assets/images/Star icon.png" alt />
            <img src="assets/images/Star icon.png" alt />
            <img src="assets/images/Star icon.png" alt />
            <img src="assets/images/Star icon.png" alt />
          </div>
        </div>
      </div>
      <div className="container" style={{padding: 30}}>
        <div className="row">
          <div className="col-sm-4">
            <img src="assets/images/Rectangle 7.png" alt />
          </div>
          <div className="col-sm-6">
            <h4>Divine Essence - Including Agarbatti and Dhoop, fosters a deeper connection to the divine.</h4>
            <p>Size</p>
            <div style={{border: '1px solid #000000', borderRadius: 20, padding: '5px 10px', display: 'inline-block'}}>Pack of 1</div>
            <p>Quantity</p>
            <div style={{border: '1px solid #000000', borderRadius: 20, padding: '5px 10px', display: 'inline-block', width: 135}}>&nbsp;<img src="assets/images/addition.png" alt />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="assets/images/minus.png" alt /></div>
            <ul style={{display: 'flex', listStyleType: 'none', gap: 20, paddingLeft: 0, marginTop: 20}}>
              <li>Delete</li>
              <li>Save for later</li>
              <li>See more like this</li>
              <li>Share</li>
            </ul>
          </div>
          <div className="col-sm-2">
            <img src="assets/images/Star icon.png" alt />
            <img src="assets/images/Star icon.png" alt />
            <img src="assets/images/Star icon.png" alt />
            <img src="assets/images/Star icon.png" alt />
            <img src="assets/images/Star icon.png" alt />
          </div>
        </div>
      </div>
      <div className="container" style={{padding: 30}}>
        <div className="row">
          <div className="col-sm-4">
            <img src="assets/images/Rectangle 7.png" alt />
          </div>
          <div className="col-sm-6">
            <h4>Divine Essence - Including Agarbatti and Dhoop, fosters a deeper connection to the divine.</h4>
            <p>Size</p>
            <div style={{border: '1px solid #000000', borderRadius: 20, padding: '5px 10px', display: 'inline-block'}}>Pack of 1</div>
            <p>Quantity</p>
            <div style={{border: '1px solid #000000', borderRadius: 20, padding: '5px 10px', display: 'inline-block', width: 135}}>&nbsp;<img src="assets/images/addition.png" alt />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="assets/images/minus.png" alt /></div>
            <ul style={{display: 'flex', listStyleType: 'none', gap: 20, paddingLeft: 0, marginTop: 20}}>
              <li>Delete</li>
              <li>Save for later</li>
              <li>See more like this</li>
              <li>Share</li>
            </ul>
          </div>
          <div className="col-sm-2">
            <img src="assets/images/Star icon.png" alt />
            <img src="assets/images/Star icon.png" alt />
            <img src="assets/images/Star icon.png" alt />
            <img src="assets/images/Star icon.png" alt />
            <img src="assets/images/Star icon.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="price">
    <div className="conatiner">
      <div className="row">
        <div className="col-sm-4" style={{height: 400, width: 817, textAlign: 'center', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{padding: 40, backgroundColor: '#ffffff', borderRadius: 28}}>
            <div className="row">
              <div className="col-sm-6">
                <h2>Subtotal</h2>
                <h2>Shipping</h2>
                <h2>Total</h2>
              </div>
              <div className="col-sm-6">
                <h2>Rs 540.00</h2>
                <h2>Rs 10.00</h2>
                <h2>Rs 540.00</h2>
              </div>
            </div>
            <button style={{backgroundColor: '#FFC35B', padding: '10px 150px', borderRadius: 25, border: 'navajowhite'}}>Proceed to Buy</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Cart

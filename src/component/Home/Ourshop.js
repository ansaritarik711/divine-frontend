import React from 'react'

const Ourshop = () => {
  return (
   <div>
  <section className="shop-main">
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-2 shop-pic-1"><img src="assets/images/Ellipse 11.png" alt /><img src="assets/images/Ellipse 10.png" alt /><img src="assets/images/Ellipse 9.png" alt /><img src="assets/images/Ellipse 8.png" alt /></div>
            <div className="col-sm-10 shop-pic-2"><img src="assets/images/Rectangle 129.png" alt /></div>
          </div>
        </div>
        <div className="col-sm-4 shop-content">
          <h3 style={{fontSize: 32}}>Divine Essence - Including Agarbatti and Dhoop, fosters a deeper connection to the divine.</h3>
          <div>
            <img src="assets/images/Star icon.png" height="22px" width="22px" alt /><img src="assets/images/Star icon.png" height="22px" width="22px" alt /><img src="assets/images/Star icon.png" height="22px" width="22px" alt /><img src="assets/images/Star icon.png" height="22px" width="22px" alt /><img src="assets/images/Star icon.png" height="22px" width="22px" alt />
          </div>
          <div>
            <img src="assets/images/₹180.00.png" height="25px" width="118px" alt /><img src="assets/images/₹200.00.png" height="15px" width="81px" alt />
          </div>
          <p>Size</p>
          <div>
            <div style={{border: '1px solid #000000', borderRadius: 20, padding: '5px 10px', display: 'inline-block'}}>Pack of 1</div>
            <div style={{border: '1px solid #A6A6A6', borderRadius: 20, padding: '5px 10px', display: 'inline-block'}}>Pack of 2</div>
            <div style={{border: '1px solid #A6A6A6', borderRadius: 20, padding: '5px 10px', display: 'inline-block'}}>Pack of 3</div>
          </div>
          <p>Quantity</p>
          <div style={{border: '1px solid #A6A6A6', borderRadius: 20, padding: '5px 10px', display: 'inline-block', width: 135}}>&nbsp;<img src="assets/images/addition.png" alt />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="assets/images/minus.png" alt /></div>
          <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
            <div style={{backgroundColor: '#FFC35B', display: 'inline-block', borderRadius: 30, padding: '7px 30px'}}><h4>BUY NOW</h4></div>
            <div style={{backgroundColor: '#FFC35B', display: 'inline-block', borderRadius: 30, padding: '7px 30px'}}><h4>ADD TO CART</h4></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="shop-form">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <img src="assets/images/Rectangle 169.png" alt />
        </div>
        <div className="col-sm-6" style={{textAlign: 'center'}}>
          <h3>Customer Review</h3>
          <div>
            <img src="assets/images/Star icon.png" height="22px" width="22px" alt /><img src="assets/images/Star icon.png" height="22px" width="22px" alt /><img src="assets/images/Star icon.png" height="22px" width="22px" alt /><img src="assets/images/Star icon.png" height="22px" width="22px" alt /><img src="assets/images/Star icon.png" height="22px" width="22px" alt />
          </div>
          <h4>Your Rating</h4>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea id="message" name="message" rows={10} placeholder="Type your message here" />
          <div style={{textAlign: 'end'}}><button>Submit</button></div>
        </div>                
      </div>
    </div>
  </div>
</div>

  )
}

export default Ourshop

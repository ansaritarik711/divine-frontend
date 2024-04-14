import React from 'react'

const Contact = () => {
  return (
    <div>
  <div className="contact-main">
    <div className="contact-banner">
      <img src="assets/images/Frame 86.png" alt />
    </div>
    <div className="contact-form">
      <div className="form-contact">
        <h1>Leave Us A Message</h1>
        <p>Nourishing nature, nurturing you.</p>
        <div style={{display: 'flex', justifyContent: 'space-around', gap: 10}}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone Number" />
        </div>
        <input type="text" placeholder="Message" style={{width: '90%', height: 130, border: 'none', backgroundColor: '#F8F6E7'}} /><br />
        <button>Send Message</button>
        <div />
      </div>
    </div>
  </div>
  <div style={{backgroundColor: '#efecca'}}>
    <div className="container">
      <div className="row contact-section">
        <div className="col-sm-4">
          <div>
            <img src="assets/images/ph_phone-bold.png" alt />
            <h2><p>Phone number</p>xxx-xxxxxxxxx</h2>                        
          </div>
        </div>
        <div className="col-sm-4">
          <div>
            <img src="assets/images/carbon_email.png" alt />
            <h2><p>Email address</p> info@divinedepot.com</h2>
          </div>
        </div>
        <div className="col-sm-4">
          <div>
            <img src="assets/images/mingcute_location-line.png" alt />
            <h2><p>Address</p>[ Insert Physical address]</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style={{backgroundColor: '#efecca'}}>
    <div className="container">
      <div className="row" style={{padding: '60px 0px'}}>
        <div className="col-sm-4 neice">
          <div style={{backgroundColor: 'white', width: '80%', textAlign: 'center', marginTop: 60, borderRadius: 10}}>
            <button style={{padding: '20px 45px', backgroundColor: '#4CAF50', border: 'none', borderRadius: 35, position: 'relative', marginTop: '-150px'}}>Hours</button>
            <h3>Monday - Friday</h3>
            <h4>9.00 AM - 6.30 PM</h4>
            <h3>Saturdays</h3>
            <h4>11.00AM - 6.30 PM</h4>
            <h3>Sunday</h3>
            <h4>11.00AM - 6.30 PM</h4>
          </div>
        </div>
        <div className="col-sm-8" style={{display: 'flex', justifyContent: 'end'}}>
          <img src="assets/images/Rectangle 147.png" alt height="450px" width="730px" />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Contact

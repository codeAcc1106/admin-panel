import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <a href="https://www.limbanisoftwares.com/" target="_blank" rel="noopener noreferrer">limbanisoftwares.com </a>2022</span>
            {/* <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Free <a href="https://www.limbanisoftwares.com/" target="_blank" rel="noopener noreferrer"> React Admin </a> templates from limbanisoftwares.com.  </span> */}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
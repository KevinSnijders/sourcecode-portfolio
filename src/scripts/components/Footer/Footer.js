import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Shared/Button';
import Social from '../Social/Social';
import Icon from '../Shared/Icon';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  getCurrentYear() {
    let date = new Date();
    return date.getFullYear();
  }

  render() {
    return (
      <footer data-test="FooterComponent" id="contact" className="footer">
        <div className="col-sm-auto fade-in-bottom">
          <Button link="#" style="btn--light mb-4" text="Contact me" />
          <Social style="justify-content-center mb-4" />
          <p className="footer__copyright">
            Kevin Snijders &copy; {this.getCurrentYear()} all rights reserved
          </p>
          <div className="footer__back-to-top">
            <a href="#top">
              <Icon icon="keyboard_arrow_up" style="bounce" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

Footer.propTypes = {
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      link: PropTypes.string
    })
  )
};

import React from 'react';
import classNames from 'classnames';

export class Contact extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    var contactClass = classNames({
      'active': this.props.class,
      'dimensions-show': this.props.class,
      'dimensions-hide': !this.props.class,
    });


    return (
      <article id="contact" className={contactClass}>
        <h2 className="major">Contact</h2>
        <p>We would love to provide you with a free consultation session. We can recommend free resources, offer suggestions, and explore opportunities for more robust (probably not free) solutions.
          If you want to discuss solutions for your students, or you have any other questions, you can contact us by:</p>
        <p>Email: <a href="mailto:info@educell.org" target="_blank"> info@educell.org</a></p>
        <p>Phone: <a href="tel:+1801-682-3795">801-682-3795</a> (within the United States)</p>
        <p>WhatsApp: <a href="https://wa.me/18016823795">+1 801-682-3795</a></p>
          
        <div onClick={() => this.props.endTransitionHandler('contact')} className="close">Close</div>
      </article>
    );
  }
}

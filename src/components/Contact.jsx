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
        <p>If you have questions or want to discuss possible solutions for your students, you can contact Cade Dopp at: <br /></p>
        <a href="mailto:educell@cadedopp.com" target="_blank"> educell@cadedopp.com</a>
        <div onClick={() => this.props.endTransitionHandler('contact')} className="close">Close</div>
      </article>
    );
  }
}

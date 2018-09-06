import React from 'react';
import classNames from 'classnames';

export class Donate extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    var donateClass = classNames({
      'active': this.props.class,
      'dimensions-show': this.props.class,
      'dimensions-hide': !this.props.class,
    });


    return (
      <article id="donate" className={donateClass}>
        <h2 className="major">Donate</h2>
        <span className="image main"><img src="images/pic01.jpg" alt="" /></span>
        <p>We are waiting to get permission from the state of Utah before we can accept donations on our website.
        Please contact us at <a href="mailto:info@educell.org" target="_blank"> info@educell.org</a> to learn how you can make a difference now.</p>
        <p> <a href='../501-c-3-approved.pdf' target="_blank">501(c)(3) determination letter</a></p>
        <p> <a href='../educell-articles.pdf' target="_blank">Articles of incorporation</a></p>
        <div onClick={() => this.props.endTransitionHandler('donate')} className="close">Close</div>
      </article>
    );
  }
}

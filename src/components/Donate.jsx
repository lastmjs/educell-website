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
        <p>We are waiting for the IRS to grant us 501c3 non-profit status before we will accept donations. We want you to feel assured that your tax-deductable donations will make a difference for the children we serve.</p>
        <div onClick={() => this.props.endTransitionHandler('donate')} className="close">Close</div>
      </article>
    );
  }
}

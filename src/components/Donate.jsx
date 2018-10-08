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
        <p><a href='https://onetoday.google.com/p/hebnurli?c=6272147914358784'>Donate</a> to our current project on Google One Today.</p>
        <p>Please contact us at <a href="mailto:info@educell.org" target="_blank"> info@educell.org</a> to learn about other ways you can make a difference.</p>
        <p> <a href='../501-c-3-approved.pdf' target="_blank">501(c)(3) determination letter</a></p>
        <p> <a href='../educell-articles.pdf' target="_blank">Articles of incorporation</a></p>
         <p> <a href='../solicitation.pdf' target="_blank">Solicitation Permit</a></p>
        <div onClick={() => this.props.endTransitionHandler('donate')} className="close">Close</div>
      </article>
    );
  }
}

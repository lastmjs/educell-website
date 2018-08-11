import React from 'react';
import classNames from 'classnames';
import classPhoto from '../images/class.jpg'
import cade from '../images/cade.png';
import chloe from '../images/chloe.png';
import jordan from '../images/jordan.png';

export class About extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    var aboutClass = classNames({
      'active': this.props.class,
      'dimensions-show': this.props.class,
      'dimensions-hide': !this.props.class,
    });

    const imageContainerStyle = {
        textAlign: 'center'
    };

    return (
      <article id="about" className={aboutClass}>
        <h2 className="major">About</h2>
        <span className="image main"><img src={classPhoto} alt="" /></span>
        <h3>Mission</h3>
        <p>Our mission is to provide every child and teen in the world an education that will enable them to to become self-reliant adults.</p>
        <h3>Activities</h3>
        <p>We accomplish our mission by providing educational consulting to NGOs, bussinesses, and governments who are seeking to offer affordable education for students. We help our partners to train teachers, integrate educational technology, and implement learning management systems.</p>
        <h3>Team</h3>
        <p>Our team is comprised of graduates from Brigham Young University with expertise in education and technology.</p>
        <div style={imageContainerStyle}>
            <span className="image"><img src={cade} height="209" /></span>
            <span className="image"><img src={chloe} height="209" /></span>
            <span className="image"><img src={jordan} height="209" /></span>
        </div>
        <div onClick={() => this.props.endTransitionHandler('about')} className="close">Close</div>
      </article>
    );
  }
}

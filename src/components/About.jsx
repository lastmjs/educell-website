import React from 'react';
import classNames from 'classnames';
// import classPhoto from '../images/class.jpg'
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
    <h3>Guiding Beliefs</h3>

<p>
The Creator gave each of us life on this Earth so that we could learn to live happily, as He does.
Our capacity for happiness increases with our capacity to love.
Our capacity to love increases as we learn to see things as they really are, and as we acquire the power to act accordingly.
Gaining vision and power is the heart of education.
</p>


<h3>Mission</h3>

<p>
Our mission is to provide every child on this earth with an opportunity to gain knowledge about the world,
power to act in it,
and desire to be self-reliant and compassionate.
</p>

<h3>Activities</h3>

<p>
We help teachers in Africa use low-cost technology to improve outcomes in their classrooms.
Our partner-teachers leverage digital assessments to instantly understand student needs,
and multi-media instructional materials to personalize instruction for every student.
We install the technology, train the teachers, and provide the instructional material.
</p>

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

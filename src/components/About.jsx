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

<h3>Team</h3>
    <div class="image_text_column">

    <h4>Education</h4>

      <div class="image_text_row">
        <div class="image_row">
        <img src={cade} width="100%" />*
        </div>

        <p class="text_row">
        Cade Dopp has a master’s degree in Instructional Psychology and Technology (Ed Tech). He has worked on two ed tech projects in Ghana and has worked with students, teachers, and government. He has also worked as a project manager, teacher, and wilderness guide. 
        </p>
      </div>

    <h4>Marketing</h4>

      <div class="image_text_row">
        <div class="image_row">
        <img src={chloe} width="100%" />
        </div>

        <p class="text_row">
          Chloe Saunders studies Marketing and Social Innovation at BYU.
          She has spent time in Japan, India, and Thailand.
          She has experience with research, mentoring, and writing.
          Education is her passion.
        </p>
      </div>

    <h4>Technology</h4>

      <div class="image_text_row">

        <div class="image_row">
        <img src={jordan} width="100%" />
        </div>

        <p class="text_row">
          Jordan Last graduated from Brigham Young University with a BS in Computer Science.
          He is a co-founder of an edtech startup and has been deeply involved in edtech, open source, and web development for years.
          He believes in the web platform as the most powerful force for good in technology.
        </p>
      </div>
    </div>
        
     	<footer id={footerId} className={footerClass}>
    						<p className="copyright">&copy; Educell. Design: <a href="https://html5up.net">HTML5 UP</a>. *Photo cred #travellingshepards</p>
    					</footer>
        
        <div onClick={() => this.props.endTransitionHandler('about')} className="close">Close</div>
      </article>
    );
  }
}

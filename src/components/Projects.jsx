import React from 'react';
import classNames from 'classnames';

export class Projects extends React.Component{

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
        <h2 className="major">Projects</h2>
        
<h3>Sample Projects</h3>

  <h4>Ghana Make A Difference</h4>

    <p>
      <a href="https://www.ghanamakeadifference.org/" target="_blank">Ghana Make A Difference</a> (GMAD) is an NGO that provides housing and basic necessities for children who have been rescued from human trafficking, abuse, and neglect.
      Disatisfied with the community school, GMAD constructed a new school to serve their children and others in the community.
      The GMAD Accademy of Learning employed three full-time teachers, a special-needs teacher, and a vocational trainer.
      They served approximately 60 students. Teachers and students initially had limited competency with technology like computers and tablets.
      One of the unique challenges at GMAD is that students typically spend one year in the program, and enter and exit the program at unpredictable times.
    </p>

    <p>
      We partnered with GMAD to (a) design a custom curriculum that focused on literacy and math,
      (b) create assessments to help determine student needs upon enrollment,
      (c) integrate low-cost tablets to enable automated assessments and delivery of personalized instruction,
      and (d) setup a learning management system to track student progress and organize instructional materials.
    </p>

        <div onClick={() => this.props.endTransitionHandler('projects')} className="close">Close</div>
      </article>
    );
  }
}


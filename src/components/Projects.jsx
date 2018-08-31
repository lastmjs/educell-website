import React from 'react';
import classNames from 'classnames';

export class Projects extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    var projectsClass = classNames({
      'active': this.props.class,
      'dimensions-show': this.props.class,
      'dimensions-hide': !this.props.class,
    });

    const imageContainerStyle = {
        textAlign: 'center'
    };

    return (
      <article id="projects" className={projectsClass}>
        <h2 className="major">Projects</h2>
  <p>
    <a href="http://ec2-52-88-223-6.us-west-2.compute.amazonaws.com/moodle/" target="_blank">Educell Moodle</a>
  </p>
   <p>
    <a href="http://ec2-52-88-223-6.us-west-2.compute.amazonaws.com:8080" target="_blank">Educell Kolibri</a>
  </p>

  <h3>Ghana Make A Difference</h3>

    <p>
      <a href="https://www.ghanamakeadifference.org/" target="_blank">Ghana Make A Difference</a> (GMAD) is an NGO that provides housing and basic necessities for children who have been rescued from human trafficking, abuse, and neglect.
      Dissatisfied with the community school, GMAD constructed a new school to serve their children and others in the community.
      The GMAD Accademy of Learning employed three full-time teachers, a special-needs teacher, and a vocational trainer.
      They served approximately 60 students. Teachers and students initially had limited competency with technology like computers and tablets.
      One of the unique challenges at GMAD is that students typically spend one year in the program, and enter and exit the program at unpredictable times.
    </p>

    <p>
      We partnered with GMAD to 
      <ol>
        <li> design a custom curriculum that focused on literacy and math </li>
        <li> create assessments to help determine student needs upon enrollment </li>
        <li> integrate low-cost tablets to enable automated assessments and delivery of personalized instruction</li>
        <li> setup a learning management system to track student progress and organize instructional materials </li>
      </ol>
    </p>

        <div onClick={() => this.props.endTransitionHandler('projects')} className="close">Close</div>
      </article>
    );
  }
}


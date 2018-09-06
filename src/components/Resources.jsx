import React from 'react';
import classNames from 'classnames';
// import classPhoto from '../images/class.jpg'
import resource1img from '../images/resource1img.png';
import resource2img from '../images/resource2img.png';
import resource1img from '../images/resource3img.png';
import resource2img from '../images/resource4img.png';
import resource1img from '../images/resource5img.png';
import resource2img from '../images/resource6img.png';

export class Resources extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    var resourcesClass = classNames({
      'active': this.props.class,
      'dimensions-show': this.props.class,
      'dimensions-hide': !this.props.class,
    });

    const imageContainerStyle = {
        textAlign: 'center'
    };

    return (
      <article id="resources" className={resourcesClass}>
        <h2 className="major">Resources</h2>
   
    <div class="image_text_column">
      <h3> Technology </h3>
      
    <h4>Network</h4>

      <div class="image_text_row">
        <div class="image_row">
        <img src={resource1img} width="100%" />*
        </div>

        <p class="text_row">
          Setup a network.
        </p>
      </div>

    <h4>Devices</h4>

      <div class="image_text_row">
        <div class="image_row">
        <img src={resource2img} width="100%" />
        </div>

        <p class="text_row">
          Select devices.
        </p>
      </div>
    </div>
        
            <h4>Software</h4>

      <div class="image_text_row">
        <div class="image_row">
        <img src={resource3img} width="100%" />*
        </div>

        <p class="text_row">
          Select software.
        </p>
      </div>
        
         <h3> Curriculum </h3>
      
    <h4>Math Assessments</h4>

      <div class="image_text_row">
        <div class="image_row">
        <img src={resource4img} width="100%" />*
        </div>

        <p class="text_row">
          Assessments for students.
        </p>
      </div>

    <h4>Math Competency Frameworks</h4>

      <div class="image_text_row">
        <div class="image_row">
        <img src={resource5img} width="100%" />
        </div>

        <p class="text_row">
          Select devices.
        </p>
      </div>
        
            <h4>Math Teaching Materials</h4>

      <div class="image_text_row">
        <div class="image_row">
        <img src={resource6img} width="100%" />*
        </div>

        <p class="text_row">
          Select software.
        </p>
      </div>
      </div>
        
        <div onClick={() => this.props.endTransitionHandler('resources')} className="close">Close</div>
      </article>
    );
  }
}

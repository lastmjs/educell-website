import React from 'react';
import classNames from 'classnames';
// import classPhoto from '../images/class.jpg'
import resource1img from '../images/resource1img';
import resource2img from '../images/resource2img';

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

    <h4>Resource Category 1</h4>

      <div class="image_text_row">
        <div class="image_row">
        <img src={resource1img} width="100%" />*
        </div>

        <p class="text_row">
        </p>
      </div>

    <h4>Resource Category 2</h4>

      <div class="image_text_row">
        <div class="image_row">
        <img src={resource2img} width="100%" />
        </div>

        <p class="text_row">
        </p>
      </div>
    </div>
        
        <div onClick={() => this.props.endTransitionHandler('resources')} className="close">Close</div>
      </article>
    );
  }
}

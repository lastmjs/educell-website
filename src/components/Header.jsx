import React from 'react';
import classNames from 'classnames';

export class Header extends React.Component{

  constructor(props) {
    super(props);
  }


  render() {
    var headerClass = classNames({
      'dimensions-hide': !this.props.class,
      'header-center': true,
    });

    var headerId = classNames({
      'header': this.props.class,
    });

    return (
      <header id={headerId} className={headerClass}>
        <div className="content">
          <div className="inner">
            <h1>Educell</h1>
            <p>Solving educational challenges in remote and low-resource environments.</p>
          </div>
        </div>
        <nav>
          <ul>
          <li><a href="#about" onClick={() => this.props.transitionHandler('about')}>About</a></li>
            <li><a href="#projects" onClick={() => this.props.transitionHandler('projects')}>Projects</a></li>
            <li><a href="#donate" onClick={() => this.props.transitionHandler('donate')}>Donate</a></li>
            <li><a href="#contact" onClick={() => this.props.transitionHandler('contact')}>Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }


}

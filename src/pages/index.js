import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { Header } from '../components/Header';
import { Donate } from '../components/Donate';
import { Contact } from '../components/Contact';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import classNames from 'classnames';

import '../styles/main.css';
import '../styles/noscript.css';
import '../styles/custom.css';

export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openModal: null,
      header: true,
      main: true,
      footer: true,
      modal: {
        donate: false,
        about: false,
        projects: false,
        contact: false,
      }
    }
  }

  startArticleTransition(name) {
    document.body.classList.add('is-article-visible');

    this.setState({
      header: false,
      footer: false,
      main: true,
      modal: {
        [name]: true,
      },
    });
  }

  endArticleTransition(name) {
    document.body.classList.remove('is-article-visible');

    this.setState({
      header: true,
      footer: true,
      main: false,
      modal: {
        [name]: false
      },
    });
  }

  render() {

    var mainClass = classNames({
      'dimensions-hide': !this.state.main,
    });

    var mainId = classNames({
      'main': this.state.main,
    });

    var footerClass = classNames({
      'dimensions-hide': !this.state.footer,
    });

    var footerId = classNames({
      'footer': this.state.footer,
    });

    return (
      <div>
    			<div id="wrapper">
            <Header class={this.state.header} transitionHandler={(name) => this.startArticleTransition(name)}/>
    					<div id={mainId} className={mainClass}>
                <About class={this.state.modal.about} endTransitionHandler={(name) => this.endArticleTransition(name)} />
                <Projects class={this.state.modal.projects} endTransitionHandler={(name) => this.endArticleTransition(name)} /> 
                <Donate class={this.state.modal.donate} endTransitionHandler={(name) => this.endArticleTransition(name)} />
                <Contact class={this.state.modal.contact} endTransitionHandler={(name) => this.endArticleTransition(name)} />
              </div>
    					<footer id={footerId} className={footerClass}>
    						<p className="copyright">&copy; Educell. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    					</footer>
    			</div>
    			<div id="bg"></div>

      </div>
    );
  }
}

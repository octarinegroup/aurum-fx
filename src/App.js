import React, { Component } from 'react';
import styled from 'styled-components'
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './App.css';
import HomeContainer from './containers/HomeContainer';
import CategoryContainer from './containers/CategoryContainer';
import ContactContainer from './containers/ContactContainer';
import { Sidenav } from './components/Sidenav/Sidenav'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    top: 0;
    left: 0;
  }
`

class App extends Component {
  constructor(props) {
    super(props)

    console.log('Homepage', `"${process.env.PUBLIC_URL}"`)
  }
  render() {
    return (
      <div>
        <Wrapper>
          <Sidenav />
          <TransitionGroup className="transition-group">
            <CSSTransition
              key={this.props.location.key}
              timeout={{ enter: 300, exit: 300 }}
              classNames="fade"
            >
              <section className="route-section">
                <Switch location={this.props.location}>
                  <Route exact path="/" component={HomeContainer} />
                  <Route exact path="/product" render={() => <CategoryContainer category="product" />} />
                  <Route exact path="/lifestyle" render={() => <CategoryContainer category="lifestyle" />} />
                  <Route exact path="/wedding" render={() => <CategoryContainer category="wedding" />} />
                  <Route exact path="/portraits" render={() => <CategoryContainer category="portraits" />} />
                  <Route exact path="/macro" render={() => <CategoryContainer category="macro" />} />
                  <Route exact path="/nature" render={() => <CategoryContainer category="nature" />} />
                  <Route exact path="/about" component={HomeContainer} />
                  <Route path="/contact" component={ContactContainer} />
                </Switch>
              </section>
            </CSSTransition>
          </TransitionGroup>
        </Wrapper>
      </div>
    );
  }
}

export default withRouter(App)

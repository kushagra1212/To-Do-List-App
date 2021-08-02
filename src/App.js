import React, { Component } from "react";
import Styles from "./App.module.css";
import Amain from "./components/Amain";
import Ls from "./components/Ls";
import cross from "./cross.png";
class App extends Component {
  state = {
    show: true,
    com: false,
    all: true,
    ourInt: false,
  };
  lsHandler = () => {
    this.setState({ show: !this.state.show, ourInt: !this.state.ourInt });
  };
  comHandeler = () => {
    this.setState({ com: true });
    setTimeout(() => {
      this.lsHandler();
    }, 500);
  };
  unComHandler = () => {
    this.setState({ com: false });
    this.setState({ all: false });
    setTimeout(() => {
      this.lsHandler();
    }, 500);
  };
  allHandler = () => {
    this.setState({ all: true });
    setTimeout(() => {
      this.lsHandler();
    }, 500);
  };

  hand = () => {
    if (this.state.show) {
      return (
        <div className={Styles.mainS}>
          <Amain
            com={this.state.com}
            all={this.state.all}
            ourInt={this.state.ourInt}
          />
          <Ls lsHandler={this.lsHandler} />
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className={Styles.lis}>
            <button className={Styles.crossbtn} onClick={this.lsHandler}>
              <img className={Styles.cross} src={cross} alt="Not Found" />
            </button>

            <ul>
              <li>
                <button onClick={this.allHandler}>
                  <strong>All</strong>
                </button>
              </li>

              <li>
                <button onClick={this.comHandeler}>
                  <strong>Completed</strong>
                </button>
              </li>

              <li>
                <button onClick={this.unComHandler}>
                  <strong>Uncompleted</strong>
                </button>
              </li>
            </ul>
          </div>

          <div className={Styles.mainH}>
            <Amain
              com={this.state.com}
              all={this.state.all}
              ourInt={this.state.ourInt}
            />

            <Ls lsHandler={this.lsHandler} />
          </div>
        </React.Fragment>
      );
    }
  };
  render() {
    return <>{this.hand()}</>;
  }
}
export default App;

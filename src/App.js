import React from "react";
import "./App.css";
import uuid from "uuid";
import Box from "./Box";

const fixedList = [
    {
      id: uuid(),
      value: "Index: 1."
    }, 
    {
      id: uuid(),
      value: "Index: 2."
    }, 
    {
      id: uuid(),
      value: "Index: 3."
    }
]

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          isBoxClose: true
        };
        this.btnRef = React.createRef()
    };

    showBox = () => {
        if(this.state.isBoxClose) {
            this.setState({
                isBoxClose: false
            })
        }
    };

    closeBox = () => {
        this.setState({
            isBoxClose: true
        })
    };

  render() {
    return (
        <div className="App">
            <button ref={this.btnRef} onClick={this.showBox} className="btn" title="Click me!">Посмотреть список</button>
            { !this.state.isBoxClose && <Box btnRef={this.btnRef} fixedList={fixedList} closeBox={this.closeBox}/> }
        </div>
    );
  }
}

export default App;
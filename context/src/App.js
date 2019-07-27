import React from 'react';
import './App.css';
import cat from "/cat.jpg";

const Cat = props => {
  const mouse = props.mouse;
  return (
    <img src={cat} alt="Logo" style={{position: "absolute", left: mouse.x, top: mouse.y}} />
  );
};

class Mouse extends React.Component {
  state = {
    x: 0,
    y: 0
  }
  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div style={{height: "100%"}} onMouseMove={this.hendleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}
const App = (props) => {
  return (
    <div className="App">
      <h1>Move the Mouse around!</h1>
      <Mouse render={mouse => (
        <Cat mouse={mouse} />
      )} />
    </div>
  );
}

export default App;

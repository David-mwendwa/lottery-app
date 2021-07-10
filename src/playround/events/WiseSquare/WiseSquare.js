import React from 'react';

class WiseSquare extends React.Component {
  state = {
    wisemsg: '',
  };
  dispenseWisdom = () => {
    let messages = [
      'A fool thinks himself to be wise',
      'All is vanity before God',
      'Never count your chicks before they are arched',
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    this.setState({ wisemsg: messages[randomIndex] });
  };
  handleKeyUp = (e) => {
    e.preventDefault();
    alert('You clicked something');
    console.log(e);
  };

  handleCopy = (e) => [
    alert('Stop stealing from me you nigga')
  ]
  render() {
    return (
      <div>
        <h2>{this.state.wisemsg}</h2>
        <button onMouseEnter={this.dispenseWisdom}>😄</button>
        <div>
          <textarea onKeyUp={this.handleKeyUp} />
        </div>
        <p onCopy={this.handleCopy}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus
          tortor sed ipsum placerat, sit amet tempus mauris malesuada.
          Vestibulum volutpat viverra lacinia. Curabitur sodales dui est, nec
          ullamcorper enim sagittis volutpat. Nulla et dapibus eros, nec
          fringilla orci. Suspendisse a odio in est mollis cursus sed nec odio.
          Ut risus magna, placerat sollicitudin nibh ac, blandit pellentesque
          turpis. Vestibulum congue ligula nec neque consequat elementum.
          Vestibulum diam est, molestie ut convallis sit amet, commodo quis
          dolor. Vivamus placerat felis nunc, ut auctor dui faucibus sit amet.
          Nulla semper bibendum arcu, et pellentesque turpis gravida tempor.
          Maecenas sollicitudin aliquet ex nec viverra.
        </p>
      </div>
    );
  }
}

export default WiseSquare;

import React from 'react';

class IconList extends React.Component {
  static defaultProps = {
    options: [
      'angry',
      'anchor',
      'archive',
      'at',
      'archway',
      'baby',
      'bell',
      'bolt',
      'bone',
      'car',
      'city',
      'cloud',
      'couch',
    ],
  };

  state = { icons: [] };

  addIcon = () => {
    let index = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[index];
    this.setState({ icons: [...this.state.icons, newIcon] });
  };

  render() {
    const icons = this.state.icons.map((i) => <i className={`fas fa-${i}`} />);
    return (
      <div>
        <h1>Icons: {icons}</h1>
        <button onClick={this.addIcon}>Add New Icon</button>
      </div>
    );
  }
}

export default IconList;

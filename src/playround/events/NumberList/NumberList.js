import React from 'react';
import NumberItem from './NumberItem';

class NumberList extends React.Component {
  state = { nums: [1, 2, 3, 4, 5] };

  remove = (num) => {
    this.setState((st) => ({ nums: st.nums.filter((n) => n !== num) }));
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.nums.map((num) => (
            <NumberItem key={num} remove={this.remove} value={num} />
          ))}
        </ul>
      </div>
    );
  }
}

export default NumberList;

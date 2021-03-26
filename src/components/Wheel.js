import React from 'react';
import Avatar from '@material-ui/core/Avatar';


import './wheel.css';

// inspired by https://github.com/hadriengerard/spinning-wheel-game-react
export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      nbTurn: 0,
      spinDuration: props.spinDuration ?? 10,
    };
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem() {
    const { nbTurn, spinDuration } = this.state;
    const selectedItem = Math.floor(Math.random() * this.props.items.length);

    if (this.props.onSelectItem) {
      this.props.onSelectItem(this.props.items[selectedItem], spinDuration);
    }
    this.setState({ 
      selectedItem,
      nbTurn: nbTurn + 10,
    });
  }

  render() {
    const { selectedItem, nbTurn, spinDuration } = this.state;
    const { items } = this.props;
    
    const wheelVars = {
      '--nb-item': items.length,
      '--selected-item': selectedItem,
      '--nb-turn': nbTurn,
      '--spinning-duration': `${spinDuration}s`,
    };

    const spinning = 'spinning';

    return (
      <div className="wheel-container">
        <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
          {items.map((item, index) => (
            <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
              <Avatar src={`https://cinco.linkedin.biz/api/raw/picture/${item}`} style={{width: 150, height:150}}>
                {item.charAt(0).toUpperCase()}
              </Avatar>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';

class Control extends Component {
  render() {
    return(
      <ul>
        <li><a onClick={function(e){
          e.preventDefault();
          this.props.onChangMode('create');
        }.bind(this)} href='/create'>create</a></li>
        <li><a onClick={function(e){
          e.preventDefault();
          this.props.onChangMode('update');
        }.bind(this)} href='/update'>update</a></li>
        <li><input onClick={function(e){
          e.preventDefault();
          this.props.onChangMode('delete');
        }.bind(this)} type='button' value='delete'></input></li>
      </ul>
    );
  }
}

export default Control;
/*sub*/
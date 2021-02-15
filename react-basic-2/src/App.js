import React from 'react';
import Counter from './counterFolder/counter.js';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      mount :false,
    }

    this.mountMethod = ()=>{
      this.setState({
        mount : true
      })
    }

    this.unmountMethos = () =>{
      this.setState({
        mount:false,
      })
    }
  }

  render(){
    return(
      <>
      <button onClick={this.mountMethod} disabled={this.state.mount}>Mount</button>
      <button onClick={this.unmountMethos} disabled={!this.state.mount}>Umount</button>
        {this.state.mount ? <Counter/> : null} 
      </>
    );
  }

}

export default App;
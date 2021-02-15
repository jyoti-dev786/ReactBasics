import React from 'react';

class Counter extends React.Component{
    constructor(props){
        console.log("Constructor Method 1st")
        super(props);
        this.state={
            counter : 0,
        }
    }

    increment = () =>{
        this.setState({
            counter : this.state.counter + 1
        })
    }

    decrement = () =>{
        this.setState({
            counter : this.state.counter - 1
        })
    }


    // componentDidMount(){
    //     console.log('Component did Mount');
    //     console.log('----------------------')
    // }


    render(){
        console.log("render Method 2nd")
       
        return(
            <>
            <br/>
            <br/>
            <button className="btn" onClick={this.increment}>Increment</button>
            <button className="btn1" onClick={this.decrement}>Decrement</button>
           <div className="counter">
                Counter : {this.state.counter}
           </div>
            </>
        );
    }

    
  /*  componentDidUpdate(){
        console.log("Component did Update");
        console.log('---------------------------');
    }
    */
}

export default Counter;
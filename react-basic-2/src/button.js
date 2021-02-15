import React from 'react';


class Button extends React.Component{
    constructor(props){
        super(props);

        this.state={
            Bvalue : true, 
            StringVal : '',
        }

    }


    show = () =>{
        this.setState({
            Bvalue : true,
            StringVal : 'I love U',
        })
    }


    hide = () =>{
        this.setState({
            Bvalue : false,
            StringVal : '',
        })
    }

    render(){
        return(
            <>
                <button onClick={this.show} disabled={this.state.Bvalue}>show</button>
                <button onClick={this.hide} disabled={!this.state.Bvalue}>hide</button>

                <br/>
                <br/>
                <p>{this.state.StringVal}</p>
            </>
        );
    }
}

export default Button;
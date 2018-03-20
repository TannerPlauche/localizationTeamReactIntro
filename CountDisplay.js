import React, { Component } from "react";

const styles = {
    basicStyle:{
        border: '1px solid black',
        fontWeight: "bold"
    }
}

class CountDisplay extends Component {

    componentWillMount(){
        console.log("I am going to be rendered!");
    }

    componentDidMount(){
        console.log("I am rendered!");
    }

    componentWillUpdate(){
        console.log("I am about to update!");
    }

    componentDidUpdate(){
        console.log("I did update!");
    }

    shouldComponentUpdate(){
        // This only returns a boolean
        // the component does not re-render if returns false
        return true;
    }

    render() {

        console.log("props", JSON.stringify(this.props));

        return (
            <div style={styles.basicStyle}>
                <h1 style={{color: this.props.count % 2 === 0 ? "green": "red"}} >Count: {this.props.count}</h1>
            </div>)
    }

}


export default CountDisplay;
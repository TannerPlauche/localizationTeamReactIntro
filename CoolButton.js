import React, { Component } from "react";

class CoolButton extends Component {

    render() {
      return(
            <div>
            <button style={{backgroundColor: "pink",
                            color: "purple",
                            border: "2px solid purple",
                            fontSize: 35,
                            borderRadius: 7}}
                    onClick={this.props.handleClick}>
                {this.props.buttonText}
            </button>
        </div>
      )
    }

}

export default CoolButton;
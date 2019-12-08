import React from "react";
import List from "./List";

export default class Box extends React.Component {
    constructor(props) {
        super(props);
        this.boxRef = React.createRef()
    };

    closeBox = (event) => {
        if(event.target.contains(this.props.btnRef.current) && event.target.contains(this.boxRef.current)) {
            this.props.closeBox()
        }
    };

    componentDidMount() {
        document.body.addEventListener("click", this.closeBox)
    };

    componentWillUnmount() {
        document.body.removeEventListener("click", this.closeBox)
    };

    render() {
        return (
            <div ref={this.boxRef} className="box" >
                <List list={this.props.fixedList}/>
            </div>
        );
    }
}
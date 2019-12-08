import React from "react";
import uuid from "uuid";

class ItemOfList extends React.Component {
    state = {
        clicked: 0
    };

    onClicked = () => {
        this.setState({
            clicked: this.state.clicked + 1
        })
    };

    render() {
        const {item} = this.props
        return(
            <div onClick={this.onClicked} className="item">
                {item.value} Count of clicks {this.state.clicked}
            </div>
        )
    }
}

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.list
        }
    };

    addBottom = () => {
        this.setState({
            list: [
                ...this.state.list,
                {
                    id: uuid(), 
                    value: `Index: ${this.state.list.length + 1}.`
                }
            ]
        })
    };

    addTop = () => {
        this.setState({
            list: [
                {
                    id: uuid(), 
                    value: `Index: ${this.state.list.length + 1}.`
                },
                ...this.state.list
            ]
        })
    };
    
    render() {
        const {list} = this.state
            return(
                <div>
                    <div>
                        <button className="btns" onClick={this.addTop}>Добавить вверх списка</button>
                        <button className="btns" onClick={this.addBottom}>Добавить вниз списка</button>
                    </div>
                    <div>
                        {list.map(item => (
                            <ItemOfList key={item.id} item={item} />
                        ))}
                    </div>

                </div>
            )
    }
}
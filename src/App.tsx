import React from 'react';

class App extends React.Component<any, any> {
    state = {
        count: 0,
        visible: true
    }

    /*up = (): void => {
        this.setState({count: this.state.count + 1}) // update the state
    }

    down = (): void => {
        this.setState({count: this.state.count - 1})
    }*/

    update = (type: string) => {
        switch (type) {
            case "UP":
                this.setState({count: this.state.count + 1});// update the state
                break;
            case "DOWN":
                this.setState({count: this.state.count - 1});
                break;
        }
    }

    render() {

        // const x = "hello";

        return (
            <div className="m-5">

                {/*{ x }*/}

                <button className=" inline bg-green-600 px-5" onClick={() => this.update("UP")}>+</button>
                <div className="inline mx-5 font-bold">{this.state.count}</div>
                <button className="inline bg-purple-600 px-5" onClick={() => this.update("DOWN")}>-</button>
            </div>
        );
    }

}

export default App

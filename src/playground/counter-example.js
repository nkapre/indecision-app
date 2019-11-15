class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.onClickAddOne = this.onClickAddOne.bind(this);
        this.onClickMinusOne = this.onClickMinusOne.bind(this);
        this.onClickReset = this.onClickReset.bind(this);
        this.state = {
            count: 0
        }
    }
    onClickAddOne() {
        this.state.count += 1;
        this.setState((prevState) => {
            return {
                count: prevState.count++
            };
        });
    }

    onClickMinusOne() {
        this.setState((prevState) => {
            return {
                count: --prevState.count
            };
        });
    }

    onClickReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.onClickAddOne}>+1</button>
                <button onClick={this.onClickMinusOne}>-1</button>
                <button onClick={this.onClickReset}>Reset</button>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem('count', this.state.count);
    }

    componentDidMount() {
        const countStr = localStorage.getItem ('count');
        const countNum = parseInt(countStr, 10);

        if (!isNaN(countStr)) {
            this.setState(() => ({ count: countNum }))
        }
    }

}

ReactDOM.render(<Counter count={0}/>, document.getElementById('app'));



// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const getCount = () => {
//     return count;
// }



// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick = {minusOne}>-1</button>
//             <button onClick = {reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);    
// }

// renderCounterApp();
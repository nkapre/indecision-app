class VisibleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.showOrHide = this.showOrHide.bind(this);

        this.state = {
            name: "Visibility Toggle App",
            title: "Visibility Toggle",
            visible: false
        }
    }

    showOrHide () {
        this.setState((prevstate) => {
            return {
                visible: !prevstate.visible
            }
        });
        // visibilityApp.visible = !visibilityApp.visible;
        // renderVisibilityAppTemplate();
    }
    
    getVisibleOrHidden (visibleOrNot) {
        if (visibleOrNot) {
            return <p visible>This is my trial visibility</p>
        }
        
    }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.showOrHide}>
                    {!this.state.visible ? 'Show Details' : 'Hide Details'}
                </button>
                {this.getVisibleOrHidden(this.state.visible)}
            </div>
    
        );
    
    }
    
}

ReactDOM.render(<VisibleComponent/>, document.getElementById('app'));
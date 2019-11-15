import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            //title: 'Indecision',
            subTitle: 'Put your life in the hands of a computer',
            options: props.options
        }
    }

    // handleDeleteOptions() {
    //     this.setState (() => {
    //         return {
    //             options: []
    //         };
    //     });
    // }

    handleDeleteOptions() {
        this.setState (() => ({options: []}));
    }

    handleDeleteOption (elem) {
        console.log('deleted ' + elem);
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return elem !== option;
            })
        }));
    }

    handlePick() {
        const randomNum = Math.floor (Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(option);
        return option;
    }

    handleAddOption (optionToAdd) {
        if (!optionToAdd) {
            return 'Enter a valid option to add'
        }
        else if (this.state.options.indexOf(optionToAdd) > -1) {
            return 'Duplicate option entered'
        }

        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat([optionToAdd])
        //     }
        // });
        this.setState((prevState) => ({options: prevState.options.concat([optionToAdd])}));

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length != this.state.options.length) {
            console.log('Saving data')
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if (options) {
                this.setState(() => ({ options}))
            }
        } catch (e) {

        }
    }

    render() {
        return (
            <div>
                <Header /*title={this.state.title}*/ subTitle={this.state.subTitle}/>
                <Action 
                    hasOptions={this.state.options.length} 
                    optionPicked={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteOption={this.handleDeleteOption}   
                />
                <AddOption handleAddOption={this.handleAddOption}/>
                
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: ["Default Option 1"]
}

export default IndecisionApp;
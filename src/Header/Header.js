import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { textFieldValue: ''}

        /* Binds the value of 'this' in the current context as the 'this' inside of the handleChange function */ 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ textFieldValue: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.recipesByNameHandler(this.state.textFieldValue);
        this.setState({ textFieldValue: '' });

    }

    generateLetterButtons() {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
            <button className='btn-letter' onClick={() => this.props.recipeByLetterHandler(letter)}>
                {letter}
            </button>
        ));
    }

    render() {
        return(
            <div>
                <div>
                    <h1 className='recipeFinder'>Recipe Finder</h1>
                </div>
            <p className='recipeByLetter'>Get Recipes By Letter</p>
            {this.generateLetterButtons()}
                <div>
                    <div>
                    <p className='recipeByKeyword'>Get Recipes By Keyword</p>
                    <form onSubmit={this.handleSubmit}>
                        <input className='textBox' type='text' value={this.state.textFieldValue} onChange={this.handleChange} />
                        <input className='submitText' type='submit' value='Submit' />
                    </form>
                    </div>
                    <div className='randomRecipeDiv'>
                        <p className='randomRecipe'>Get Random Recipe</p>
                        <button onClick={() => this.props.randomRecipeHandler()} className='submitBtn'>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
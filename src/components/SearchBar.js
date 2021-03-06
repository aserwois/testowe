import React from 'react'

class SearchBar extends React.Component {
    state = {
        inputValue: '',
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.inputValue);
    }

    render() {

        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text"
                            value={this.state.inputValue}
                            onChange={e=>this.setState({inputValue: e.target.value})}
                        ></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
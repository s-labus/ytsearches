import React from 'react';

class Search extends React.Component {

    state = { query: '' };

    onInputChange = (event) => {
        this.setState({
            query: event.target.value
        });
        //updates state property
    }

    onFormSubmit = (event) => {
        event.preventDefault(); // stops page reload
        this.props.onFormSubmit(this.state.query);
    }

    render() {
        return (
            <div className="ui fluid icon input">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui icon input">
                        <input type="text" placeholder="Search youtube videos" value={this.state.query} onChange={this.onInputChange} />
                        <i className="search icon"></i>
                    </div>
                </form>
            </div>);
    }
}

export default Search;
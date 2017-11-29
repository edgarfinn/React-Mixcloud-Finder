import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    };
  }
  render() {
    return (
      <input
        type="text"
        placeholder={"search"}
        onChange={ event => { this.onInputChange(event.target.value)}}
        value={this.state.searchTerm}
      />
    )
  }

  onInputChange(searchTerm) {
    this.setState({searchTerm: searchTerm});
    this.props.onSearchTermChange(searchTerm);
  }
}

export default SearchBar;

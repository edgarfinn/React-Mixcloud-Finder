import React, {Component} from 'react';
import './search_bar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    };
  }

  onInputChange(searchTerm) {
    this.setState({searchTerm});
    this.props.onSearchTermChange(searchTerm);
  }

  render() {
    return (
        <input className="search-bar-input large-3 large-centered" type="text" placeholder={"search"} onChange= { (event) => this.onInputChange(event.target.value) } value={this.state.searchTerm}/>
    )
  }

}

export default SearchBar;

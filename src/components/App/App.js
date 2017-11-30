import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/search_bar';
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);

  }

// trim
// to lower case
// replace ' ' with '+'

  formatSearchTerm(rawSearchTerm) {
    return rawSearchTerm.trim().toLowerCase().replace(/ /g, '+');
  }

  formatSearchUrl(searchTerm) {
    return "https://api.mixcloud.com/search/?q="+searchTerm+"&type=cloudcast";
  }

  MCSearch(searchUrl, responseCallback) {
/*    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const reponse = JSON.parse(xhr.responseText);
        responseCallback(reponse)
      }
    };
    xhr.open("GET", searchUrl);
    xhr.send();
    */
    return axios.get(searchUrl)
    .then((response) => {
      responseCallback(response)
    })
    .catch((err) => {
      if (err) {
        console.log('Error with: ' + err.message);
        return;
      }
    })
  }

  handleSearchResults(MCApiResponse) {
    console.log("Mixes found: ", MCApiResponse);
  }




  render() {
    return (
      <div className="App">
        <SearchBar onSearchTermChange={
          searchTerm => this.MCSearch(
            this.formatSearchUrl(
              this.formatSearchTerm(searchTerm)
            ), this.handleSearchResults
          )
        } />
      </div>
    );
  }
}

export default App;

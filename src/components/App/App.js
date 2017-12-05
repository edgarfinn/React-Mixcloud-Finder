import React, {Component} from 'react';
import axios from 'axios';

// components and custom modules
import './App.css';
import SearchBar from '../SearchBar/search_bar';
import MixList from '../MixList/mix_list';
import MixEmbed from '../MixEmbed/mix_embed';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      mixes: [],
      selectedMix: null
    }

    // this.MCSearch('bonobo')

  }

  formatSearchTerm(rawSearchTerm) {
    return rawSearchTerm.trim().toLowerCase().replace(/ /g, '+');
  }

  formatSearchUrl(searchTerm) {
    return "https://api.mixcloud.com/search/?q=" + searchTerm + "&type=cloudcast";
  }

  MCSearch(searchTerm) {
    if (searchTerm.trim() === '') {
      this.setState({mixes: []})
    } else {
      const searchQuery = this.formatSearchUrl(this.formatSearchTerm(searchTerm))

      return (axios.get(searchQuery).then(res => {
        const mixes = res.data;
        this.setState({mixes})
      }).catch((err) => {
        if (err) {
          console.log('MCSearh Error: ' + err.message);
          return;
        }
      }))
    }
  }

  render() {

    return (

      <div className="App">

        <SearchBar
          onSearchTermChange= { (searchTerm) => { this.MCSearch(searchTerm)} }/>

        <section className="section-selected-mix large-6">
          selected
        </section>
        <aside className="aside-list large-6 large-push-1">
          <MixList
            onMixSelect={(selectedMix) => { this.setState({selectedMix})}}
            mixes={this.state.mixes}
          />
        </aside>

        {this.state.selectedMix && <MixEmbed mix={this.state.selectedMix}/>
}

      </div>
    );
  }
}

export default App;

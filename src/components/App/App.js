import React, {Component} from 'react';
import axios from 'axios';

// components and custom modules
import './App.css';
import Header from '../Header/header';
import CurrentMix from '../CurrentMix/current_mix';
import MixList from '../MixList/mix_list';
import MixEmbed from '../MixEmbed/mix_embed';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      mixes: [],
      selectedMix: null,
      nowPlayingTitle: null
    }

    // this.MCSearch('Dixon')

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
        <Header onSearchTermChange= { (searchTerm) => { this.MCSearch(searchTerm)} } />
        <section className="section-selected-mix large-5 large-offset-1">
          <CurrentMix title={this.state.nowPlayingTitle}/>

        </section>
        <aside className="aside-list large-5 large-pull-1">
          <MixList
            onMixSelect={(selectedMix, title) => { this.setState({selectedMix, nowPlayingTitle: title})}}
            mixes={this.state.mixes}
          />
        </aside>

        {this.state.selectedMix && <MixEmbed mix={this.state.selectedMix}/>}

      </div>
    );
  }
}

export default App;

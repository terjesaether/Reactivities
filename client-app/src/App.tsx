import React, { Component } from 'react';
import { Header, Icon, List } from '../node_modules/semantic-ui-react';
import './App.css';
import axios from '../node_modules/axios';

class App extends Component {
  state = {
    values: []
  };

  componentDidMount() {
    axios.get('http://localhost:5100/api/values').then(response => {
      this.setState({
        values: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;

import React from 'react';
import axios from 'axios';
import '../App.css';

export default class BeatboxersTable extends React.Component {
  state = {
    beatboxers: []
  }

  componentDidMount() {
    axios.get('/api/beatboxers')
      .then(res => {
        const beatboxers = res.data;
        this.setState({ beatboxers });
      })
  }

  render() {
      let table_row;
      let tr;
      table_row = this.state.beatboxers.map((beatboxer, instagram_username) => {
        return <tr key = {instagram_username}>
            <td width="28%">{beatboxer.beatbox_name}</td>
            <td width="28%">{beatboxer.city}</td>
            <td width="15%">{beatboxer.state}</td>
            <a target="_blank" href={`https://instagram.com/${beatboxer.instagram_username}`}><td width="29%">{beatboxer.instagram_username}</td></a>
        </tr>
      });
    return (
        <table>
            <thead>
                <tr>
                    <th>Beatbox Name</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Instagram Username</th>
                </tr>
            </thead>
            <tbody>
                {table_row}
            </tbody>
        </table>
    )
  }
}
import React from 'react';
import axios from 'axios';

export default class BeatboxerList extends React.Component {
    state = {
        beatboxers: []
    }

    componentDidMount() {
        axios.get('/api/beatboxers')
            .then(res => {
                const beatboxers = res.data
                this.setState({ beatboxers });
            })
    }

    render() {
        return (
            <ul>
                { this.state.beatboxers.map(beatboxer => <li>{beatboxer.beatbox_name}</li>)}
            </ul>
        )
    }
}
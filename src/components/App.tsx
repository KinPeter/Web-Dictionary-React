import React from 'react';
import axios from 'axios';
import Result from '../interfaces/Result';

import './App.scss';

const dictUrl: string = 'https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/e/2PACX-1vST-KJ2L6WJJLRw9phcMslOIumSFrjPXY9UUnzw3X9Urq1vwRrDoVhlTiGwuPSda8XRJPolPR65XBD7/pub?gid=0&single=true&output=tsv';

type AppState = {
    wordList: {
        kor: string[],
        hun: string[]
    },
    searchTerm: string,
    results: Result[]
}

class App extends React.Component {
    state: AppState;

    constructor(props: any) {
        super(props)
        this.state = {
            wordList: {
                kor: [],
                hun: []
            },
            searchTerm: '',
            results: []
        }
    }

    componentDidMount() {
        const korList: string[] = [];
        const hunList: string[] = [];
        axios.get(dictUrl).then((result: any) => {
            const lines = result.data.split(/\r\n/);
            lines.forEach((line: string) => {
                const pair = line.split(/\t/);
                korList.push(pair[0]);
                hunList.push(pair[1]);
            });
            this.setState({wordList: {kor: korList, hun: hunList}});
        }).catch((reason) => {
            // TODO Error handling
            console.log(reason);
        });
    }

    render() {
        return (
            <div className="App">
    
            </div>
        );
    }
}

export default App;

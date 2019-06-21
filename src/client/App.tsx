import * as React from 'react';

import './scss/app';

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = { stocks: [] };
    }

    async componentWillMount() {
        let r = await fetch('/api/stocks');
        let stocks = await r.json();
        this.setState({ stocks })
    }

    render () {
        return (
            <main className="container">
                <h1 className="covalence-blue">Stocks !</h1>
                <ul className="list-stocks">
                    {this.state.stocks.map(stock => {
                        return <li className="list-group-item">{stock.title}</li>
                    })}
                </ul>
                <h2>App.tsx</h2>
            </main>
        )
    }
}

interface IAppProps {

}

interface IAppState {
    stocks: Array<{title: string, body: string}>;
}
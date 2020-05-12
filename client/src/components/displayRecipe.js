import React from 'react';

export default class DisplayRecipe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <ol>
                    {this.props.ingredients.map((value) => {
                        return <li>{value}</li>
                    })}
                </ol>
            </div>
        )
    }
}
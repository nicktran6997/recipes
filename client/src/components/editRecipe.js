import React from 'react';

export default class EditRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currTitle: this.props.title,
            currIngredient: '',
        }
    }

    updateTitle(value) {
        this.setState({
            currTitle: value,
        })
    }

    updateIngredient(value) {
        this.setState({
            currIngredient: value
        })
    }

    submitNewIngred() {
        this.props.setTitle(this.state.currTitle);
        this.props.submitIngred(this.state.currIngredient);
        this.updateIngredient("");
    }

    removeIngred(index) {
        this.props.removeIngred(index);
    }
    render() {
        const blockStyle = {display: "block"}
        return (
            <div >
                <input onChange={(e)=>this.updateTitle(e.target.value)} placeholder={this.props.title} style={blockStyle}/>
                <ol>
                   {this.props.ingredients.map((value, index) => {
                       return <li>{value} <button onClick={()=>this.removeIngred(index)}>X</button></li>  
                   })} 
                </ol>

                <input 
                    onChange={(e)=>this.updateIngredient(e.target.value)} 
                    placeholder="Add new ingredient!" 
                    value = {this.state.currIngredient}
                    type="text"
                    />
                <button type="button" onClick={()=>this.submitNewIngred()} >Add!</button>
            </div>
        )
    }
}
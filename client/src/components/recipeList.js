import React from 'react';
import EditRecipe from './editRecipe';
import DisplayRecipe from './displayRecipe';
export default class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cuisine: '',
            ingredientList: [],
            isEdit: true,
        }
        this.updateCuisine = this.updateCuisine.bind(this);
        this.submitNewIngredient = this.submitNewIngredient.bind(this);
        this.removeIngredient = this.removeIngredient.bind(this);
    }

    updateCuisine(value) {
        this.setState({
                cuisine: value,
        })
    }

    submitNewIngredient(value) {
        this.setState(state=> {
            const ingredientList = state.ingredientList.concat(value);
            return {ingredientList,}
        })
    }

    updateEdit() {
        this.setState(state => ({isEdit: !state.isEdit,}
        ))
    }

    removeIngredient(removeIndex) {
        this.setState(state => ({ingredientList: this.state.ingredientList.filter((elem, index) => index != removeIndex)}))
    }

    render() {
        const edit = <EditRecipe 
                        setTitle={this.updateCuisine} 
                        submitIngred={this.submitNewIngredient}
                        title = {this.state.cuisine}
                        ingredients = {this.state.ingredientList}
                        removeIngred = {this.removeIngredient}
                        />;
        const display = <DisplayRecipe title={this.state.cuisine} ingredients={this.state.ingredientList}/>;
        return (
            <div>
                {(this.state.isEdit) ?  edit : display}
                <button onClick={()=>this.updateEdit()}>{this.state.isEdit ? "Display" : "Edit"}</button>
                <button type="submit" value="Submit!">Submit!</button>
            </div>
        )
    }
}
import { Component } from "react";

class Form extends Component {
    state = {
    name: '',
    number: ''
    }

    // nameInputId.id = nanoid();

    handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
    }

    handleNumberChange = event => {
    this.setState({ number: event.currentTarget.value })
    }

    
    handleSubmit = event => {
    event.preventDefault();  
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({name: '', number: ''})
    }

    render() {
        return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Name
        <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleNameChange}
             />
            </label>
            <label>
        Number
        <input
            
            value={this.state.number}
            onChange={this.handleNumberChange}
             />
      </label>
      <button type="submit">Add contacts</button>
      </form>  
        )
    }
}

export default Form;
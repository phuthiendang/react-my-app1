import React from 'react';

export default class ExpensesForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : "",
            amount: props.expense ? props.expense.amount : "",
            error: "",
            button: props.expense ? "Edit Expense" : "Add Expense"
        };
    };
    onDescriptionChannge = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onAmountChannge = (e) => {
        const amount = e.target.value;
        if (!amount || (amount.match(/^\d*(\.*\d{0,2})/))) {
        this.setState(() => ({ amount }));
    }};
    onSubmit = e => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            console.log('aaaa');
            this.setState(() => ({error:"dumb!"}))
        } else {
            this.setState(() => ({error:"dumb dumb!"}))
            this.props.onSubmit ({
                description: this.state.description,
                amount: this.state.amount
            })
        }
    };
    
    render() {
        return (
            <div>
                <form>
                    <h1>{this.state.error}</h1>
                    <input value={this.state.description} type='text' placeholder='description' autoFocus onChange={this.onDescriptionChannge}/>
                    <input value={this.state.amount} type='text' placeholder='amount' onChange={this.onAmountChannge}/>
        <button onClick={this.onSubmit} type='submit'>{this.state.button}</button>
                </form>
            </div>
        )
    }
}
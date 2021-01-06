import React from 'react'

export default class GifSearch extends React.Component{

    state = {
        query: ''
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.query)
    }

    handleChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}> 
                <label>
                    Begin Your Search With A Term
                </label><br/>
                <input type='text' name='query' value={this.state.query} onChange={this.handleChange}/>
                <button>Find Gifs</button>
            </form>
        )
    }

}
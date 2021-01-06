import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GiftListContainer extends React.Component{

    state ={
        gifArray: []
    }


    handleSubmitForm = () => {
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=QoCL7Iv4Pzy1wM2Piiz9O0MwsMzppF8X')
        .then(res => res.json())
        .then(data => {
            const threeGifs = data.data.slice(0, 3)
            this.setState({
                gifArray: threeGifs
            })
        })
    }
    

    render(){
        return(
            <div>
                <GifSearch onSubmit={this.handleSubmitForm}/>
                <GifList gifsList={this.state.gifArray}/> 
            </div>
        )
    }

}
import React from 'react'

export default class GifList extends React.Component{

    renderGifs = () => {
        return this.props.gifsList.map( gif => <li><img key={gif.id} alt={gif.title} src={gif.images.original.url}/></li>)
    }
    

    render(){
        return(
            <ul>
                {this.renderGifs()}
            </ul>
        )

    }

}
import React, { Component } from 'react'

const STYLES = {
    parent: {
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      },
      imgStyle: {
        maxWidth: '400px',
        maxHeight: '400px'
      }
    }
  }

export default class ProductItem extends Component {
    render () {
        const { baseIMGURL, image, name, price } = this.props

        return(
            <div style={STYLES.parent.style}>
                <img 
                  style={STYLES.parent.imgStyle} 
                  key={image} 
                  src={`${baseIMGURL}${image}`} 
                  alt="" className="img-responsive" 
                />
                <div>
                    {name}
                    <br/>
                    {price} AED
                </div>
             </div>
        )
    }
}

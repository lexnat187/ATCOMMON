import React, { Component } from 'react'

const baseURL = 'https://prod2.atgcdn.ae/small_light(p=listing2x,of=webp)/pub/media/catalog/product/'

const STYLES = {
    parent: {
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      },
      bodyStyle: {
        backgroundColor: '#f4f4f4'
      },
      contentStyle: {
        color: '#262626'
      }
    }
  }

export default class ProductItem extends Component {
    render () {
        const { image, name, price } = this.props

        return(
            <div style={STYLES.parent.style}>
                <img key={image} src={`${baseURL}${image}`} alt="" className="img-responsive" />
                <div>
                    {name}
                    <br/>
                    {price} AED
                </div>
             </div>
        )
    }
}

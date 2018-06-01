// import Snackbar from 'material-ui/Snackbar'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

import ProductItem from './ProductItem'

const STYLES = {
  topParent:{
    style: {
        display: 'inline-block'
    }
  },
  containerLG: {
    style: {
        display: 'grid',
        gridGap: '5px',
        gridTemplateColumns: 'repeat(2, 500px)',
        gridTemplateRows: 'repeat(auto-fit, 650px)'
    }
  },
  containerSM: {
    style: {
        display: 'grid',
        gridGap: '5px',
        gridTemplateColumns: 'repeat(1, 500px)',
        gridTemplateRows: 'repeat(auto-fit, 650)'
    }
  }
}

class Products extends Component {

    constructor() {
        super()
        this.state = {
            products: {}
        }
    }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.searchResult && this.props.searchResult !== nextProps.searchResult) {
        this.setState({
            products: nextProps.searchResult
        })
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  renderProducts = () => {
    const { products } = this.state

    let productsToRender 
    if (products && products.hits){
        productsToRender = products.hits.map((product, index) => {
            if (index < 15) {
                return <ProductItem image={product.image} name={product.name} price={product.price} />
            }
        })
    }
    
    return productsToRender
  }

  render () {
    return (
        <div style={STYLES.topParent.style}>
            {/* Products
            <br /> */}
            <MediaQuery query="(min-device-width: 1224px)">
                <div style={STYLES.containerLG.style} >
                    {this.renderProducts()}
                </div>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 1224px)">
                <div style={STYLES.containerSM.style} >
                    {this.renderProducts()}
                </div>
            </MediaQuery>
        </div>
    )
  }
}

Products.propTypes = {
    searchResult: PropTypes.object,
//   actions:  search: PropTypes.func.isRequired
}

export default Products

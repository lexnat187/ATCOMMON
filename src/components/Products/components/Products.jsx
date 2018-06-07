import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ProductItem from './ProductItem'

const STYLES = {
  topParent:{
    style: {
        display: 'inline-block',
        marginTop: '20px'
    }
  }
}

const Content = styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(2, 440px);
    grid-template-rows: repeat(auto-fit, 440px);

    @media (max-width: 1224px) {
        grid-template-columns: repeat(1, 440px);
    }
`;

class Products extends Component {

    constructor() {
        super()
        this.state = {
            products: {},
            baseIMGURL: ''
        }
    }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.searchResult && this.props.searchResult !== nextProps.searchResult) {
        this.setState({
            products: nextProps.searchResult
        })
    }
  }

  renderProducts = () => {
    const { products } = this.state
    const { baseIMGURL } = this.props

    let productsToRender 
    if (products && products.hits){
        productsToRender = products.hits.map((product, index) => {
            if (index < 15) {
                return <ProductItem baseIMGURL={baseIMGURL} image={product.image} name={product.name} price={product.price} />
            }
        })
    } else {
        productsToRender = ("...No Results...")
    }
    
    return productsToRender
  }

  render () {
    return (
        <div style={STYLES.topParent.style}>
            <Content >
                {this.renderProducts()}
            </Content>
        </div>
    )
  }
}

Products.propTypes = {
    searchResult: PropTypes.object,
}

export default Products

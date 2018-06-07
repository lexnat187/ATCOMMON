import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'

import ProductItem from './ProductItem'

const STYLES = {
  topParent:{
    style: {
        display: 'inline-block',
        marginTop: '20px'
    }
  },
  containerLG: {
    style: {
        display: 'grid',
        gridGap: '5px',
        gridTemplateColumns: 'repeat(2, 440px)',
        gridTemplateRows: 'repeat(auto-fit, 440px)'
    }
  },
  containerSM: {
    style: {
        display: 'grid',
        gridGap: '5px',
        gridTemplateColumns: 'repeat(1, 440px)',
        gridTemplateRows: 'repeat(auto-fit, 440)'
    }
  }
}

const Content = styled.div`
    display: 'grid',
    gridGap: '5px',
    gridTemplateColumns: 'repeat(2, 440px)',
    gridTemplateRows: 'repeat(auto-fit, 440px)

    @media (max-width: 1224px) {
        display: 'grid',
        gridGap: '5px',
        gridTemplateColumns: 'repeat(1, 440px)',
        gridTemplateRows: 'repeat(auto-fit, 440)'
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
            {/* <MediaQuery query="(min-device-width: 1224px)">
                <div style={STYLES.containerLG.style} >
                    {this.renderProducts()}
                </div>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 1224px)">
                <div style={STYLES.containerSM.style} >
                    {this.renderProducts()}
                </div>
            </MediaQuery> */}

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

// import Snackbar from 'material-ui/Snackbar'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FilterButton from '../containers/FilterButton'

const STYLES = {
    topParent:{
      style: {
          maxWidth: '75%',
          display: 'inline-block'
      }
    }
  }

class Filters extends Component {

    constructor() {
        super()
        this.state = {
            filters: {
                blue: '#223ad6',
                lime: '#32cd32',
                red: '#ff0009'
            }
        }
    }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.filterResult && this.props.filterResult !== nextProps.filterResult) {
        this.setState({
            filterResult: nextProps.filterResult
        })
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  componentDidMount () {
      this.props.actions.getFilters()
  }

  renderColourButtons = () => {
    const { filters, filterResult } = this.state

    let buttons 
    if (filterResult) {
        buttons = Object.keys(filterResult).map((filterkey, index) => {
            return <FilterButton colourKey={filterkey} colour={filterResult[filterkey]} index={index} /> 
        })
    } else {
        buttons = Object.keys(filters).map((filterkey, index) => {
            return <FilterButton colourKey={filterkey} colour={filters[filterkey]} index={index} /> 
        })
    }

    return buttons
  }

  render () {
    return (
        <div style={STYLES.topParent.style}>
            Filter by colour:
            <br />
            {this.renderColourButtons()}
        </div>
    )
  }
}

Filters.propTypes = {
    filterResult: PropTypes.string,
//   actions:  search: PropTypes.func.isRequired
}

export default Filters

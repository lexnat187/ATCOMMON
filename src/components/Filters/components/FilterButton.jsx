import React, { Component } from 'react'
import PropTypes from 'prop-types'


class FilterButton extends Component {

    constructor() {
        super()
        this.state = {
            searchQuery: ''
        }
    }
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.searchQuery && this.props.searchQuery !== nextProps.searchQuery) {
            this.setState({
                searchQuery: nextProps.searchQuery
            })
        }
    }
    
    setFilterColour = (colourKey) => {
        const { searchQuery } = this.state
        this.props.actions.search(searchQuery, colourKey)
    }
    
    render () {
        const { colourKey, colour, index } = this.props

        // console.log('rendering button: ' + colour)
        return(
            <button 
                key={index}
                style={{
                    width: '30px',
                    height: '30px',
                    padding: '6px 0px',
                    borderRadius: '15px',
                    backgroundColor: colour
                }} 
                onClick={() => this.setFilterColour(colourKey)} 
            />
        )
    }
}

FilterButton.propTypes = {
        searchQuery: PropTypes.string,
    //   notification: PropTypes.object,
        search: PropTypes.func.isRequired
    }
    
export default FilterButton
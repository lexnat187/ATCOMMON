import { connect } from 'react-redux'

import Products from '../components/Products'

const mapStateToProps = (state) => ({
    searchResult: state.search.searchResult
})

export default connect(mapStateToProps, null)(Products)

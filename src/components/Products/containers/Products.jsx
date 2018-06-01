import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

import Products from '../components/Products'
// import { search } from '../../../actions'

const mapStateToProps = (state) => ({
    searchResult: state.search.searchResult
})

// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators({
//     search
//   }, dispatch)
// })

export default connect(mapStateToProps, null)(Products)

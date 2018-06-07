import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FilterButton from '../components/FilterButton'
// import { search } from '../../../actions'

const mapStateToProps = (state) => ({
    searchQuery: state.search.searchQuery
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    search: null
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton)

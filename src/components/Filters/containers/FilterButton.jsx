import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FilterButton from '../components/FilterButton'
// import { search } from '../../../actions'

const mapStateToProps = (state) => ({
    filterResult: state.filters.filterResult,
    searchQuery: state.search.searchQuery,
    searchFilter: state.search.searchFilter
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    search: null
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton)

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Filters from '../components/Filters'
import { getFilters } from '../../../actions'

const mapStateToProps = (state) => ({
    filterResult: state.filters.filterResult
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getFilters
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)

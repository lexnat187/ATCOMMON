import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SearchBar from '../components/SearchBar'
import { search } from '../../../actions'

const mapStateToProps = (state) => ({
    searchResult: state.search.searchResult
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    search
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)

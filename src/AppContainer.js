import { connect } from 'react-redux'

import App from './App'

const mapStateToProps = state => ({
  character: state.oneCharacter,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)
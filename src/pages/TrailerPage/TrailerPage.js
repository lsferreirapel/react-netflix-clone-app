import { connect } from 'react-redux';
import { pick } from 'lodash-es';
import { TrailerPage } from './TrailerPage';

function mapStateToProps(state) {
  return pick(state.data, [
    'addData',
  ]);
}

// export default connect(mapStateToProps)(TrailerPage)

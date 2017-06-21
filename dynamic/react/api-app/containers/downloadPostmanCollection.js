import {connect} from 'react-redux';
import actions from '../../shared/actions';
import PostmanCollection from '../components/postmanCollection';

const mapStateToProps = (state) => {
    return {
        apiType: state.apiType,
        auth: state.auth,
        postmanCollection: state.postmanCollection
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAuthKeyChange: (keyName, e) => {
            dispatch(actions.updateAuthKey(keyName, e));
        }
    };
};

const DownloadPostmanCollection = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostmanCollection);

export default DownloadPostmanCollection;

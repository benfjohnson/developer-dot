import {connect} from 'react-redux';
import actions from '../actions';
import PostmanCollection from '../components/postmanCollection';

const mapStateToProps = (state) => {
    return {
        apiType: state.apiType,
        appLoaded: state.appLoaded,
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

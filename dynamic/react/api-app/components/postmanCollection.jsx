import React from 'react';
import PropTypes from 'prop-types';

const PostmanCollection = ({apiType, appLoaded, auth, onAuthKeyChange, postmanCollection}) => {
    if (apiType !== 'REST') {
        return null;
    }

    const fileName = postmanCollection.info.name.replace(/\s/g, '-') + '-postman-collection.json';

    const json = JSON.stringify(postmanCollection);

    const blob = (appLoaded && typeof Blob !== 'undefined') ? new Blob([json], {type: 'application/json'}) : null;

    const url = (appLoaded && typeof URL !== 'undefined') ? URL.createObjectURL(blob) : null;

    const clickHandler = () => {
        if (appLoaded && typeof window !== 'undefined' && typeof window.navigator.msSaveOrOpenBlob !== 'undefined') {
            window.navigator.msSaveOrOpenBlob(blob, fileName);
            return false;
        }
        return true;
    };

    return (
        <div>
            {auth && auth.params ? (
                <form>
                    <h4><a href={'/avatax/signup/'}>{'Have development credentials?'}</a>{' Generate a Postman Collection with your account info!'}</h4>
                    {Object.keys(auth.params).map((param, i) => (
                        <fieldset className={'form-group'} key={i}>
                            <label className={'api-label-text'}>{param}</label>
                            <input className={'form-control auth-input'} onChange={onAuthKeyChange.bind(null, param)} type={'password'} value={auth.params[param]} />
                        </fieldset>
                    ))}
                </form>
                ) : null}
            <a download={fileName} href={url} onClick={clickHandler}><button className='btn btn-primary'>{'Download a Postman collection!'}</button></a>
        </div>
    );
};

PostmanCollection.displayName = 'Postman Collection';
PostmanCollection.propTypes = {
    apiType: PropTypes.string.isRequired,
    appLoaded: PropTypes.bool.isRequired,
    auth: PropTypes.shape({
        formula: PropTypes.string.isRequired,
        params: PropTypes.objectOf(PropTypes.string.isRequired)
    }),
    onAuthKeyChange: PropTypes.func.isRequired,
    postmanCollection: PropTypes.shape({
        info: PropTypes.shape({
            /* eslint-disable camelcase */
            _postman_id: PropTypes.string.isRequired,
            /* eslint-enable camelcase */
            description: PropTypes.string,
            name: PropTypes.string.isRequired,
            schema: PropTypes.string.isRequired
        }).isRequired,
        item: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            request: PropTypes.shape({
                body: PropTypes.shape({
                    mode: PropTypes.oneOf(['raw', 'formdata']).isRequired,
                    raw: PropTypes.string,
                    formdata: PropTypes.array
                }).isRequired,
                description: PropTypes.string,
                header: PropTypes.arrayOf(PropTypes.shape({
                    key: PropTypes.string.isRequired,
                    value: PropTypes.string.isRequired
                })).isRequired,
                method: PropTypes.oneOf(['get', 'GET', 'put', 'PUT', 'post', 'POST', 'delete', 'DELETE', 'head', 'HEAD']).isRequired,
                url: PropTypes.string.isRequired
            }).isRequired,
            response: PropTypes.array
        })).isRequired
    }).isRequired
};

export default PostmanCollection;

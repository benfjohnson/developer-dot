import React from 'react';

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
                            <input className={'form-control'} onChange={onAuthKeyChange.bind(null, param)} type={'password'} value={auth.params[param]}></input>
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
    apiType: React.PropTypes.string.isRequired,
    appLoaded: React.PropTypes.bool.isRequired,
    auth: React.PropTypes.shape({
        formula: React.PropTypes.string.isRequired,
        params: React.PropTypes.objectOf(React.PropTypes.string.isRequired)
    }),
    onAuthKeyChange: React.PropTypes.func.isRequired,
    postmanCollection: React.PropTypes.shape({
        info: React.PropTypes.shape({
            /* eslint-disable camelcase */
            _postman_id: React.PropTypes.string.isRequired,
            /* eslint-enable camelcase */
            description: React.PropTypes.string,
            name: React.PropTypes.string.isRequired,
            schema: React.PropTypes.string.isRequired
        }).isRequired,
        item: React.PropTypes.arrayOf(React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            request: React.PropTypes.shape({
                body: React.PropTypes.shape({
                    mode: React.PropTypes.oneOf(['raw', 'formdata']).isRequired,
                    raw: React.PropTypes.string,
                    formdata: React.PropTypes.array
                }).isRequired,
                description: React.PropTypes.string,
                header: React.PropTypes.arrayOf(React.PropTypes.shape({
                    key: React.PropTypes.string.isRequired,
                    value: React.PropTypes.string.isRequired
                })).isRequired,
                method: React.PropTypes.oneOf(['get', 'GET', 'put', 'PUT', 'post', 'POST', 'delete', 'DELETE']).isRequired,
                url: React.PropTypes.string.isRequired
            }).isRequired,
            response: React.PropTypes.array
        })).isRequired
    }).isRequired
};

export default PostmanCollection;

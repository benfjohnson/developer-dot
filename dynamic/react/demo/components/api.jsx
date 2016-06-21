import React from 'react';

const sanitizeSwagger = (api) => {
    const routes = Object.keys(api.paths).map((path) => {
        return Object.keys(api.paths[path]).map((action) => {
            return {
                path: path,
                action: action,
                name: api.paths[path][action].summary,
                description: api.paths[path][action].description
            };
        });
    });

    return [].concat(...routes);
};

const ApiComponent = (props) => {
    const routes = sanitizeSwagger(props.api);

    console.log('swagger', props.api);
    console.log('sanitized', routes);

    const routeHTML = routes.map((r, i) => (
        <div key={i}>
            <h2>{r.name}</h2>
            <table>
                <tr>
                    <td><strong>{'Description'}</strong></td>
                    <td>{r.description}</td>
                </tr>
                <tr>
                    <td><strong>{'Endpoint'}</strong></td>
                    <td>{r.path}</td>
                </tr>
                <tr>
                    <td><strong>{'HTTP Method'}</strong></td>
                    <td>{r.action}</td>
                </tr>
            </table>
        </div>
    ));

    return (
        <div>
            {routeHTML}
        </div>
    );
};

ApiComponent.displayName = 'API';
ApiComponent.propTypes = {
    api: React.PropTypes.object.isRequired
};

export default ApiComponent;

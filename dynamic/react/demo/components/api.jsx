import React from 'react';

const ApiComponent = (props) => {
    const routeHTML = props.api.map((r, i) => (
        <div key={i}>
            <h2>{r.name}</h2>
            <table>
                <tbody>
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
                </tbody>
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
    api: React.PropTypes.array.isRequired
};

export default ApiComponent;

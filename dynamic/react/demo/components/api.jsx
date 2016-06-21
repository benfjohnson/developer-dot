import React from 'react';

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted.');
};

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
            <form>
                <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
                <button className="btn btn-default">Fill Sample Data</button>
                <button className="btn btn-default" type="reset">Reset</button>
            </form>
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

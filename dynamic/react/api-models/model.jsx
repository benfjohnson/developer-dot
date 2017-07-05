import React from 'react';
import {ModelType} from 'prop-types';
import ReactMarkdown from 'react-markdown';
import ModelProperty from './model-property';

const Model = ({m, name}) => (
    <div className='model-summary' id={name}>
        <h1>{name}</h1>
        {m.description ?
            <div>
                <h2 id='description'>{'Description'}</h2>
                <ReactMarkdown source={m.description} />
            </div> : null
        }
        {m['x-methods-used-in'].length ?
            <div>
                <h2 id='references'>{'References'}</h2>
                <p>{'This model is used in the following APIs:'}</p>
                <ul>
                    {m['x-methods-used-in'].map((method, i) => {
                        return (
                            <li key={i}>
                                <a href={`../../methods/${method}`}>{method}</a>
                            </li>
                        );
                    })}
                </ul>
            </div> : null
        }
        <ul className='normal' />
        <h2 id='fields'>{'Fields'}</h2>

        <table className='styled-table'>
            <thead>
                <tr>
                    <th>{'Field Name'}</th>
                    <th>{'Attributes'}</th>
                    <th>{'Summary'}</th>
                </tr>
            </thead>
            {m.properties ?
                <tbody>{Object.keys(m.properties).map((key, i) => <ModelProperty key={i} modelName={name} name={key} prop={m.properties[key]} requiredProps={m.required} />)}</tbody> :
                <tbody><ModelProperty modelName={name} name={name} prop={m} requiredProps={m.required} /></tbody>
            }
        </table>
        {m.example ?
            <div>
                <h2>{`Example ${name}`}</h2>
                <pre className='highlight'>{JSON.stringify(m.example, null, 4).replace(/'/g, '')}</pre>
            </div> : null
        }
    </div>
);

Model.displayName = 'Model';
Model.propTypes = ModelType;

export default Model;

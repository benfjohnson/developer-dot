import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const model = window.PAGE_MODEL;

const Model = ({m}) => (
    <div>
        <h1>{m.name}</h1>
        {m.description ?
            <div>
                <h2 id='description'>Description</h2>
                <p><ReactMarkdown source={m.description} /></p>
            </div> : null
        }
        {m['x-methods-used-in'].length ?
            <div>
                <h2 id='references'>References</h2>
                <p>This model is used in the following APIs:</p>
                <ul>
                    {m['x-methods-used-in'].map(method => {
                        return (
                            <li>
                                <a href={`../../methods/${method}`}>{method}</a>
                            </li>
                        );
                    })}
                </ul>
            </div> : null
        }
        <ul className='normal'></ul>
        <h2 id='fields'>Fields</h2>

        <table className='styled-table'>
            <thead>
                <tr>
                    <th>Parameters</th>
                    <th>Attributes</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {m.properties ?
                    m.properties.map(ModelProperty) :
                    null
                }
            </tbody>
        </table>
    </div>
);

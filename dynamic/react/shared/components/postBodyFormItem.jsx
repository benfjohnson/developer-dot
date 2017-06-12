import React from 'react';
import PropTypes from 'prop-types';
import PostBodyFormSection from './postBodyFormSection';

const PostBodyFormItem = ({name, itemSchema, itemValue, endpointId, displayName, canRemove, onPostBodyInputChanged, onAddItemToPostbodyCollection, onRemovePostbodyCollectionItem, showExcludedPostBodyFields}) => {
    const uid = `${endpointId}-${displayName}-${name}`;

    // If this postBodyItem is an excluded property (we don't want it to initially appear in the form) and showExcludedProps option hasn't been used for this endpoint, don't show in form input
    if (itemSchema.isExcluded && !showExcludedPostBodyFields) {
        return null;
    }

    // Simplest case: Input is a primitive field (string, bool, etc), so just render the actual input form group
    if (itemSchema.fieldType && itemSchema.fieldType !== 'array') {
        return (
            <div className={'form-group'}>
                <label className={'api-label-text'} htmlFor={uid}>{displayName}</label>
                {canRemove ?
                    <div
                        className={'clickable'}
                        onClick={onRemovePostbodyCollectionItem.bind(null, name, endpointId)}
                        style={{display: 'inline-block'}}
                    >
                            <span
                                className={'m-l-1 glyphicon glyphicon-remove'}
                                title={'Remove Item'}
                            />
                        <span>{' Remove'}</span>
                    </div> : null
                }
                {itemSchema.enum && itemSchema.enum.length ?
                    <select
                        className={'form-control'}
                        id={uid}
                        onChange={(e) => {
                            onPostBodyInputChanged(endpointId, name, e.target.value);
                        }}
                        value={itemValue || ''}
                    >
                        <option value={''}>{''}</option>
                        {itemSchema.enum.map((option, i) => (<option key={i} value={option}>{option}</option>))}
                    </select> :
                    itemSchema.fieldType === 'boolean' ?
                        <select
                            className={'form-control'}
                            id={uid}
                            onChange={(e) => {
                                let val;

                                if (e.target.value === 'true') {
                                    val = true;
                                } else if (e.target.value === 'false') {
                                    val = false;
                                } else {
                                    val = undefined;
                                }
                                onPostBodyInputChanged(endpointId, name, val);
                            }}
                            value={itemValue === true ? 'true' : (itemValue === false ? 'false' : 'undefined')}
                        >
                            <option value={'undefined'}>{''}</option>
                            <option value={'true'}>{'true'}</option>
                            <option value={'false'}>{'false'}</option>
                        </select> :
                        <input
                            className={'form-control'}
                            id={uid}
                            onChange={(e) => {
                                onPostBodyInputChanged(endpointId, name, e.target.value);
                            }}
                            value={itemValue || ''}
                        />

                }
            </div>
        );
    }

    // For arrays, can have multiple items of the same type in the form input collection, so render each of them (recursively)
    if (itemSchema.fieldType === 'array') {
        // itemSchema for an array lives in the `items` property, so grab dat
        const arraySchema = {...itemSchema.items, isExcluded: itemSchema.isExcluded};

        return (
            <div>
                <PostBodyFormSection canRemove={false} displayName={displayName} endpointId={endpointId} onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem} propertyName={name}>
                    {itemValue.map((itm, i) => {
                        return (
                            <PostBodyFormItem
                                canRemove={itemValue.length > 1}
                                displayName={`item ${i + 1}`}
                                endpointId={endpointId}
                                itemSchema={arraySchema}
                                itemValue={itm}
                                key={i}
                                name={`${name ? name + ':' : ''}[${i}]`}
                                onAddItemToPostbodyCollection={onAddItemToPostbodyCollection}
                                onPostBodyInputChanged={onPostBodyInputChanged}
                                onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem}
                                showExcludedPostBodyFields={showExcludedPostBodyFields}
                            />);
                    })}
                </PostBodyFormSection>
                <div className={'clickable'} onClick={onAddItemToPostbodyCollection.bind(null, name, endpointId, arraySchema)}>
                    <span className={'glyphicon glyphicon-plus'} /><span className={''}>{`  Add ${displayName === 'Post Body' ? 'Item' : displayName}`}</span>
                </div>
            </div>
        );
    }

    // At this point we're dealing with an object, so recursively render API Console form inputs for its keys
    return (
        <PostBodyFormSection canRemove={canRemove} displayName={displayName} endpointId={endpointId} onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem} propertyName={name}>
            {Object.keys(itemSchema).filter((n) => n !== 'required' && n !== 'isExcluded' && itemSchema[n]).map((itemKey, i) => {
                return (<PostBodyFormItem
                    canRemove={false}
                    displayName={itemKey}
                    endpointId={endpointId}
                    itemName={itemKey}
                    itemSchema={itemSchema[itemKey]}
                    itemValue={itemValue[itemKey]}
                    key={i}
                    name={`${name ? name + ':' : ''}` + itemKey}
                    onAddItemToPostbodyCollection={onAddItemToPostbodyCollection}
                    onPostBodyInputChanged={onPostBodyInputChanged}
                    onRemovePostbodyCollectionItem={onRemovePostbodyCollectionItem}
                    showExcludedPostBodyFields={showExcludedPostBodyFields}
                />);
            })}
        </PostBodyFormSection>
    );
};

PostBodyFormItem.displayName = 'Post Body Item';
PostBodyFormItem.propTypes = {
    canRemove: PropTypes.bool.isRequired,
    displayName: PropTypes.string.isRequired,
    endpointId: PropTypes.number.isRequired,
    itemSchema: PropTypes.object,
    itemValue: PropTypes.any,
    name: PropTypes.string.isRequired,
    onAddItemToPostbodyCollection: PropTypes.func.isRequired,
    onPostBodyInputChanged: PropTypes.func.isRequired,
    onRemovePostbodyCollectionItem: PropTypes.func.isRequired,
    showExcludedPostBodyFields: PropTypes.bool.isRequired
};

export default PostBodyFormItem;

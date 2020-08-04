import React from 'react'

export  const Option =(props) => {
    return (
        <div className="option">
            <p className="option__text">{props.count}. {props.optionText}</p>
            <button
            className="button button--link"
            onClick={(e) => {
                props.handleOptionToDelete(props.optionText);
            }}
            >
            Delete
            </button>
        </div>
    );
}

import React from 'react'


export  const Action =(props) => {
    return (
        <div>
            <button
                className="big-button"
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >
                What decision should i take?
            </button>
        </div>
    );
}

import React, { PropTypes } from 'react';
import './_hash-input.css';

const HashInput = ({onChange, value}) => (
    <span className="input">
        <input className="input__field" type="text" id="input" value={value} onChange={(e) => onChange(e.target.value)} />
        <label className="input__label" htmlFor="input">
            <span className="input__label-content">Hash</span>
        </label>
    </span>
);

HashInput.propTypes = {
    onChange: PropTypes.func,
};

export default HashInput;
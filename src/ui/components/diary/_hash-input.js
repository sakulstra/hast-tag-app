import React, { PropTypes } from 'react';
import './_hash-input.css';

const HashInput = ({onChange, value}) => (
    <span className="input input--juro">
        <input className="input__field input__field--juro" type="text" id="input-28" value={value} onChange={(e) => onChange(e.target.value)} />
        <label className="input__label input__label--juro" htmlFor="input-28">
            <span className="input__label-content input__label-content--juro">Hash</span>
        </label>
    </span>
);

HashInput.propTypes = {
    onChange: PropTypes.func,
};

export default HashInput;
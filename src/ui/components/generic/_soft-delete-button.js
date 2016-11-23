import React, { Component } from 'react';
import { HashInput } from '../diary';
import { hashify } from '../../../utils/hashes';
import { authStore } from './../../../api/auth';

class SoftDeleteButton extends Component{
  state = {
    clicked: 0,
    value: ''
  }

  message = "Please destroy my memories";

  handleClicked = () => {
    const { clicked } = this.state;
    if (clicked === 0) {
      this.setState({ clicked: 1});
    }
    if (clicked === 1) {
      this.setState({
        clicked: 0
      });
      authStore.delete();
    }
  }

  render() {
    const { clicked, value } = this.state;
    return (
      <div>
        <p>If you want to *delete* everything, just press delete.
        *warning* we don't do soft deletes. What's gone is gone and will never come back.</p>
        { clicked === 1 ?
          <div>
            <p>Please type: "{this.message}"</p>
            <HashInput value={value} onChange={(val) => this.setState({value: val})} />
          </div> : null
        }
        <button
          disabled={clicked === 1 && value !== this.message}
          onClick={() => this.handleClicked()}
        >
          Delete account
        </button>
      </div>
    )
  }
}

export default SoftDeleteButton;

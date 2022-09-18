import React from 'react';
import './input-widget.css';

type InputWidgetType = {
  handleEnterKeyPress?: (param: any) => void
}

export default class InputWidget extends React.Component<InputWidgetType> {

  ref: any;

  constructor(props: any) {
    super(props);
    this.ref = React.createRef();
  }

  addNewItem = (event: any) => {
    const { handleEnterKeyPress } = this.props;
    const isEnterKey = event.keyCode === 13;
    if (isEnterKey) {
      handleEnterKeyPress && 
      handleEnterKeyPress(event.target.value);
      this.ref.current.value = "";
    }
  }

  render() {
    return (
      <div>
        <label className="input-container" htmlFor="input">
          <input
            type="text"
            id="input"
            className="input-text"
            ref={this.ref}
            placeholder="Add a new task"
            onKeyUp={this.addNewItem}
          />
        </label>
      </div>
    ) 
  }
}
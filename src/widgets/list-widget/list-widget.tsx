import React from "react";
import Task from "../../interfaces/task";
import "./list-widget.css";

export type ListWidgetPropsType = {
  index?: number;
  label?: string;
  isDone?: boolean;
  handleChangeStatus: (e?: any, index?: number) => void;
  handleDeleteBtnClick: (index?: number) => void;
}

export class ListWidget extends React.Component<ListWidgetPropsType, any> {
  static defaultProps: {};
  private ref: any;
  constructor(props: ListWidgetPropsType) {
    super(props);
    this.state = {
      checked: this.props.isDone
    }
    this.ref = React.createRef();
  }

  componentDidUpdate(prevProps: Readonly<ListWidgetPropsType>): void {
    const { props, ref } = this;
    const isPropsUpdated = prevProps.isDone !== props.isDone;
    if (isPropsUpdated) {
      ref.current.checked = props.isDone;  
      this.updateState(); 
    }
  }

  changeItemStatus = (event: any, index: any) => {
    const { props } = this;
    this.updateState();
    props.handleChangeStatus({
      value: event.target.checked, 
      index: index
    })
  }

  updateState = () => {
    this.setState((state: any, props: ListWidgetPropsType) => ({
      checked: props.isDone
    })); 
  }

  render() {
    const { state, props, ref } = this;
  
    return (
      <li className={`task-item ${state.checked?"task-item-done":""}`}>
        <div>
          <input
            type="checkbox"
            defaultChecked={state.checked}
            ref={ref}
            onChange={($event: any) => this.changeItemStatus($event, props.index)}
          />
          <span>{props.label}</span>
        </div>
        <div>
          <button 
            className="btn btn-warning"
            onClick={() => props.handleDeleteBtnClick(props.index)}
          >Delete</button>
        </div>
      </li>
    );
  }
}

ListWidget.defaultProps = {
  index: 0,
  label: "Huy",
  isDone: false,
  handleChangeStatus: () => {},
  handleDeleteBtnClick: (index?: number) => {}
}
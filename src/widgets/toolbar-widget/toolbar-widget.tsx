import React from "react";
import "./toolbar-widget.css";

export const tabs: any = {
  All: 1,
  Pending: 2,
  Done: 3,
};

export default class ToolBarWidget extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      defaultTabIndex: 1,
      tabItems: ["All", "Pending", "Done"],
    };
  }

  getActivatedClassOnInit = (tabItem: string, defaultTabIndex = 1) => {
    const isActivated = tabs[tabItem] === defaultTabIndex;
    return isActivated ? "tool-bar-tab-item-active" : "";
  };

  changeTab = (value: string) => {
    const { handleChange } = this.props;
    this.setState({
      defaultTabIndex: tabs[value],
    });
    handleChange(value);
  };

  render() {
    const { handleClear } = this.props;
    return (
      <div className="tool-bar-container">
        <div className="tool-bar-tab">
          <ul className="tool-bar-tab-container">
            {this.state.tabItems.map((item: string) => (
              <li
                key={item}
                className={`tool-bar-tab-item ${this.getActivatedClassOnInit(
                  item,
                  this.state.defaultTabIndex
                )}`}
                onClick={() => this.changeTab(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="tool-bar-clear-btn">
          <button 
            className="btn btn-primary"
            onClick={handleClear}
          >Clear all!</button>
        </div>
      </div>
    );
  }
}

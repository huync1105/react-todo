import React from "react";
import InputWidget from "../../widgets/input-widget/input-widget";
import ToolBarWidget from "../../widgets/toolbar-widget/toolbar-widget";
import "./header-layout.css";

type HeaderLayoutType = {
  handleInputEnterKeyPress?: (param: string) => void, 
  handleTabChange?: (param: string) => void, 
  handleClearBtnClick?: (param?: any) => void 
}

export default class HeaderLayout extends React.Component<HeaderLayoutType, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { 
      handleInputEnterKeyPress, 
      handleTabChange, 
      handleClearBtnClick 
    } = this.props;

    return (
      <div>
        <InputWidget handleEnterKeyPress={handleInputEnterKeyPress} />
        <ToolBarWidget 
          handleChange={handleTabChange} 
          handleClear={handleClearBtnClick}
        />
      </div>
    );
  }
}

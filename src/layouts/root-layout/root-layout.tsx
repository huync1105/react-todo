import React from "react";
import Task from "../../interfaces/task";
import HeaderLayout from "../header-layout/header-layout";
import ListLayout from "../list-layout/list-layout";

export default class RootLayout extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      tasks: [
        { label: "task 1", isDone: true },
        { label: "task 2", isDone: false },
      ],
      filterValue: "All",
    };
    this.addNewItem = this.addNewItem.bind(this);
    this.setFilterItem = this.setFilterItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.changeTaskStatus = this.changeTaskStatus.bind(this);
  }

  addNewItem = (value: string) => {
    const newTask: Task = {
      label: value,
      isDone: false,
    };
    this.setState((state: any) => ({
      tasks: [...state.tasks, newTask],
    }));
  };

  setFilterItem = (tabValue: string) => {
    this.setState({
      filterValue: tabValue,
    });
  };

  deleteItem = (index?: number) => {
    const { tasks } = this.state;
    const existedTasks = tasks;
    existedTasks.splice(index, 1);
    this.setState({
      tasks: [...existedTasks]
    })
  };

  changeTaskStatus = (res: any) => {
    const { tasks } = this.state;
    const newTask = [...tasks];
    newTask[res.index].isDone = res.value;
    this.setState({
      tasks: newTask
    })
    
    // const isDone = event.target.checked;
    // const { tasks } = this.state;
    // const newTask = tasks;
    // if (index) {
    //   newTask[index].isDone = isDone;
    //   this.setState({
    //     tasks: [...newTask]
    //   })
    // } 

  }

  render() {
    const { state, props } = this;
    return (
      <div>
        <HeaderLayout
          handleInputEnterKeyPress={this.addNewItem}
          handleTabChange={this.setFilterItem}
          handleClearBtnClick={() => this.setState({tasks: []})}
        />
        <ListLayout
          tasks={state.tasks}
          filterValue={state.filterValue}
          handleChangeTaskStatus={this.changeTaskStatus}
          handleDelete={this.deleteItem}
        />
      </div>
    );
  }
}

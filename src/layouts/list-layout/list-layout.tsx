import React from "react";
import Task from "../../interfaces/task";
import { ListWidget } from "../../widgets/list-widget/list-widget";
import "./list-layout.css";

export type ListLayoutPropsType = {
  tasks?: Task[];
  filterValue?: string;
  handleDelete: () => void;
  handleChangeTaskStatus: (event?: any, index?: number) => void;
};

export default class ListLayout extends React.Component<ListLayoutPropsType> {
  static defaultProps: {};

  constructor(props: any) {
    super(props);
  }

  componentDidUpdate(prevProps: Readonly<ListLayoutPropsType>): void {
    const { filterValue } = this.props;
    if (prevProps.filterValue !== filterValue) {
      console.log("tasks", this.props.tasks);
    }
  }

  render() {
    let { 
      tasks = [], 
      filterValue = "All",
      handleChangeTaskStatus,
      handleDelete,
    } = this.props;
    let hasElement = !!tasks?.length;
    
    return hasElement ? (
      <ul className="task-list">
        {
          renderListItem(tasks, filterValue)?.map((task, index) => {
            return (
              <ListWidget 
                key={index} 
                index={index}
                label={task.label} 
                isDone={task.isDone}
                handleChangeStatus={handleChangeTaskStatus}
                handleDeleteBtnClick={handleDelete}
              />
            );
          })
        }
      </ul>
    ) : (
      <p>No task availabel!</p>
    );
  }
}

ListLayout.defaultProps = {
  tasks: [],
  filterValue: "All",
};

const renderListItem = (tasks: Task[], filterValue: string) => {
  return tasks.filter(task => {
    switch (filterValue) {
      case "Pending":
        return !task.isDone;
      case "Done":
        return task.isDone;
      default:
        return task;
    }
  })
}
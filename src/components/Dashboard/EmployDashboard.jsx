import React from "react";
import Header from "../Others/Header";
import TaskList from "../TaskList/TaskBucket";
import TaskListNumbers from "../Others/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;

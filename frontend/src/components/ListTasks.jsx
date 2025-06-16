import React from "react";
import CardTasks from "./CardTasks";
const ListTasks = ({
    deleteTasks,
  updateTasks,
  loading,
  tasks,
}) => {
  return (
    <>
      <h1 className="text-2xl font-bold underline text-center">
        Listado de Sucursales
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">

        {loading && <div className="text-center text-gray-500">Loading...</div>}

        {tasks?.map((tasks) => (
          <CardBranches
            key={tasks._id}
            tasks={tasks}
            deleteTasks={deleteTasks}
            updateTasks={updateTasks}
          />
        ))}
      </div>
    </>
  );
};

export default ListTasks;
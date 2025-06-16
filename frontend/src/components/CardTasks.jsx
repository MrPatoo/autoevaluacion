import React from "react";
import Button from "./Button1";

const CardTasks = ({ tasks, deleteTasks, updateTasks }) => {
  if (!tasks) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {branches.name} 
        </h2>
        <p className="text-gray-600">
          <span className="font-semibold">Titulo:</span> {tasks.title}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Descripción:</span> {tasks.description}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Estado:</span> {tasks.completed}
        </p>
       
        <p>id: {tasks._id}</p>


        <Button 
        type="button"
        label={"Eliminar"}
        actionButton={() =>{deleteTasks(tasks._id), console.log("funciona eliminar", tasks._id)} }
        />

                        <Button 
                        type="button"
        label={"Editar Información"}
        actionButton={() =>{updateTasks(tasks), console.log("funciona editar")} }
        colorClass={"warning"}
        />


               


      </div>
    </div>
  );
};

export default CardTasks;
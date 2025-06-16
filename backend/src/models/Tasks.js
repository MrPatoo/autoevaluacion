/*fields:
    title, description, completed
*/

import { Schema, model } from "mongoose";

const tasksSchema = new Schema({
    title:{
        type: String,
        require: true
    },

    description:{
        type: String,
        require: true
    },

    completed:{
        type: Boolean,
        require: true
    },
},
{
    //tabla auditoria PRO
    timestamps: true,
    strict: false
})

export default model("Tasks", tasksSchema);
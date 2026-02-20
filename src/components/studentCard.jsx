import {useState} from "react";

export default function StudentCard({student,onEdit,onDelete})  // eslint-disable-next-line react/prop-types
{
    const [edit, setEdit] = useState(false);    // eslint-disable-next-line react/prop-types
    const [draft, setDraft] = useState(student); // eslint-disable-next-line react/prop-types

    return(
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            

            {
            !edit ? (
                <div className= "flex justify-between">
                    
                    <div>                {/* Display student information when not in edit mode*/}
                        <h3 className="text-xl font-bold">{student.name}</h3>
                        <p className="text-gray-600">Age: {student.age}</p>
                        <p className="text-gray-600">Email: {student.email}</p>
                        <p className="text-gray-600">Grade: {student.grade}</p>
                    </div>

                    <div className="flex gap-2 mt-2">       {/*Edit and Delete buttons when not in edit mode*/}
                        <button onClick={() => setEdit(true)} className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600">Edit</button>
                        <button onClick={() => onDelete(student._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                    </div>
                </div>
            ) : (

                <form>  {/*Form to edit student information when in edit mode*/}
                    <input 
                        className="text-xl font-bold border rounded-lg px-2 py-1 w-full"
                        value={draft.name}
                        onChange={(e) => setDraft({...draft, name: e.target.value})}/>

                    <input      
                        className="text-gray-600 border rounded-lg px-2 py-1 w-full mt-2"
                        value={draft.age}
                        onChange={(e) => setDraft({...draft, age: Number(e.target.value)})}/>

                    <input
                        className="text-gray-600 border rounded-lg px-2 py-1 w-full mt-2"
                        value={draft.email}
                        onChange={(e) => setDraft({...draft, email: e.target.value})}/>

                    <input 
                        className="text-gray-600 border rounded-lg px-2 py-1 w-full mt-2"
                        value={draft.grade}
                        onChange={(e) => setDraft({...draft, grade: e.target.value})}/>

                    <div>  {/*Save and Cancel buttons when in edit mode*/}
                        <button type="button" className= "bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 mt-2" onClick={() => {onEdit(draft); setEdit(false);}}>Save</button>
                        <button type="button" onClick={() => setEdit(false)} className="bg-gray-500 text-white px-3 py-1 rounded-lg hover:bg-gray-600 mt-2 ml-2">Cancel</button>
                    </div>   
                    
                </form>
            )}
        </div>
    );
}
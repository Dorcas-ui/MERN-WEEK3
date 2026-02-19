
import {useState, useEffect} from 'react';
import studentCard from './studentCard';
import studentForm from './studentForm';
import { fetchStudents, createStudent, updateStudent, deleteStudent } from "../lib/api"
import StudentForm from './studentForm';

export default function Home() {

    const [students, setStudents] = useState([]);
    const[loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(() => {       // useEffect to fetch students when the component mounts
        (async() => {       // IIFE to fetch students when the component mounts
            try {
                setLoading(true);       // Set loading state to true before fetching students
                const data = await fetchStudents(); // Fetch students from the API and update state
                setStudents(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);  // Set error message if fetching students fails
            }
            finally {setLoading(false);}  // Ensure loading state is reset even if an error occurs
        })();
    }, []);  // run the code once when the component(home.jsx) mounts

       //[]-mounting sing.

       async function handleCreate(student) { 
        const created = await createStudent(student);  // Call API to create a new student and update state with the newly created student
        setStudents(prev=> [...prev, created]);  // Update students state by adding the newly created student to the existing list
    }   

    async function handleEdit(st) {
        const updated = await updateStudent(st._id, st);  // Call API to update a student and update state with the updated student information
        setStudents(prev => prev.map(x => x._id === st._id ? updated : x));  // Update students state by replacing the old student information with the updated information
    }
    async function handleDelete(id) {
        await deleteStudent(id);  // Call API to delete a student and update state by removing the deleted student from the list
        setStudents(prev => prev.filter(x => x._id !== id));  // Update students state by filtering out the deleted student by id
        //(x => x._id !== id)keep all student whose id is not equal to the deleted student's id

    }

    return (
        <main>
            <StudentForm onsubmit={handleCreate} />  {/* Render the StudentForm component and pass the handleCreate function as a prop for handling form submission */}
            {loading && <p>Loading...</p>}  {/* Display loading message if the loading state is true */}
            {error && <p className="text-red-600">{error}</p>}  {/* Display error message if the error state is not empty */}
            {students.map(s => 
            (  // Map over the students array and render a StudentCard for each student, passing the student data and handler functions as props
                <studentCard 
                    key={s._id} 
                    student={s}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            ))}
        </main>
    );
};
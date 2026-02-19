import {useState} from "react";

export default function StudentForm() {
    const [form, setForm] = useState({  // Initial state for the form
        name: "",
        age: "",
        email: "",
        grade: "",

    });
    const handleChange = (e) => {   // Handle input changes and update the form state
        const {name, value} = e.target;  // Destructure name and value from the event target
        setForm(prev => ({   // Update the form state by merging the previous state with the new value
            ...prev,        // copies the previous state to keep unchanged fields
            [name]: value  // Use computed property name to update the specific field in the form state
        }));
    };
    const handleSubmit = (e) => {  // Handle form submission
        e.preventDefault(); 
        if (!form.name || !form.age || !form.email || !form.grade)  return;  // Basic validation to ensure all fields are filled
        onsubmit({...form, age: Number(form.age)});  // Convert age to a number before submitting
        setForm({name: "", age: "", email: "", grade: ""});  // Reset the form after submission
    };
    return (
        <form onsubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md mb-6 flex gap-4">
            <input 
                name="name" 
                value={form.name} 
                onchange={handleChange} 
                placeholder="Name" 
                className="border rounded-lg px-3 py-2  flex-1" />
            
            
            <input 
                name="age" 
                value={form.age} 
                onchange={handleChange} 
                placeholder="Age" 
                className="border rounded-lg px-3 py-2  flex-1" />

                <input 
                name="email" 
                value={form.email} 
                onchange={handleChange} 
                placeholder="Email" 
                className="border rounded-lg px-3 py-2  flex-1" />

            <input 
                name="grade" 
                value={form.grade} 
                onchange={handleChange}  
                placeholder="Grade" 
                className="border rounded-lg px-3 py-2  w-24" />

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Add Student</button>
        </form>
    );
}
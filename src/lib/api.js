const API_URL = "http://localhost:5000/api";

export async function fetchStudents() {
    const res = await fetch(`${API_URL}/students`);
    if (!res.ok) {
        throw new Error("Failed to fetch students");
    }
    return res.json();
}

export async function createStudent(student) {
    const res = await fetch(`${API_URL}/students`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
    });
    if (!res.ok) {
        throw new Error('Failed to create student');
    }
    return res.json();
}

export async function updateStudent(id, student) {
    const res = await fetch(`${API_URL}/students/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
    });
    if (!res.ok) {
        throw new Error('Failed to update student');
    }
    return res.json();
}

export async function deleteStudent(id) {
    const res = await fetch(`${API_URL}/students/${id}`, {
        method: 'DELETE'
    });
    if (!res.ok) {
        throw new Error('Failed to delete student');
    }
    return res.json();
}
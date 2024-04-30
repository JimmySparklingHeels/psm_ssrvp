import * as React from 'react'
import axios from "axios";
import '../stuff.css'
import EditUser from "../editUser";

function Lab6(){
    const [users, setUsers] = React.useState([]);
    const [editingUser, setEditingUser] = React.useState(null);

    React.useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3003/data");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleDelete = React.useCallback(async (id) => {
        try {
            await axios.delete(`http://localhost:3003/data/${id}`);
            alert("Пользователь успешно удален!");
            fetchData();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    }, []);

    const handleEdit = React.useCallback((user) => {
        setEditingUser(user);
    }, []);

    const handleCancelEdit = React.useCallback(() => {
        setEditingUser(null);
    }, []);

    const handleSaveEdit = React.useCallback((updatedUser) => {
        setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
        setEditingUser(null);
    }, [users]);

    return (
        <div>
            <h2>Список пользователей</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.firstName} {user.lastName} - {user.email}
                        <button onClick={() => handleDelete(user.id)}>Удалить</button>
                        <button onClick={() => handleEdit(user)}>Изменить</button>
                    </li>
                ))}
            </ul>
            {editingUser && (
                <EditUser
                    user={editingUser}
                    onCancel={handleCancelEdit}
                    onSave={handleSaveEdit}
                />
            )}
        </div>
    );
}

export default Lab6;

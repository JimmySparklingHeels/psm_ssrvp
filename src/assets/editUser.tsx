import { useState } from "react";
import axios from "axios";

const EditUser = ({ user, onCancel, onSave }) => {
    const [editedUser, setEditedUser] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedUser({ ...editedUser, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3003/data/${editedUser.id}`, editedUser);
            onSave(editedUser);
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Имя:</label>
            <input type="text" name="firstName" value={editedUser.firstName} onChange={handleChange} />
            <label>Фамилия:</label>
            <input type="text" name="lastName" value={editedUser.lastName} onChange={handleChange} />
            <label>Email:</label>
            <input type="email" name="email" value={editedUser.email} onChange={handleChange} />
            <button type="submit">Сохранить</button>
            <button type="button" onClick={onCancel}>Отмена</button>
        </form>
    );
};

export default EditUser;
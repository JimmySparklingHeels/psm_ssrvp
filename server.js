import express from 'express';
import { readFileSync, writeFile } from 'fs';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3003;

app.use(bodyParser.json());
app.use(cors());

app.get('/data', async (req, res) => {
    try {
        const data = await readFileSync('src/assets/rest/data.json');
        res.json(JSON.parse(data));
    } catch (error) {
        console.error('Error reading data file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/data', async (req, res) => {
    try {
        const currentData = JSON.parse(await readFileSync('src/assets/rest/data.json'));
        let nextId = 1;
        if (currentData.length > 0) {
            nextId = Math.max(...currentData.map(user => user.id)) + 1;
        }
        const newData = { id: nextId, ...req.body };
        currentData.push(newData);
        await writeFile('src/assets/rest/data.json', JSON.stringify(currentData, null, 2), (err) => { if (err) return console.log(err)});
        res.status(201).json({ message: 'Данные успешно добавлены на сервер!' });
    } catch (error) {
        console.error('Error writing data file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.put('/data/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = req.body;
        let currentData = JSON.parse(await readFileSync('src/assets/rest/data.json'));
        const index = currentData.findIndex(user => user.id === Number(id));
        if (index !== -1) {
            currentData[index] = { ...currentData[index], ...updatedUser };
            await writeFile('src/assets/rest/data.json', JSON.stringify(currentData, null, 2), (err) => { if (err) return console.log(err)});
            res.status(200).json({ message: 'Пользователь успешно обновлен!' });
        } else {
            res.status(404).json({ error: 'Пользователь не найден' });
        }
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete('/data/:id', async (req, res) => {
    try {
        const id = req.params.id;
        let currentData = JSON.parse(await readFileSync('src/assets/rest/data.json'));
        currentData = currentData.filter(user => user.id !== Number(id));
        await writeFile('src/assets/rest/data.json', JSON.stringify(currentData, null, 2), (err) => { if (err) return console.log(err)});
        res.status(200).json({ message: 'Пользователь успешно удален!' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Обработчик ошибок
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Res timeout!');
});

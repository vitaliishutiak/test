import express from 'express';
import authRouter from './authRouter.js';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;

// Middleware для парсингу JSON
app.use(express.json());

// Використовуємо імпортований authRouter
app.use('/auth', authRouter);

// Функція для старту сервера та підключення до MongoDB
const start = async () => {
    try {
        // Підключення до MongoDB
        await mongoose.connect('mongodb+srv://root:vWp2jwY7nAwdUVV8@cluster0.dzohtlw.mongodb.net/myDatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB connected');

        // Старт сервера
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (e) {
        console.log('Error starting server:', e);
    }
};

// Викликаємо функцію старту сервера
start();

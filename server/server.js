const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');
require('dotenv').config(); // ✅ Ensure dotenv is loaded first

const app = express();
const server = http.createServer(app);

const io = socketio(server, {
    cors: {
        // origin: 'https://chesschamp.onrender.com',
        origin: 'http://localhost:3000',
        credentials: true,
    },
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('join', ({ gameId }) => {
        socket.join(gameId);
        io.to(gameId).emit('userJoined');
    });

    socket.on('postMove', (data) => {
        io.to(data.gameId).emit('receiveMove', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));


// Routes
const gameRouter = require('./routes/gameRouter');
const userRouter = require('./routes/userRouter');
app.use('/g', gameRouter);
app.use('/u', userRouter);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// ✅ MongoDB Connection with Proper Error Handling
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('✅ MongoDB Connected Successfully!');
}).catch(err => {
    console.error('❌ MongoDB Connection Error:', err);
});

// Start Server
const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`🚀 Server is running on port: ${port}`);
});

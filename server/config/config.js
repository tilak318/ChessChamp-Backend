let SERVER_URL, CLIENT_URL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    SERVER_URL = 'https://chesschamp-backend.onrender.com';
    CLIENT_URL = 'https://chesschamp.onrender.com';
} else {
    SERVER_URL = 'http://localhost:5000';
    CLIENT_URL = 'http://localhost:3000';
}

module.exports = { SERVER_URL, CLIENT_URL };

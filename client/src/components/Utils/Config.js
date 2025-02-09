let URL = '';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    URL = 'https://chesschamp-backend.onrender.com';
    // URL = 'http://localhost:5000';
} else {
    URL = '';
}

export { URL };

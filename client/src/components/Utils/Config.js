let URL = '';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    URL = 'https://chesschamp-backend.onrender.com';
} else {
    URL = '';
}

export { URL };

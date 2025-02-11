// let URL = '';

// if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//     URL = 'https://chesschamp-backend.onrender.com';
//     URL = 'http://localhost:5000';
// } else {
//     URL = '';
// }

// export { URL };


let URL = '';

// Check if the environment is development or production
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // Development environment (local testing)
    URL = 'https://chesschamp-backend.onrender.com';
    // Uncomment the line below if you want to run it locally in the future
    // URL = 'http://localhost:5000';
} else {
    // Production environment (deployed app)
    URL = 'https://chesschamp-backend.onrender.com';  // ✅ Added this for production
}

export { URL };


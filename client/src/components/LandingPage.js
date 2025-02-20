import React, { useContext, useState, useEffect, useRef } from 'react';
import Home from './Home';
import UserContext from '../context/UserContext';
import { useHistory } from 'react-router-dom';
import ChessBG from '../assets/chess_bg_1.jpg';


function LandingPage() {
    const [message, setMessage] = useState('');
    const [cursor, setCursor] = useState('cursor');
    const User = useContext(UserContext);

    let index = 0;
    const text = 'Loki Chess!';

    const history = useHistory();
    const messageRef = useRef(message);
    const cursorRef = useRef(cursor);

    useEffect(() => {
        messageRef.current = message;
        cursorRef.current = cursor;
    });

    useEffect(() => {
        let cursorBlink = setInterval(() => {
            setCursor(prev => (prev === '' ? 'cursor' : ''));
        }, 400);

        let typing = setInterval(() => {
            setMessage(prev => prev + text[index]);
            index++;
            if (index === text.length) {
                clearInterval(typing);
            }
        }, 150);

        return () => {
            clearInterval(cursorBlink);
            clearInterval(typing);
        };
    }, []);

    return User.user.isValid ? (
        <Home />
    ) : (
        <div className="landing-page" style={{ backgroundImage: `url(${ChessBG})` }}>
            <div className="overlay">
                <div className="content">
                    <h1 className="title">{message}<span className={cursor}>|</span></h1>
                    <p className="subtitle">Join the ultimate chess battle!</p>
                    <div className="buttons">
                        <button className="btn register" onClick={() => history.push('/register')}>Register</button>
                        <button className="btn play" onClick={() => history.push('/g/computer')}>Play vs Computer</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
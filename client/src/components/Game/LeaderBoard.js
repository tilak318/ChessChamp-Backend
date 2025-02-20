import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner, Table } from 'react-bootstrap';
import { URL } from '../Utils/Config';
import { Link } from 'react-router-dom';
import ChessBG from '../../assets/chess_bg_1.jpg'

function LeaderBoard() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getTopUsers = async () => {
            const res = await axios.get(`${URL}/g/topUsers`);
            setUsers(res.data.users);
            setIsLoading(false);
        };
        getTopUsers();
    }, []);

    if (isLoading) {
        return (
            <div className='spinner-container'>
                <Spinner animation='border' variant='primary' />
            </div>
        );
    }

    return (
        <div className="leaderboard-page">
            <div className="leaderboard-container">
                <Table striped bordered hover variant="dark" className="leaderboard-table">
                    <thead className="leaderboard-header">
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody className="leaderboard-body">
                        {users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td><Link to={`/u/${user._id}`} className="leaderboard-username">{user.username}</Link></td>
                                    <td>{user.rating}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default LeaderBoard;

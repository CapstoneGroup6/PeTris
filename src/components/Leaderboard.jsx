import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import "./Leaderboard.css";

import iconImage from 'public\tetrisheart.png';

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);

    // Dummy Placeholder Data
    const dummyData = [
        { username: "Cynthia99", score: 800 },
        { username: "Michael21", score: 900 },
        { username: "JackiePlays", score: 1000 },
        { username: "xoCaraxo", score: 1325 },
        { username: "Jeremy123", score: 1010 },
        { username: "MrBinx", score: 100 },
        { username: "PetrisFan", score: 1500 },
        { username: "Seraphina", score: 600 },
    ]

    // Dummy useEffect
    useEffect(() => {
        const sortedDummyData = [...dummyData].sort((a, b) => b.score - a.score); 
        const top5Players = sortedDummyData.slice(0, 5);
        setLeaderboardData(top5Players);
    }, []);

    /*
    useEffect(() => {
        const database = getDatabase();
        const leaderboardRef = ref(database, 'leaderboard');

        onValue(leaderboardRef, (snapshot) => {
            const leaderboardData = snapshot.val();

            if (leaderboardData) {
                const sortedData = Object.entries(leaderboardData)
                    .map(([username, score]) => ({ username, score }))
                    .sort((a, b) => b.score - a.score)
                    .slice(0, 5);

                    setLeaderboardData(sortedData);
            }
        });
    }, []);
    */

    return (
        <div className="container my-5">
            <h1 className="header">Final Leaderboard</h1>
            <h2 className="game-name">Petris</h2>
            
            <div className="leaderboard-panel">
                {leaderboardData.map((player, index) => (
                    <div key={index} className="circle">{index + 1}</div>
                ))}
                <div className="icon" style={{ backgroundImage: `url(${iconImage})` }}></div>
                {
                }
            </div>
            
            <ul className="list-group">
                {leaderboardData.map((player, index) => (
                    <li key={index} className="list-group-item">
                        <div className="entry">
                            <span className="player-name">{player.username}</span>
                            <span className="player-points">{player.score}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Leaderboard;
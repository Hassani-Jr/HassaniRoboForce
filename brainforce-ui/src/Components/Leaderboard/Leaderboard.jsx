import React from "react";
import "./Leaderboard.css";

const LeaderboardRow = ({ data, index }) => {
  return (
    <tr key={index} className={`leaderboard-row ${index % 2 === 0 ? "even-row" : "odd-row"}`}>
      <td>{data.username}</td>
      <td>{data.points}</td>
      <td>{data.quizzesTaken}</td>
      <td>{data.dateJoined}</td>
    </tr>
  );
};

export default function Leaderboard() {
  const leaderboardData = [
    {
      username: "John",
      points: 100,
      quizzesTaken: 5,
      dateJoined: "2023-01-01"
    },
    {
      username: "Jane",
      points: 80,
      quizzesTaken: 3,
      dateJoined: "2023-02-15"
    },
    {
      username: "John",
      points: 100,
      quizzesTaken: 5,
      dateJoined: "2023-01-01"
    },
    {
      username: "Jane",
      points: 80,
      quizzesTaken: 3,
      dateJoined: "2023-02-15"
    },
    {
      username: "John",
      points: 100,
      quizzesTaken: 5,
      dateJoined: "2023-01-01"
    },
    {
      username: "Jane",
      points: 80,
      quizzesTaken: 3,
      dateJoined: "2023-02-15"
    },
    {
      username: "Bob",
      points: 120,
      quizzesTaken: 7,
      dateJoined: "2023-03-10"
    }
    // Add more leaderboard data as needed
  ];

  return (
    <div className="leaderboardPage-container">

    
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Points</th>
            <th>Total Quizzes Taken</th>
            <th>Date Joined</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((data, index) => (
            <LeaderboardRow data={data} index={index} />
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

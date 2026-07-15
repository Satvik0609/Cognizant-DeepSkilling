import React from "react";

// Indian Team
const IndianTeam = [
  "Sachin",
  "Dhoni",
  "Virat",
  "Rohit",
  "Yuvraj",
  "Raina"
];

// Destructuring
export function OddPlayers(props) {

  const [first, second, third, fourth, fifth, sixth] = props.IndianTeam;

  return (
    <div>
      <p>First : {first}</p>
      <p>Third : {third}</p>
      <p>Fifth : {fifth}</p>
    </div>
  );
}

export function EvenPlayers(props) {

  const [first, second, third, fourth, fifth, sixth] = props.IndianTeam;

  return (
    <div>
      <p>Second : {second}</p>
      <p>Fourth : {fourth}</p>
      <p>Sixth : {sixth}</p>
    </div>
  );
}

// Merge Arrays using Spread Operator
const T20Players = [
  "First Player",
  "Second Player",
  "Third Player"
];

const RanjiTrophyPlayers = [
  "Fourth Player",
  "Fifth Player",
  "Sixth Player"
];

export const IndianPlayers = [
  ...T20Players,
  ...RanjiTrophyPlayers
];

// Display merged players
export function ListofIndianPlayers(props) {
  return (
    <div>
      {props.IndianPlayers.map((player, index) => (
        <li key={index}>Mr. {player}</li>
      ))}
    </div>
  );
}

export default IndianPlayers;
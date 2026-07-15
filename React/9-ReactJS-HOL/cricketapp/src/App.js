import './App.css';

import { ListofPlayers, Scorebelow70 } from './ListofPlayers';

import {
  OddPlayers,
  EvenPlayers,
  IndianPlayers,
  ListofIndianPlayers
} from './IndianPlayers';

function App() {

  const flag = true;

  const IndianTeam = [
    "Sachin",
    "Dhoni",
    "Virat",
    "Rohit",
    "Yuvraj",
    "Raina"
  ];

  if (flag) {
    return (
      <div>

        <h1>List of Players</h1>

        <ListofPlayers />

        <hr />

        <h1>List of Players having Scores Less than 70</h1>

        <Scorebelow70 />

      </div>
    );
  }

  return (
    <div>

      <h1>Indian Team</h1>

      <h2>Odd Players</h2>
      <OddPlayers IndianTeam={IndianTeam} />

      <hr />

      <h2>Even Players</h2>
      <EvenPlayers IndianTeam={IndianTeam} />

      <hr />

      <h2>Merged Players</h2>
      <ListofIndianPlayers IndianPlayers={IndianPlayers} />

    </div>
  );
}

export default App;
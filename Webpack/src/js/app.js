import Game, { GameSavingData , readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';
import '../css/style.css';

const game = new Game();
game.start();
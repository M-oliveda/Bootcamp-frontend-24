import Cinema from "./Cinema";

const firstCinema = new Cinema(15, 5);

firstCinema.showSeatStatus();
firstCinema.reserveSeat(1, 2);

if (!firstCinema.reserveSeat(1, 2)) {
  console.log("Sorry, the seat was already taken.");
}

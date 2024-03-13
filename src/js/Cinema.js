import Seat from "./Seat";

export default class Cinema {
  #cinemaSpots;

  constructor(nSeatsPerRow, nRows) {
    this.#cinemaSpots = Array.from(
      new Array(nRows),
      () => new Array(nSeatsPerRow)
    );

    for (let i = 0; i < this.#cinemaSpots.length; i++) {
      for (let j = 0; j < this.#cinemaSpots[i].length; j++) {
        this.#cinemaSpots[i][j] = new Seat(i, j);
      }
    }
  }

  showSeatStatus() {
    return this.#cinemaSpots;
  }

  reserveSeat(nRow, nSeat) {
    if (this.#cinemaSpots[nRow][nSeat].isAvailable()) {
      this.#cinemaSpots[nRow][nSeat].reserveSeat();
      return true;
    } else {
      return false;
    }
  }
}

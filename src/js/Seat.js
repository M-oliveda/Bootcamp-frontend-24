export default class Seat {
  #seatRow;
  #seatN;
  #state;

  constructor(seatRow, seatN, state = "available") {
    this.#seatRow = seatRow;
    this.#seatN = seatN;
    this.#state = state;
  }

  isAvailable() {
    return this.#state === "available";
  }

  reserveSeat() {
    this.#state = "reserved";
  }

  toString() {
    return `Row: ${this.#seatRow} Seat: ${this.#seatN} State: ${this.#state}.`;
  }
}

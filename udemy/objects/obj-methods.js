let resturant = {
  name: "Nandos",
  guestCapacity: 75,
  guestCount: 0,

  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize;
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize;
  },
};

resturant.seatParty(16);
console.log(resturant.checkAvailability(4));
resturant.removeParty(0);
console.log(resturant.checkAvailability(4));

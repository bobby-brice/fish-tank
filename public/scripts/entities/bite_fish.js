class BiteFish extends Fish {
  constructor(options) {
    super(options); //Call super to run the code inside 'Fish's' constructor
    this.imageUri = '/images/bite-fish.png';
    this.surgeSecondsLeft = 0;
    this.maxSurge = 1.0;
    this.surgMult = 3.0;
  }
  updateOneTick() {
    let delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S);
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
  }
  onClick(event) {
    this.surgeSecondsLeft = this.maxSurge;
  }
  // kill() {
  //   this.tank.removeDenizen(this.id, duration);
  // }



}

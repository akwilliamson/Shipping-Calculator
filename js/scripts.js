var Package = {
  weightRate: function() {
    return this.inputtedWeight * 3;
  },

  sizeRate: function() {
    var packageSize = this.inputtedHeight + this.inputtedWidth + this.inputtedDepth;
    if (packageSize <= 20) {
      return 5;
    } else if (packageSize <= 40) {
      return 10;
    } else if (packageSize <= 60) {
      return 15;
    }
  },

  speedRate: function() {
    if (this.selectedSpeed === "standard") {
      return 2;
    } else if (this.selectedSpeed === "priority") {
      return 4.9;
    } else if (this.selectedSpeed === "express") {
      return 12.3;
    }
  },

  destinationRate: function() {
    var sumOtherRates = this.speedRate() + this.sizeRate() + this.weightRate();
    if (this.fromState === this.toState) {
      return (sumOtherRates * 1.5);
    } else {
      return (sumOtherRates * 2.5);
    }
  },

  insuranceCost: function() {
    if (this.selectedInsurance) {
      return 10;
    } else {
      return 0;
    }
  },
  
  totalCost: function() {
    return this.destinationRate() + this.insuranceCost();
  }
}


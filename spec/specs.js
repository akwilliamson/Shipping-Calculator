describe('Package', function() {
  describe('weightRate', function() {
    it('returns the cost as pounds inputted multiplied by 3', function() {
      var testPackage = Object.create(Package);
      testPackage.inputtedWeight = 3;
      testPackage.weightRate().should.equal(9);
    });
  });
  describe('sizeRate', function() {
    it('returns a cost depending on the range in which the total measurements fit', function() {
      var testPackage = Object.create(Package);
      testPackage.inputtedHeight = 2;
      testPackage.inputtedWidth = 4;
      testPackage.inputtedDepth = 6;
      testPackage.sizeRate().should.equal(5);
    });
    it('returns a cost depending on the range in which the total measurements fit', function() {
      var testPackage = Object.create(Package);
      testPackage.inputtedHeight = 10;
      testPackage.inputtedWidth = 8;
      testPackage.inputtedDepth = 6;
      testPackage.sizeRate().should.equal(10);
    });
    it('returns a cost depending on the range in which the total measurements fit', function() {
      var testPackage = Object.create(Package);
      testPackage.inputtedHeight = 15;
      testPackage.inputtedWidth = 20;
      testPackage.inputtedDepth = 20;
      testPackage.sizeRate().should.equal(15);
    });
  });
  describe('speedRate', function() {
    it('returns a cost depending on the speed chosen', function() {
      var testPackage = Object.create(Package);
      testPackage.selectedSpeed = "priority";
      testPackage.speedRate().should.equal(4.9);
    });
  });
  describe('destinationRate', function() {
    it('returns a cost depending on whether the package is being shipped inter- or intra-state', function() {
      var testPackage = Object.create(Package);
      testPackage.inputtedWeight = 3;
      testPackage.inputtedHeight = 15;
      testPackage.inputtedWidth = 20;
      testPackage.inputtedDepth = 20;
      testPackage.selectedSpeed = "priority";
      testPackage.fromState = "OR";
      testPackage.toState = "WA";
      testPackage.destinationRate().should.equal((testPackage.speedRate() 
        + testPackage.sizeRate() 
        + testPackage.weightRate())
        * 2.5);
    });
  });
  describe("insuranceCost", function() {
    it('adds 10 when insurance checkbox is selected', function() {
      var testPackage = Object.create(Package);
      testPackage.selectedInsurance = true;
      testPackage.insuranceCost().should.equal(10);
    });
  });
  describe("totalCost", function() {
    it('returns the total cost of shipping the package', function() {
      var testPackage = Object.create(Package);
      testPackage.inputtedWeight = 3;
      testPackage.inputtedHeight = 15;
      testPackage.inputtedWidth = 20;
      testPackage.inputtedDepth = 20;
      testPackage.selectedSpeed = "priority";
      testPackage.fromState = "OR";
      testPackage.toState = "WA";
      testPackage.selectedInsurance = true;
      testPackage.totalCost().should.equal(testPackage.destinationRate() + testPackage.insuranceCost());
    });
  });
});




describe("Babysitter", function () {
    var babysitter = new Babysitter();
    it("should have a babysitter class", function () {
        expect(babysitter).toBeDefined();
    });

    it("should return an error if start time is before 5:00PM", function () {
        var startTime = 1600;
        var errorMessage = 'too early';
        expect(babysitter.calculatePayableHours(startTime)).toBe(errorMessage);

    });

    it("should return an error if end time is after 4:00AM", function () {
        var endTime = 500;
        var startTime = 1100;
        var errorMessage = 'too late';
        expect(babysitter.calculatePayableHours(startTime,endTime)).toBe(errorMessage);

    });
});

describe("Babysitter", function () {
    var babysitter = new Babysitter();
    it("should have a babysitter class", function () {
        expect(babysitter).toBeDefined();
    });

    it("should return an error if start time is before 5:00PM", function () {
        var startTime = 1600;
        var errorMessage = 'start time is too early';
        expect(babysitter.calculatePayableHours(startTime)).toBe(errorMessage);

    });

    it("should return an error if end time is after 4:00AM", function () {
        var endTime = 500;
        var startTime = 1100;
        var errorMessage = 'end time is too late';
        expect(babysitter.calculatePayableHours(startTime, endTime)).toBe(errorMessage);

    });

    describe('determining breakdown of hourly wages', function () {
        it('should be paid $12/hr from start time to bedtime', function () {
            var startTime = 1800;
            var bedTime = 2200;
            var endTime = 100;
            var expected = 48;
            expect(babysitter.calculatePayableHours(startTime, endTime, bedTime)).toBe(expected);
        });

        it('should be paid $8/hr from bedtime to midnight', function () {
            var bedTime = 2200;
            var midnight = 0;
            var endTime = 100;
            var expected = 16;
            expect(babysitter.calculatePayableHours(bedTime, midnight, endTime)).toBe(expected);
        })

        it('should be paid $16/hr from midnight to end of job', function () {
            var midnight = 0;
            var endTime = 400;
            var expected = 64;
            expect(babysitter.calculatePayableHours(midnight, endTime)).toBe(expected);
        })
    })

});

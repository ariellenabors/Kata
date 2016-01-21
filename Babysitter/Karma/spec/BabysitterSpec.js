describe("Babysitter", function () {

    var babysitter = new Babysitter();
    var endTime, startTime, bedTime;

    it("should have a babysitter class", function () {
        expect(babysitter).toBeDefined();
    });

    it("should return an error if start time is before 5:00PM", function () {
        startTime = 1600;
        var errorMessage = 'too early';
        expect(babysitter.calculatePayableHours(startTime)).toBe(errorMessage);

    });

    it("should return an error if end time is after 4:00AM", function () {
        endTime = 500;
        startTime = 1100;
        var errorMessage = 'too late';
        expect(babysitter.calculatePayableHours(startTime, endTime)).toBe(errorMessage);

    });

    describe('calculating total hours worked', function () {
        it('should be defined', function () {
            expect(babysitter.calculateHoursWorked).toBeDefined();
        });

        it('given 1700 and 200, should return 900', function () {
            startTime = 1700;
            endTime = 200;
            var expected = 900;
            expect(babysitter.calculateHoursWorked(endTime, startTime)).toEqual(expected);
        })

        it('given 1700 and 2400, should return 700', function(){
            startTime = 1700;
            endTime = 2400;
            var expected = 700;
            expect(babysitter.calculateHoursWorked(endTime,startTime)).toEqual(expected)
        })

    });

    xdescribe('determining breakdown of hourly wages', function () {
        it('should be paid $12/hr from start time to bedtime', function () {
            startTime = 1800;
            bedTime = 2200;
            endTime = 2200;
            var expected = 48;
            expect(babysitter.calculatePayableHours(startTime, endTime, bedTime)).toBe(expected);
        });

        it('should be paid $8/hr from bedtime to midnight', function () {
            bedTime = 2200;
            var midnight = 0;
            endTime = 100;
            var expected = 16;
            expect(babysitter.calculatePayableHours(bedTime, midnight, endTime)).toBe(expected);
        });

        it('should be paid $16/hr from midnight to end of job', function () {
            var midnight = 0;
            var endTime = 400;
            var expected = 64;
            expect(babysitter.calculatePayableHours(midnight, endTime)).toBe(expected);
        });
    })

});

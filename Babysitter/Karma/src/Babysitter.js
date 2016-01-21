function Babysitter() {
    var midnight = 2400;

    this.calculateHoursWorked = function (endTime, startTime) {

        var totalHoursWorked = endTime - startTime;
        if (endTime < 1700) {
            totalHoursWorked += midnight;
        }
        return totalHoursWorked;
    };

    this.calculatePayableHours = function (startTime, endTime, bedTime) {

        var moneyEarned;

        var startTimeToBedTimeRate = .12;
        var bedTimeToMidnightRate = .08;
        var hoursWorkedFromStartToBed = bedTime - startTime;

        var hoursWorkedFromBedToMidnight = midnight - bedTime;
        moneyEarned = startTimeToBedTimeRate * hoursWorkedFromStartToBed;

        this.calculateHoursWorked(endTime, startTime);
        if (endTime >= midnight) {
            moneyEarned += bedTimeToMidnightRate * hoursWorkedFromBedToMidnight;
        }

        //moneyEarnedPartThree = midnightToEndTimeRate * hoursWorkedFromMidnightToEndTime;

        if (moneyEarned > 0) {
            return moneyEarned;
        }

        return determineCorrectStartEndTime(startTime, endTime);
    };

    function determineCorrectStartEndTime(startTime, endTime) {
        var errorMessage = '';

        if (startTime < 1700) {
            errorMessage = 'too early';
        }

        if (endTime > 400) {
            errorMessage = 'too late';
        }

        return errorMessage;

    }
}
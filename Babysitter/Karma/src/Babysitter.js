function Babysitter() {

    this.calculatePayableHours = function (startTime, endTime, bedTime) {

        var errorMessage = '';
        var moneyEarned = 0;
        var moneyEarnedPartTwo = 0;
        var moneyEarnedPartThree = 0;

        var startTimeToBedTimeRate = .12;
        var bedTimeToMidnightRate = .08;
        var midnightToEndTimeRate = .16;

        var hoursWorkedFromStartToBed = bedTime - startTime;
        var hoursWorkedFromBedToMidnight = midnight - bedTime;
        var hoursWorkedFromMidnightToEndTime = endTime - midnight;

        moneyEarned = startTimeToBedTimeRate * hoursWorkedFromStartToBed;
        moneyEarnedPartTwo = bedTimeToMidnightRate * hoursWorkedFromBedToMidnight;
        moneyEarnedPartThree = midnightToEndTimeRate * hoursWorkedFromMidnightToEndTime;

        //reset moneyEarned summation, calculate bed time to midnight, midnight to end of job
        //bed time to midnight rate; midnight to end time rate

        if (moneyEarned > 0){
            return moneyEarned;
        }
        
        if (moneyEarnedPartTwo > 0){
            return moneyEarnedPartTwo;
        }

        if (moneyEarnedPartThree > 0){
            return moneyEarnedPartThree;
        }

        return determineCorrectStartEndTime(startTime, endTime);
    };

    function determineCorrectStartEndTime(startTime, endTime) {
        if (startTime < 1700) {
            errorMessage = 'too early';
        }

        if (endTime > 400) {
            errorMessage = 'too late';
        }

        return errorMessage;

    }
}
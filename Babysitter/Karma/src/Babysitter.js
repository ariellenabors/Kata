function Babysitter() {

    this.calculatePayableHours = function (startTime, endTime, bedTime) {

        var errorMessage = '';
        var moneyEarned = 0;
        var startTimeToBedTimeRate = .12;
        var hoursWorkedFromStartToBed = bedTime - startTime;

        moneyEarned = startTimeToBedTimeRate * hoursWorkedFromStartToBed;

        //reset moneyEarned summation, calculate bed time to midnight, midnight to end of job
        //bed time to midnight rate; midnight to end time rate

        if (moneyEarned > 0){
            return moneyEarned;
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
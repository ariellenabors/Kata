function Babysitter() {

    this.calculatePayableHours=function(startTime,endTime){

        var errorMessage = '';

        if (startTime < 1700){
            errorMessage = 'too early';
        }

        if (endTime > 400) {
            errorMessage = 'too late';
        }

        return errorMessage;


    }
}
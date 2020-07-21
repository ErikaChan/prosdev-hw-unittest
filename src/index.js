const functions = {
    gradeClassifier: (grade) => {
        // TODO: Write code here
        var grading = "";

        if (grade >= 95.00 && grade <= 100) {
            grading = "O - Outstanding";
        }
        else if (grade >= 90.00 && grade <= 94.99) {
            grading = "V - Very Good";
        }
        else if (grade >= 85.00 && grade <= 89.99) {
            grading = "G - Good";
        }
        else if (grade >= 80.00 && grade <= 84.99) {
            grading = "S - Satisfactory";
        }
        else if (grade >= 75.00 && grade <= 79.99) {
            grading = "N - Needs Improvement";
        }
        else if (grade <= 74.99 && grade >= 0) {
            grading = "D - Did not Meet Expectations";
        }
        else {
            grading = "Invalid Grade";
        }

        return grading;
    }
}

module.exports = functions;
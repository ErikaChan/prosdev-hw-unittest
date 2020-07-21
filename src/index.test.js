const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Grade Above 100', () => {
    it('When the grade is beyond 100, then the grading would say that it is an Invalid Grade', () => {
        // Arrange
        const grade = 101;
        // Act
        const grading = gradeClassifier(grade);
        // Assert
        expect(grading).toMatch("Invalid Grade");
    });
});

describe('Grade below 0', () => {
    it('When the grade is below 0, then the grading would say that it is an Invalid Grade', () => {
        // Arrange
        const grade = -1;
        // Act
        const grading = gradeClassifier(grade);
        // Assert
        expect(grading).toMatch("Invalid Grade");
    });
});

describe('Outstanding Grade', () => {
    it('When the grade is within the range of 95.00 and 100, then the grading would display O - Outstanding', () => {
        // Arrange
        const grade = 96;
        // Act
        const grading = gradeClassifier(grade);
        // Assert
        expect(grading).toMatch("O - Outstanding");
    });
});

describe('Very Good Grade', () => {
    it('When the grade is within the range of 90.00 and 94.99, then the grading would display V - Very Good', () => {
        // Arrange
        const grade = 90.5;
        // Act
        const grading = gradeClassifier(grade);
        // Assert
        expect(grading).toMatch("V - Very Good");
    });
});

describe('Good Grade', () => {
    it('When the grade is within the range of 85.00 and 89.99, then the grading would display G - Good', () => {
        // Arrange
        const grade = 89.99;
        // Act
        const grading = gradeClassifier(grade);
        // Assert
        expect(grading).toMatch("G - Good");
    });
});

describe('Satisfactory Grade', () => {
    it('When the grade is within the range of 80.00 and 84.99, then the grading would display S - Satisfactory', () => {
        // Arrange
        const grade = 82;
        // Act
        const grading = gradeClassifier(grade);
        // Assert
        expect(grading).toMatch("S - Satisfactory");
    });
});

describe('Needs Improvement Grade', () => {
    it('When the grade is within the range of 75.00 and 79.99, then the grading would display N - Needs Improvement', () => {
        // Arrange
        const grade = 75.01;
        // Act
        const grading = gradeClassifier(grade);
        // Assert
        expect(grading).toMatch("N - Needs Improvement");
    });
});

describe('Did not Meet Expectations Grade', () => {
    it('When the grade is below 74.99, then the grading would display D - Did not Meet Expectations', () => {
        // Arrange
        const grade = 70;
        // Act
        const grading = gradeClassifier(grade);
        // Assert
        expect(grading).toMatch("D - Did not Meet Expectations");
    });
});

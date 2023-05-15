function gradingStudents(grades) {
    let finalGrades = grades.map((grade) =>{
        if(grade >= 38 && grade % 5 >= 3){
            return (grade - (grade % 5) + 5);
        }else{
            return grade;
        }
    })
    return finalGrades;
}

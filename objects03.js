const course = {
    courseName: "JS",
    price: 999,
}

// course.courseName

const {courseName} = course
console.log(courseName)

const {courseName: name} = course
console.log(name)
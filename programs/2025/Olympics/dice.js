let dice = [1, 3, 4, 5, 6, 2]

let scores = [];

// // task 1
// if (dice[0] == 1) {
//     scores.push(1)
// } else { scores.push(0) }

// //task 2
// if (dice[1] == 1) {
//     scores.push(2)
// } else { scores.push(0) }

// //task 3
// if (dice[2] == 1) {
//     scores.push(3)
// } else { scores.push(0) }


// // task 4
// if (dice[3] == 1) {
//     scores.push(4)
// } else { scores.push(0) }

// // task 5
// if (dice[4] == 1) {
//     scores.push(5)
// } else { scores.push(0) }


// // task 6
// if (dice[5] == 1) {
//     scores.push(6)
// } else { scores.push(0) }
// console.log(scores)

//task 1-6
const task1To6 = dice.map((dis, count) => {
    if (dice[count] == count + 1) {
        scores.push(dis)
    } else scores.push(0)
})

// // task7 
// // review later:
// if (dice[0] == 1 && dice[1] == 2 && dice[2] == 3 && dice[3] == 4 && dice[4] == 5) {
//     scores.push(20)
// } else if (dice[1] == 2 && dice[2] == 3 && dice[3] == 4 && dice[4] == 5 && dice[5] == 6) {
//     scores.push(20)
// } else if (dice[1] == 2 && dice[2] == 3 && dice[3] == 4 && dice[4] == 5 && dice[5] == 6) {
//     scores.push(20)
// } else { scores.push(0) }

const task7 = () => {
    let case1 = [1, 2, 3, 4, 5]
    let case2 = [2, 3, 4, 5, 6]
    let case3 = [1, 3, 4, 5, 6]

    const isCase1 = () => {
        dice.map(dis => {
            case1.map(x => {
                if (dis == case1[x]){
                    case1.splice(case1[x])
                }
        })
            case2.map(x => {
                if (dis == case2[x]){
                    case2.splice(case2[x])
                }
        })
            case3.map(x => {
                if (dis == case3[x]){
                    case3.splice(case3[x])
                }
        })
        })
    }
    if (case1.length == 0 || case2.length == 0 || case3.length){
        scores.push(30)
    } else scores.push(0)
}



// task 8
if (dice[0] == dice[1] && dice[2] == dice[3] && dice[4] == dice[3]) {
    scores.push(30)
} else { scores.push(0) }

// const task8 = () =>{
//     let case1 = dice.map(dis => {
//         dice.map(otherdis => {
//             dis 
//         })
//     })
// }

//task 9
if (dice[0] == dice[1] && dice[2] == dice[3] && dice[4] == dice[3]) {
    scores.push(40)
} else if (dice[1] == dice[2] && dice[3] == dice[4] && dice[5] == dice[4]) {
    scores.push(40)
} else { scores.push(0) }

//task 10
if (dice[0] == dice[1] && dice[2] == dice[3] && dice[4] == dice[5]) { }
console.log(scores)
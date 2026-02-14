// var arr = [1, 2, 3, 4, 5, 6];

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// // Task
// var text1 = "My name is: Karim is real"
// var text2 = "My name is: Karim is real"
// var text3 = "My name is: Karim is real"

// console.log("Text1: ", text1);
// console.log("Text2: ", text2);

// text1 = text1.replace("Karim", ".....")

// for (var i = 0; i < text2.length; i++) {
//     // console.log(text2.substring(i, i + 5));

//     if (text2.substring(i, i + 5) == "Karim") {
//         text2 = text2.substring(0, i) + "....." + text2.substring(i + 5, text2.length);
//         break;
//     }
// }

// var textArr = text3.split(' ');

// for (var i = 0; i < textArr.length; i++) {
//     if (textArr[i] == "Karim") {
//         textArr[i] = ".....";
//     }
// }

// text3 = textArr.join(' ');

// console.log("Text1: ", text1);
// console.log("Text2: ", text2);
// console.log("Text3: ", text3);

var arr = ["One", "Two", "Three"];

var x;
while (x = arr.pop()) {
    console.log(x);
}
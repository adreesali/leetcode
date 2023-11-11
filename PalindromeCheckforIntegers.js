// first time 
// var isPalindrome = function(s) {
//     const formattedString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
//     return formattedString === formattedString.split('').reverse().join('');
// };

// 2nd time
// var isPalindrome = function(s) {
//     const formattedString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
//     return formattedString === formattedString.split('').reverse().join('');
// };

// 3rd time 
// var isPalindrome = function(s) {
//     const formattedString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
//     return formattedString === formattedString.split('').reverse().join('');
// };

// last time 

var isPalindrome = function(s) {
    const formattedString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    return formattedString === formattedString.split('').reverse().join('');
};

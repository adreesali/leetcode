// 1 first time
// function findMedianSortedArrays(nums1, nums2) {
//     var c = nums1.concat(nums2);
//     c.sort(function(a, b) {
//         return a - b;
//     });
//     let len = c.length;

//     if (len % 2 === 1) {
//         let index = Math.floor(len / 2);
//         return c[index];
//     } else {
//         let evenIndex = len / 2;
//         let element = (c[evenIndex - 1] + c[evenIndex]) / 2;
//         return element;
//     }
// }



// 2nd time

// function findMedianSortedArrays(nums1, nums2) {
//     var c = nums1.concat(nums2);
//     c.sort(function(a, b) {
//         return a - b;
//     });
//     let len = c.length;

//     if (len % 2 === 1) {
//         let index = Math.floor(len / 2);
//         return c[index];
//     } else {
//         let evenIndex = len / 2;
//         let element = (c[evenIndex - 1] + c[evenIndex]) / 2;
//         return element;
//     }
// }



// 3rd time
// function findMedianSortedArrays(nums1, nums2) {
//     var c = nums1.concat(nums2);
//     c.sort(function(a, b) {
//         return a - b;
//     });
//     let len = c.length;

//     if (len % 2 === 1) {
//         let index = Math.floor(len / 2);
//         return c[index];
//     } else {
//         let evenIndex = len / 2;
//         let element = (c[evenIndex - 1] + c[evenIndex]) / 2;
//         return element;
//     }
// }

// 4rth time


function findMedianSortedArrays(nums1, nums2) {
    var c = nums1.concat(nums2);
    c.sort(function(a, b) {
        return a - b;
    });
    let len = c.length;

    if (len % 2 === 1) {
        let index = Math.floor(len / 2);
        return c[index];
    } else {
        let evenIndex = len / 2;
        let element = (c[evenIndex - 1] + c[evenIndex]) / 2;
        return element;
    }
}




















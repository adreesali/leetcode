 function lengthOfLongestSubstring(s) {
    let longestLength = 0;
    let charIndexMap = {};
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        if (charIndexMap[s[end]] !== undefined) {
            start = Math.max(start, charIndexMap[s[end]] + 1);
        }
        charIndexMap[s[end]] = end;
        longestLength = Math.max(longestLength, end - start + 1);
    }

    return longestLength;
}




function intToRoman(num) {
    const romanMap = [
        { numeral: "M", value: 1000 },
        { numeral: "CM", value: 900 },
        { numeral: "D", value: 500 },
        { numeral: "CD", value: 400 },
        { numeral: "C", value: 100 },
        { numeral: "XC", value: 90 },
        { numeral: "L", value: 50 },
        { numeral: "XL", value: 40 },
        { numeral: "X", value: 10 },
        { numeral: "IX", value: 9 },
        { numeral: "V", value: 5 },
        { numeral: "IV", value: 4 },
        { numeral: "I", value: 1 }
    ];

    let result = '';

    for (const { numeral, value } of romanMap) {
        result += numeral.repeat(Math.floor(num / value));
        num %= value;
    }

    return result;
}




var romanToInt = function(s) {
    const sym = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }

  let result = 0;

  for (let i = 0; i < s.length; i++) {
      const cur = sym[s[i]];
      const next = sym[s[i + 1]];

      if (cur < next) {
          result += next - cur;
          i++;
      } else {
          result += cur;
      }
  }

  return result;
};






function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }

            sum < target ? left++ : right--;
        }
    }

    return closestSum;
}

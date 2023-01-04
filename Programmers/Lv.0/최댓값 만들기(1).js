//numbers	             result
//[1, 2, 3, 4, 5]	     20     => 4*5
//[0, 31, 24, 10, 1, 9]	 744    => 31*24
function solution(numbers) {
    var answer = 0;
    numbers.sort((a, b) => {
        return a - b;
    });
    numbers.reverse();
    answer = numbers[0] * numbers[1];
    return answer;
}
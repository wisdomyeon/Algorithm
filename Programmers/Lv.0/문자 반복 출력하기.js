//my_string	  n	  result
//"hello"	  3	  "hhheeellllllooo"
function solution(my_string, n) {
    var answer = '';
    for (let i in my_string) {
        answer += my_string[i].repeat(n);
    }
    return answer;
}
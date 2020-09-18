/**
 * Write me a function that converts any integer (up to 255) into binary
 */

const convertIntToBinary = function(num) {
    // let ans = num.toString(2);
    // return ans;
    let arr = [128,64,32,16,8,4,2,1];
    let ans ='';
    for (i = 0; i < arr.length; i++){
        // console.log(ans);
        if(255 >=num && num >= 0){
            if(num < arr[i] && num < arr[i-1]){
                ans += 0;
            }else if(num > arr[i] && num < arr[i-1]){
                ans += 1;
                num -= arr[i];
            }else if(num < arr[i]){
                ans += 0;
            }else if(num === arr[i]){
                ans += 1;
                num -= arr[i];
            }else if(num > arr[0]){
                ans += 1;
                num -= arr[i];
            }
        }else{
            return "Out of scale";
        }
    }
    return ans; 

};
console.log(convertIntToBinary(32));


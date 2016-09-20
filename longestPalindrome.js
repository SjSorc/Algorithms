function LongestPalindromicSubsequence(str){
    var result = PalindromeFinder(str, 0, str.length -1, {});
    return result;
}

function PalindromeFinder(str, startingIndex, endIndex, memo){
    
    if(memo[startingIndex + '-' + endIndex]){
       return memo[startingIndex + '-' + endIndex];   
    }
    
    if(startingIndex == endIndex){
        var res =  {
                     max: 1,
                     arr: [str[startingIndex]]
                   };
        memo[startingIndex + '-' + endIndex] = result;
        return res;
    }
    
    else if(startingIndex > endIndex){
      return {
       max: 0,
       arr: []
      }
    }
    
    if(str[startingIndex] !== str[endIndex]){
      var result = maxPalindrome(PalindromeFinder(str, startingIndex, endIndex - 1, memo), PalindromeFinder(str, startingIndex + 1, endIndex, memo));
      memo[startingIndex + '-' + endIndex] = result;
      return result;
    }
    else{
        var result = PalindromeFinder(str, startingIndex + 1, endIndex - 1, memo);
        result.max += 2;
        result.arr.unshift(str[startingIndex]);
        result.arr.push(str[endIndex]);
        memo[startingIndex + '-' + endIndex] = result;
        return result;
    }
    
}

function maxPalindrome(result1, result2){
    if(result1.max >= result2.max){
        return result1;   
    }
    else{
        return result2;
    }
}
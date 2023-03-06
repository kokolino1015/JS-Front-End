function sum(...nums){
    let result = nums[0] + nums[1];
    function subtract(result, last){
        result -= last
        return result
    }
    console.log(subtract(result, nums[2]))
}
sum(1,2,3)
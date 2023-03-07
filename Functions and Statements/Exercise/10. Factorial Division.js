function solve(first, second){
    function rFact(num)
    {
        if (num === 0)
        { return 1; }
        else
        { return num * rFact( num - 1 ); }
    }
    console.log((rFact(first) / rFact(second)).toFixed(2))
}

solve(5,2)
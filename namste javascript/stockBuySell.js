function buySell(array) {
    let profit = 0;
    for(let i =0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            let checkProfit = array[j] - array[i];
            profit = Math.max(profit, checkProfit)

            }   
        }

        return profit;
}

    
    
console.log(buySell([7, 1, 5, 3, 6, 4]));
let num = [1, 2, 3, 4, 5, 1, 2, 8, 4, 9, 10, 6];

function duplicateArray(array){
    let duplicates = [];  // array to store duplicate value
    let seen = new Set();  // set to track of seen elements

    for (let i = 0; i < array.length; i++) {
        if (seen.has(array[i])) {
            if (!duplicates.includes(array[i])) {
                duplicates.push(array[i]);
            }
        }
        else{
            seen.add(array[i]);
        }
        
    }
    return duplicates;
}

let duplicates = duplicateArray(num);
console.log(duplicates);

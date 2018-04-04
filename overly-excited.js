//Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let nextSentence = ["My", "cat", "took", "a", "job", "as", "an", "air", "traffic", "controller", "and", "crashed", "a", "flight", "with", "a", "dog", "on", "board"]
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/

//Set up function to bring in the array of words and then iterate over that array to print sentences
let addExcitement = (theWordArray, symbol) =>  {

    //Set up variables to be used
    let buildMeUp = "";
    let currentItem = "";
    let exclaimPt = symbol

    //Set up loop to iterate over the array
    for (i = 0; i < theWordArray.length; i++) {
        //Assign the first item in the array to a variable
        let currentItem = theWordArray[i];

        //The first time the loop executes, add the current item to the var buildMeUp
        if (i === 0){
            buildMeUp = currentItem;
        }
        // Each time the for loop executes, you're going to add one more current item to this string
        else {
            buildMeUp += " " + currentItem;
        }

        if ((i +1) % 3 === 0) {
            buildMeUp += exclaimPt;
            exclaimPt += symbol;
        }
        if (i === (theWordArray.length - 1)){
            buildMeUp += ".";
        }

        console.log(buildMeUp);

      }
}
// Invoke the function and pass in the array
addExcitement(sentence, "*");
addExcitement(nextSentence, ">");
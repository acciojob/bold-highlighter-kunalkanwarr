function highlight() {
    //Write your code here
// Get all <strong> elements (bold words)
    const boldWords = document.querySelectorAll('strong');
    
    // Loop through each <strong> element and change its color to green
    boldWords.forEach((word) => {
        word.style.color = 'green';
    });

}


function return_normal() {
    //Write your code here
// Get all <strong> elements (bold words)
    const boldWords = document.querySelectorAll('strong');
    
    // Loop through each <strong> element and revert its color to black
    boldWords.forEach((word) => {
        word.style.color = 'black';
    });
    
}

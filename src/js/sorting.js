
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getHigherNumberSorting(elements) {
    var sortedElements = elements.sort();
    return sortedElements[sortedElements.length - 1];
}

function getHigherNumberTraversing(elements) {
    let max = elements[0];

    for (let i = 0; i < elements.length; i++) {
        if (max < elements[i]) {
            max = elements[i];
        }
    };

    return max;
}

function benchMarkFunction(callback){
    let startTime = performance.now();
    callback();
    let endTime = performance.now();

    return (endTime - startTime).toFixed(4);
}

function addSuccessMarkTo(target){
    target.html(`<p>&#128077;</p>`);
}

function addFailMarkTo(target){
    target.html(`<p>&#128078;</p>`);
}
$(document).ready(() => {

    let randomSetSize = $("#random-set-size");
    let buttonGenerate = $("#button-generate");
    let mainContainerElements = $("#main-container-elements");
    let mainContainerComputedResult = $("#main-container-computed-result");
    let mainContainerComputedWrapper = $("#main-container-computed-wrapper");
    let traverseAlgorithmExecutionTime = $(".traverse-algorithm-execution-time");
    let sortingAlgorithmExecutionTime = $(".sorting-algorithm-execution-time");
    let traverseAlgorithmSuccessMark = $("#traverse-algorithm-success-mark");
    let sortingAlgorithmSuccessMark = $("#sorting-algorithm-success-mark");
    let generatedRandomElements = [];

     $("#traverse-algorithm-code")
        .html(getHigherNumberTraversing.toString());    
     $("#sorting-algorithm-code")
        .html(getHigherNumberSorting.toString());    

    buttonGenerate.click(() => {

        generatedRandomElements = [];
        let totalElements = randomSetSize.val();

        for (var i = 0; i < totalElements; i++) {
            generatedRandomElements.push(getRandomInt(1000000));
        }

        mainContainerElements.html(`<div><span>${generatedRandomElements.join('</span></div><div><span>')}</span></div>`);
        mainContainerComputedResult.text(`Calculate`);
        traverseAlgorithmSuccessMark.html("");
        sortingAlgorithmSuccessMark.html("");
    });


    mainContainerComputedWrapper.click(() => {

        let sortingTime = benchMarkFunction(()=>{
            getHigherNumberSorting(generatedRandomElements)
        });

        sortingAlgorithmExecutionTime.text("Elapsed time: "+sortingTime+"ms") ;        

        let traverseTime = benchMarkFunction(()=>{
            getHigherNumberTraversing(generatedRandomElements)
        });

        traverseAlgorithmExecutionTime.text("Elapsed time: "+ traverseTime +"ms");

        if(sortingTime < traverseTime){
            addSuccessMarkTo(sortingAlgorithmSuccessMark);
            addFailMarkTo(traverseAlgorithmSuccessMark);
        }else{
            addSuccessMarkTo(traverseAlgorithmSuccessMark);
            addFailMarkTo(sortingAlgorithmSuccessMark);
        }
        
        mainContainerComputedResult.text(`The highest number is: ${getHigherNumberSorting(generatedRandomElements)} `);
    });

});


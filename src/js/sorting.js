
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getHigherNumberSorting(elements) {
    var sortedElements = elements.sort();
    return sortedElements[sortedElements.length - 1];
}

function getHigherNumberTraversing(elements) {
    let max = elements[0]
    for (let i = 0; i < elements.length; i++) {
        if (max < elements[i]) {
            max = elements[i]
        }
    };
    return max;
}

$(document).ready(() => {

    let randomSetSize = $("#random-set-size");
    let buttonGenerate = $("#button-generate");
    let mainContainerElements = $("#main-container-elements");
    let mainContainerComputedResult = $("#main-container-computed-result");
    let mainContainerComputedWrapper = $("#main-container-computed-wrapper");
    let generatedRandomElements = [];

    buttonGenerate.click(() => {

        generatedRandomElements = [];
        let totalElements = randomSetSize.val();

        for (var i = 0; i <= totalElements; i++) {
            generatedRandomElements.push(getRandomInt(1000));
        }

        mainContainerElements.html(`<div><span>${generatedRandomElements.join('</span></div><div><span>')}</span></div>`);
    });


    mainContainerComputedWrapper.click(() => {
        console.log(getHigherNumberSorting(generatedRandomElements));
        console.log(getHigherNumberTraversing(generatedRandomElements));

        mainContainerComputedResult.text(`The highest number is: ${getHigherNumberSorting(generatedRandomElements)} `);
    });

});


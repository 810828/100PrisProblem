let numPris = 100
let pris = new Array(numPris)
window.onload = init;//  After the window has been loaded, go to init

function init() {
    let totalWins = 0
    let totalLosses = 0
    let wins = 0;
    let losses = 0;

    for (let x = 0; x < 100; x++) {
        loadPrisArray(pris);
        for (let i = 0; i < pris.length; i++) {
            // console.log("pris " + i + " has a LL of: " + getLoopLength(i));
            let ll = getLoopLength(i);
            if (ll <= 50) {
                wins++
                // console.log("wins: " + wins)
            } else {
                losses++;
                // console.log("losses: " + losses)
            }

        }
        if (wins >= 99) {
            totalWins++
        } else {
            totalLosses++
        }
        wins = 0
        losses = 0
    }
    console.log("twins: " + totalWins + " tlosses: " + totalLosses + "  tw/tl: " + (totalWins / totalLosses));
}


function loadPrisArray(arr) {
    //* my solution  %%%%%%%%%%%%%%%
    let newSet = new Set();
    while (newSet.size < arr.length) {
        let randomNumber = Math.floor(Math.random() * arr.length);
        newSet.add(randomNumber);
    }
    console.log(newSet)
    pris = [...newSet]
    //*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


    // for (let i = 0; i < arr.length; i++) { //* chatGBTs solution
    //     pris[i] = i;
    // }
    // pris.sort(() => Math.random() - 0.5)
    /*
    return value	sort order
     > 0	      sort a after b, e.g. [b, a]
     < 0	      sort a before b, e.g. [a, b]
    === 0	      keep original order of a and b    
    */



    // console.log("pris array: ");
    console.log(pris);
}
function getLoopLength(prisNum) {
    let count = 1;
    let boxNum = pris[prisNum]
    while (prisNum != boxNum) {
        count++;
        boxNum = pris[boxNum];
    }
    return count;
}


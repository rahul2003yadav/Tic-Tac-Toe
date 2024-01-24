let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg-container");
let resetBtn = document.querySelectorAll(".reset-btn");
let cong = document.querySelector("#cong");

let player0 = true;
const winPatterns = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click" , function () {
        if(player0) {
            box.innerText = "0";
            player0 = false;
        } else {
            box.innerText = "X";
            player0 = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

function checkWinner() {
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "" ) {
            if(pos1val == pos2val && pos2val == pos3val) {
                cong.innerText = `Congratulations! Winner is player ${pos1val}`
                msg.classList.remove("hide");
                disableAllbtns();
            }
        }
    }
}

function disableAllbtns() {
    for(let btn of boxes) {
        btn.disabled = true;
    }
}
function anableAllbtns() {
    for(let btn of boxes) {
        btn.disabled = false;
    }  
}

resetBtn.forEach( (btn) => {
    btn.addEventListener("click", function() {
        anableAllbtns();
        player0 = true;
        msg.classList.add("hide");
        for(let box of boxes) {
            box.innerText = "";
        }
    })
})
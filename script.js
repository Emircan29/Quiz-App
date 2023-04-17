// OOP Nesne Tabanlı Programlama
// Object

// let soru = {
//     soruMetni: "Hangisi Javascript paket yönetim uygulamasıdır?",
//     cevapSecenekleri: {
//         a: "node.js",
//         b: "Typescript",
//         c: "Npm"
//     },
//     dogruCevap: "c",
//     cevabıKontrolEt: function(cevap) {
//         return cevap === this.dogruCevap
//     }
// }

// let soru2 = {
//     soruMetni: "Hangisi Javascript paket yönetim uygulamasıdır?",
//     cevapSecenekleri: {
//         a: "node.js",
//         b: "Nuget",
//         c: "Npm"
//     },
//     dogruCevap: "b",
//     cevabıKontrolEt: function(cevap) {
//         return cevap === this.dogruCevap
//     }
// }

// console.log(soru.soruMetni);
// console.log(soru.cevabıKontrolEt("a"))
// console.log(soru2.cevabıKontrolEt("b"))

// Sınıf, Constructor => nesne = 30 









const quiz = new Quiz(sorular);
const ui = new Uİ();

ui.btn_start.addEventListener("click", function() {
        ui.quiz_box.classList.add("active")
        startTimer(10);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir())  
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length)
        ui.next_btn.classList.remove("show");
    })
ui.next_btn.addEventListener("click",function() {
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        ui.quiz_box.classList.add("active")
        quiz.soruIndex += 1
        clearInterval(counter);
        clearInterval(counterline)
        startTimer(10);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir()) 
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length) 
        ui.next_btn.classList.remove("show");
    }
    else {
        console.log("Quiz Bitmiştir")
        clearInterval(counter);
        clearInterval(counterline)
        ui.quiz_box.classList.remove("active")
        ui.score_box.classList.add("active")
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
    }
})

ui.btn_quit.addEventListener("click", function() {
    window.location.reload();
})
ui.btn_replay.addEventListener("click", function() {
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
})


function optionSelected(option) {
    clearInterval(counter);
    clearInterval(counterline)
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if(soru.cevabıKontrolEt(cevap)) {
        quiz.dogruCevapSayisi += 1
        option.classList.add("correct")
        option.insertAdjacentHTML("beforeend", ui.correctIcon)
    }
    else {
        option.classList.add("incorrect")
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon)
    }

    for(let i=0; i<ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled")
    }
    ui.next_btn.classList.add("show")
}
let counter;
function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        ui.time_second.textContent = time;
        time--;
        if(time < 0) {
            clearInterval(counter)
            ui.time_text.textContent = "Süre Bitti"
            let cevap = quiz.soruGetir().dogruCevap;
            for(let option of ui.option_list.children) {
                if(option.querySelector("span b").textContent == cevap) {
                    option.classList.add("correct")
                    option.insertAdjacentHTML("beforeend", ui.correctIcon)
                }
            option.classList.add("disabled")
            }
            ui.next_btn.classList.add("show")
        }
    }
}
let counterline;
function startTimerLine() {
    let line_width = 0;
    counterline = setInterval(timer, 20);
    function timer() {
        line_width += 1;
        ui.time_line.style.width = line_width + "px"

        if(line_width > 549) {
            clearInterval(counterline);
        }
    }
}





// console.log(sorular[0].soruMetni)

// for(let soru of sorular) {
//     console.log(soru.soruMetni)
// }



// console.log(soru1.soruMetni)
// console.log(soru1.dogruCevap)
// console.log(soru1.cevabıKontrolEt("c"))
// console.log(soru2.soruMetni)
// console.log(soru2.dogruCevap)
// console.log({key: "value"})
// console.log({})
// console.log(soru1.cevabıKontrolEt("c"))
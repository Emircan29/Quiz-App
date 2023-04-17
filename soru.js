function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    
    //console.log(this)
}

Soru.prototype.cevabıKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hangisi JavaSCript paket yönetim uygulamasıdır?",{ a: "Node.js",b: "Typescript",c: "Npm",d: "Nuget"}, "c"),
    new Soru("2-Hangisi Frontend kapsamında değerlendirilmez?",{ a: "Html",b: "Css",c: "JavaScript",d: "SQL"}, "d"),
    new Soru("3-Hangisi Backend kapsamında değerlendirilir?",{ a: "Node.js",b: "Typescript",c: "Angular",d:"React"}, "a"),
    new Soru("4-Hangisi Javascript programlama dilini kullanmaz?",{ a: "React",b: "Angular",c: "Vuejs",d: "ASP.NET"}, "d")
]
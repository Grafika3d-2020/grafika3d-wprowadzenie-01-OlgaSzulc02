function test2 () {
    console.log("abc");
}

test2()

const takaSobieZmienna = function(){
    console.log("abc123");
}

const takiSobieObiekt = {
    a: 1,
    b: "to jest z obiektu",
    cosTam: function() {
        alert("Uwaga Bomba");
    }
}

const takiSobieObiektaleFajniejszy = {
    e: 2,
    init: function() {
        console.log("jestem tutaj" + e)
    },
    a: 1,
    t: 10,
    b: "to jest z obiektu",
    cosTam: function() {
        alert("Uwaga Bomba");
    }
}

takiSobieObiektaleFajniejszy.init()
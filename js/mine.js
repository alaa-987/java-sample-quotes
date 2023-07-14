var quotes =['"The best revenge is massive success."',
 `"It's not what happens to you, but how you react to it that matters."`,
'"Do not take life too seriously. You will not get out alive."',
'"Resentment is like drinking poison and waiting for your enemies to die."'];

var writers =["--Frank Sinatra","--Epictetus","--Elbert Hubbard","--Nelson Mandela"];

var counter= 0;

 function test(){
    document.getElementById("demo1").innerHTML= quotes[counter];
    document.getElementById("demo2").innerHTML= writers[counter];
    counter++
    if(counter >= quotes.length){
        counter= 0;
    }
    if(counter >= writers.length){
        counter= 0;
    }

 }
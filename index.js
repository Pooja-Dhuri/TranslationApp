

function read(id3){
    return document.getElementById(id3).value;
}
let id;

async function Translate(){
    // document.getElementById("input-text").innerHTML=null;
    // document.getElementById("outputContent").innerText=null
    try{
        const input=read("input-text");
        console.log(input);
         const input_lang=read("in_lang");
         console.log(input_lang);
         const output_lang=read("out_lang");
         console.log(output_lang);
         // console.log("input:",input);
         const res=await fetch("https://libretranslate.de/translate",{
          method:"POST",
       
       
           body:JSON.stringify({
             q:input,
             source:input_lang,
             target:output_lang,
             format:"text",
           }),
         
           //headers-additional information of the server might need to know
           headers:{
             "Content-Type":'application/json'
       
           }
         })
       const {translatedText}=await res.json();
       
       document.getElementById("outputContent").innerText=translatedText;
       // console.log(data);
       }catch(err){
         console.log("err",err);
       }
       }

    //    debouncing

    function debounce(func,delay){
        if(id){
            clearInterval(id)
        }
        id=setTimeout(function(){
            func();
        },delay);
    }

    // var speech = false;
    // window.SpeechRecognition =
    //   window.SpeechRecognition || window.webkitSpeechRecognition;

    // const recognition = new SpeechRecognition();
    // recognition.interimResults = true;
    // const words = document.querySelector(".words");
    // words.appendChild(p);

    // recognition.addEventListener("result", (e) => {
    //   const transcript = Array.from(e.results)
    //     .map((result) => result[0])
    //     .map((result) => result.transcript)
    //     .join("");

    //   document.getElementById("input-text").innerHTML = transcript;
    //   // console.log(transcript);
    //   document.getElementById("outputContent").innerText=transcript;
      
    // });
  

    // console.log(speech);
    // document.getElementById("btn").addEventListener("click", (e) => {
    //   speech = true;
    //   if (speech == true) {
    //     recognition.start();
    //     recognition.addEventListener("end", recognition.start);
    //   }
    //   console.log(speech);
      
    // });


    // document.getElementById("btn2").addEventListener("click", (e) => {
    //       recognition.stop();
    //   // recognition.addEventListener("end", recognition.stop);
    //   // recognition.interimResults = false;
    //   });
   
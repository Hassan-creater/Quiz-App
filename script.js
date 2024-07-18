let statements = [
    `Which country has the highest life expectancy?`,
    `Which company was originally called "Cadabra"? `,
    `Which planet has the most moons?`,
    `How many bones do we have in an ear?`,
    `Which is the world's fastest bird?`,
    `Where did sushi originate?`,
    `Which meat is used in a shepherd's pie?`,
] 

let answers = [
    [
       'Pakistan',' Hong Kong',' France',' America'   
    ],
    [
        `Netflix`,` Facebook`,` Amazon`, `Google`
    ],
    [
        `Jupiter`, `Saturn`,` Mars`,` Earth`
    ],
    [
        `1`, `2`, `3`, `4`
    ],
    [
        `Eagle`, `Falcon`,` Crow`,` Parrot`
    ],
    [
        `China`,` Japan`,` Iran`, `Turkey`
    ],
    [
        `Beef`, `Mutton`, `Chicken`, `Lamb`
    ],

]

let num =0;
let options=0;


let questions = document.querySelector(".question");
let para = document.querySelector(".para1");

let next = document.querySelector("#btn");
let boxa = document.querySelector(".a");
let boxb = document.querySelector(".b");
let boxc = document.querySelector(".c");
let boxd = document.querySelector(".d");

next.addEventListener("click",function(){
    questions.innerHTML = `<p>${statements[num]}</p>`
    num++;
    if(num>6){
        num=0;
      }
    
    boxa.innerHTML = `<p><span>a:</span>${answers[options][0]}</p>`,
   
    
    boxb.innerHTML = `<p><span>b:</span>${answers[options][1]}</p>`,

    boxc.innerHTML = `<p><span>C:</span>${answers[options][2]}</p>`,

    boxd.innerHTML = `<p><span>d:</span>${answers[options][3]}</p>`,
    options++;
    if(options>6){
        options=0;
    }
    boxa.style.border = `4px solid #584B53`
    boxb.style.border = `4px solid #584B53`
    boxc.style.border = `4px solid #584B53`
    boxd.style.border = `4px solid #584B53`
    
    })

   

let sub=document.querySelector(".sub");

sub.addEventListener("click",function(e){
    if(e.target.innerText=="A:China" || e.target.innerText=="A:Burj Khalifa"){
        boxa.style.border = `4px solid green`
        boxb.style.border = `4px solid red`
        boxc.style.border = `4px solid red`
        boxd.style.border = `4px solid red`
    }
    if(e.target.innerText=="B:Hong Kong" || e.target.innerText=="B:Falcon" || e.target.innerText=="B:Saturn"){
        boxa.style.border = `4px solid red`
        boxb.style.border = `4px solid green`
        boxc.style.border = `4px solid red`
        boxd.style.border = `4px solid red`
    }
    if(e.target.innerText=="C:Amazon" || e.target.innerText=="C:3"){
        boxa.style.border = `4px solid red`
        boxb.style.border = `4px solid red`
        boxc.style.border = `4px solid green`
        boxd.style.border = `4px solid red`
    }
    if(e.target.innerText=="D:Lamb"){
        boxa.style.border = `4px solid red`
        boxb.style.border = `4px solid red`
        boxc.style.border = `4px solid red`
        boxd.style.border = `4px solid green`   
    }
})





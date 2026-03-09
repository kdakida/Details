const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

/* corazones decorativos */

let particles=[]

function heart(t){

return{

x:16*Math.pow(Math.sin(t),3),

y:13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t)

}

}

for(let t=0;t<Math.PI*2;t+=0.15){

let p=heart(t)

particles.push({

x:p.x,
y:p.y

})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="rgba(170,120,255,0.5)"

particles.forEach(p=>{

let x = canvas.width/2 + p.x*30
let y = canvas.height/2 - p.y*30 -200

ctx.beginPath()
ctx.arc(x,y,2,0,Math.PI*2)
ctx.fill()

})

}

function animate(){

draw()
requestAnimationFrame(animate)

}

animate()

/* botón */

function activate(){

document.getElementById("ui").style.left="30%"

showText()

}

/* efecto escribir */

function showText(){

const textContainer = document.getElementById("text")

const message = `Amor, realmente no sabía qué hacer en este día, que es especial para ustedes. Además, puede que ni siquiera lo celebres, o tal vez sí, no lo sé. Pero más que una excusa para verte o darte un regalo, quiero que sigas sintiendo ese apoyo que tal vez a veces puede faltar entre estos días de tanto ajetreo.

Supongo que ya acabaste tu semana de parciales y proyectos, o tal vez solo proyectos, o puede que aún sigas en eso. Que no te lo pregunte no significa que no quiera saber cómo te va.

El caso es el siguiente: no celebraría esto solo como un día especial, sino como otra forma de recordarte que te amo. Eres increíble, y no lo digo por fanfarronería ni nada por el estilo. Te diviertes a tu manera, haces las cosas a tu manera, y aun así eres increíblemente efectiva.

Entonces, más que recordar este día importante (que obviamente lo es), quiero decirte que ya dejaste una marca en este mundo. Puede que no todos la vean en este momento, como pasó con muchos grandes personajes de la historia, pero en el futuro, con esa huella que ya dejaste, podrás ser inspiración para muchos otros y otras que quieran recorrer un camino como el tuyo. No será el mismo, pero demostrarás que, si tú lo hiciste, tampoco les quedará grande a ellos.

Además de todo eso que se ve por fuera, incluso desde la lógica, tu parte emocional tampoco se queda atrás. Aun sin saber si todo será verdad o no, siempre luchas cuando quieres que alguien se quede, y eso me queda más que claro.

No sé todo lo que has pasado, ni todas las personas que has tenido que dejar atrás, ni las que vendrán después. Pero quiero que sepas que, de verdad, ya me amañé aquí, y me quedaré aquí, a tu lado. Incluso cuando no puedas contestar, cuando no hablemos en todo un día, cuando te extrañe o quiera verte pero tu horario no lo permita.

Que sepas que te amo. Apoyo cada decisión que tomes (menos las que me involucren, esas sí háblalas conmigo porfis jajaja). Pero de verdad, mientras esté en mi poder, siempre estarás primero. Incluso cuando esté lloviendo, estemos peleados o atravesemos momentos difíciles, siempre tendrás mi mano.

No solo quiero ocupar el lugar de ser tu novio. También quiero ser tu fortaleza y ayudarte, aunque sea con poco o con mucho, en cada situación. Y tal vez eso empiece con dejarme ayudarte más.

Siempre te respetaré, y por eso a veces insistiré hasta que me digas que sí (porque en el fondo siento que también quieres).

Tú decides, pero siempre tendrás un admirador entre las gradas, sin importar qué pase con nosotros, el momento, el lugar o el tiempo que pase.

Te amo demasiado. Puede que sí esté un poco loco, pero en un mundo tan lógico, la locura trae cosas nuevas y vuelve todo un poco menos común.

"Si tu capacidad de soñar es grande, tu capacidad de lograrlo es aún más grande."

Espero que hayas pasado un feliz Día de la Mujer. Mucho texto ja ja, cual sera el siguiente regalo?`;


let i=0

textContainer.style.opacity=1
textContainer.innerHTML=""

const typing = setInterval(()=>{

textContainer.innerHTML += message[i]

i++

if(i>=message.length){

clearInterval(typing)

}

},10)

}
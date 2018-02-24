let adjectives = [
    "ambitious",
    "amazing",
    "awesome",
    "awe-inspiring",
    "aspirational",
    "asthmatic",
    "alluring",
    "approachable",
    "academic",
    "accepting",
    "accomplished",
    "adorable",
    "adventurous",
    "affectionate",
    "admired",
    "affirming",
    "agile",
    "altruistic",
    "appealing",
    "artistic",
    "articulate",
    "assertive",
    "attentive",
    "authentic",
    "audacious",
    "astute",
    "adept",
    "adaptable",
]

let answerDiv=document.querySelector('#answers')

window.addEventListener("keyup", e => {
    let string=document.querySelector('#input').value
    if (e.key=="Enter"){
        input.value=""
    }
    if (adjectives.includes(string)){
        let word=document.createElement('h3')
        word.innerHTML=string
        answerDiv.appendChild(word)
        let input=document.querySelector('#input')
        input.value=""
        
    }
})
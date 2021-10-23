//Fill html with question and choice
const question=document.getElementById('question')
const aText=document.getElementById("a-text")
const bText=document.getElementById("b-text")
const cText=document.getElementById("c-text")
const dText=document.getElementById("d-text")


const submitBtn=document.getElementById('submit')
const reload=document.getElementById('reload')

//know what is the answer was clicked by user
const answerEls=document.querySelectorAll('.answer')
const quiz=document.getElementById("quiz")

const resultPage=document.getElementById('resultPage')



function getJson(path){
    let jsonObj=path.split('/')[1].split('.')[0]
    fetch(path)
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        let score=0;
      let currentQuiz=0

    //    path.split('/')[1].split('.')[0]
    let str=`${jsonObj}`

    console.log(data[str])
    
        loadData()
    
        
    var resultHistory=[]
    
    
    function HistoryAnswer(question,useAnswer,correct){
    this.question=question;
    this.useAnswer=useAnswer;
    this.correct=correct;
    resultHistory.push(this)
    }
    
    function loadData(){
        removeSelect()
        const currentQuizData=data[str][currentQuiz];
        question.innerText=currentQuizData.question
        aText.innerText=currentQuizData.a
        bText.innerText=currentQuizData.b
        cText.innerText=currentQuizData.c
        dText.innerText=currentQuizData.d
    }
    
    
    
    function getUserAnswer(){
        let firstAnswer=undefined;
        answerEls.forEach(x=>{
            if(x.checked){
                firstAnswer=x.id
            }
        })
        console.log(firstAnswer)
        new HistoryAnswer(data[str][currentQuiz].question,firstAnswer,data[str][currentQuiz].correct)
    
        return firstAnswer
    
    }
    
    function removeSelect(){
        answerEls.forEach(x=>{
            x.checked=false
        })
    }
    
    function renderQuizzes(e){
        let correctAnswer=getUserAnswer();
        console.log(resultHistory)
        if(correctAnswer){
            if(correctAnswer===data[str][currentQuiz].correct){
                score++
            }
            currentQuiz++;
    
       if(currentQuiz<data[str].length){
           loadData()
       }else{
           e.preventDefault()
        quiz.innerHTML=`<h2>you answered correctly at ${score}/${data[str].length} questions.
        </h2>`;
        setLocalStorage()
        reload.style.display="block"
        reload.setAttribute('onclick','location.reload()')
        submitBtn.innerText='Show all result'
        resultPage.setAttribute('href','index.html')
        console.log(resultPage)
        submitBtn.removeEventListener('click',renderQuizzes)
    
        // submitBtn.setAttribute('onclick','location.reload()')
        
     }
     
    
    
        }
    }
    
    submitBtn.addEventListener('click',renderQuizzes)
    
    
    function setLocalStorage(){
        var convertToJson=JSON.stringify(resultHistory)
        localStorage.setItem('userAnswer',convertToJson)
    }
    
    // function getLocalStorage(){
    //     var products2=localStorage.getItem('products')
    //     if(products2 !=null){
    // productList=JSON.parse(products2)
    // renderData()
    //     }
    // }
    // getLocalStorage( )
    
    
    })


}

let idName=localStorage.getItem('id')
if(idName !=null){
    console.log(idName)
    if(idName=="javascr"){
        
        getJson('json/javascript.json')
    }
   else if(idName=='cssStyle'){

    getJson('json/css.json')


   }
   else{
    getJson('json/html.json')

   }
}



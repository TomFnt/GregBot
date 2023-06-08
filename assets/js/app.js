const datalist = document.querySelector("#datalist");
const question = document.querySelector(".messquestion");
const answer = document.querySelector(".messreponse");
const inputdialog = document.querySelector(".question");


fetch("https://gregbot-back.onrender.com/api/v1/dialogs")
    .then(response=>response.json())
    .then(data=>{
        data.message.forEach(dialog => {
            datalist.innerHTML += `<option value="${dialog.question}">`
        })

        inputdialog.addEventListener("change", e=>{
            question.innerHTML=document.querySelector(".form").value
            data.message.forEach(dialog =>{
                if(e.target.value === dialog.question){
                    console.log(dialog.answer)
                    answer.innerHTML = dialog.answer
                }
            })
        })
    })
    .catch(error=>console.log(error))


class Todo{
 /*   constructor(title){
        this.title=title
        this.addElement();
    } */
    static addElement(title) {
        let newLi=document.createElement("li");
        let check = document.createElement("input");
        let label = document.createElement("label");
    
        check.type="checkbox";
        label.innerText=title;
        newLi.append(check,label);
        $results.appendChild(newLi);
        newLi.classList.add("liSty");
        check.style.cursor= "pointer";

        check.onclick= ()=>{
            newLi.remove()
        }
    }
    
}

// Select Elements
    let $input = document.querySelector("#new_item");
    let $results = document.querySelector(".results");
    let $msg = document.querySelector(".warn");
// warn msg if input empty
function warnMsg(){
    $msg.style.display= "block" ;
    $input.style.border= "1px solid red"

}
function clearWarn(){
    $msg.style.display= "none" ;
    $input.style.border= ""
}
// check validate
/*
function validate(){
    if($input.value == " "){
        warnMsg()
    }
    else
    {
        let inputVal = $input.value;
        // create object from Todo class
        let todo= new Todo(inputVal)
        
    }
}
*/

window.onload = function(){
    document.getElementById("add-btn").onclick =  function(){
        //if($input.value.trim().lenght())
        let task = $input.value.trim() ;
        $input.value = "";
        if (task === ""){
            warnMsg();
        }else{
             clearWarn();   
            (Todo.addElement(task)); 
            
        }
    };

    document.getElementById("clear-btn").onclick = function(){
        $results.innerHTML = "";
//        console.log($results.children);
 //       let taskElement ;
  //      for(taskElement in $results.children ) taskElement.remove();
    };
}

   
    





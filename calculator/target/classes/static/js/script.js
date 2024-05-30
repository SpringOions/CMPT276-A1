var assignment_num = 1;

var add_button = document.querySelector('button[id="add_Row"]')
add_button.addEventListener('click', function(evt){
    assignment_num++
    console.log(assignment_num)

    var new_n = "A" + assignment_num + "-numerator"
    var new_d = "A" + assignment_num + "-denominator"
    var new_weight = "A" + assignment_num + "-weight"

    const new_Row = document.createElement("tr");
    const new_td = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")
    const td4 = document.createElement("td")
    const td5 = document.createElement("td")

    new_td.innerText = "Activity " + String(assignment_num)
    td2.innerText = "A" + assignment_num

    new_Row.appendChild(new_td)
    new_Row.appendChild(td2)
    new_Row.appendChild(td3)
    new_Row.appendChild(td4)
    new_Row.appendChild(td5)
    
    var one = '<input type="number" id="' + new_n +'"> / <input type="number" id = "' + new_d +'">'
    td4.innerHTML= one

    const new_input = document.createElement("input")
    new_input.type = "number"
    new_input.id = new_weight

    td3.appendChild(new_input)

    const newp = document.createElement("p")
    newp.id = "A" + assignment_num +"-percent"

    document.getElementById("gradeTable").appendChild(new_Row)
})

var mean_button = document.querySelector('button[id="mean"]')
mean_button.addEventListener("click", mean)

var weight_button = document.querySelector('button[id="weight"]')
weight_button.addEventListener("click", weighted)

function percent(int,percent){
    var paragraph = "A" + int + "-percent"
    var per = document.getElementById(paragraph)

    per.textContent = percent + "%"

}

function mean(){
    
    var isEmpty = checkEmpty()
    if(isEmpty == false){
        
        var meanGrade = 0
        for(var i=1;i<=assignment_num;i++){
            var n = "A" + String(i) + "-numerator"
            var d = "A" + String(i) + "-denominator"

            var percent = ((document.getElementById(n)?.value)/(document.getElementById(d)?.value))
            percent(i,percent)

            meanGrade += percent
        }
        meanGrade = meanGrade/assignment_num

        document.getElementById("results").innerText = String(meanGrade*100) + "/100"
    }
}

function weighted(){
    var isEmpty = checkEmpty()

    if(isEmpty == false){
        var weightedGrade = 0
        var total_weight = 0

        for(var i=1;i<=assignment_num;i++){
            var weight_id = "A" + String(i) +"-weight"
            var n = "A" + String(i) + "-numerator"
            var d = "A" + String(i) + "-denominator"

            var fraction = (document.getElementById(n)?.value)/(document.getElementById(d)?.value)

            percent(i,fraction)

            var cur_weight = document.getElementById(weight_id)?.value
            weightedGrade += (fraction)*cur_weight
            total_weight += Number(cur_weight)
        }

        weightedGrade = weightedGrade/total_weight;

        document.getElementById("results").innerText = String(weightedGrade*100) + "/100"
    }
}

function checkEmpty(){
    var isEmpty = false;

    for(var i=1;i<=assignment_num;i++){
        var weight_id = "A" + String(i) +"-weight"
        var n = "A" + String(i) + "-numerator"
        var d = "A" + String(i) + "-denominator"

        var weight = document.getElementById(weight_id).value
        var numerator = document.getElementById(n).value
        var denominator = document.getElementById(d).value

        if ( !weight || !numerator || !denominator){
            isEmpty = true
            document.getElementById("results").innerText = "Assignment " + String(i) + " is Empty or missing values"
            return isEmpty
        }
    }

    return isEmpty;
}
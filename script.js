function insert(num){
    if(num=="c"){

        document.form.textview.value = ''

    } else {
        document.form.textview.value = document.form.textview.value+num
    }

    

    
}
function equal(){
    var exp = document.form.textview.value;
    if(exp){

         var calc = eval(exp) 
            console.log(typeof calc)
            if(calc == Infinity){
                document.form.textview.value = " divisão por zero "
                setTimeout(function(){
                    document.form.textview.value = ""
                },2000)
            }else {
                document.form.textview.value = calc
            }
     }
}

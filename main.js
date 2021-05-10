var num_of_guest=[];

function submit1(){
    var guestName=document.getElementById("name1").value
num_of_guest.push(guestName)
document.getElementById("names_with_comas").innerHTML=num_of_guest.toString()

}

function show(){
    var i=num_of_guest.join('<br>')
    document.getElementById("disply_list").innerHTML=i.toString()

}

function sorting(){
    num_of_guest.sort()
    var k=num_of_guest.join("<br>")
    document.getElementById("display_sorted_list").innerHTML=k.toString()

}

function search(){
    var s=document.getElementById("search_input").value
    var found=0;
    var j;
    for (j=0; j<num_of_guest.length; j++)
    {
        if(s==num_of_guest[j]){
            found=found+1;
        }
    }
    document.getElementById("search_name").innerHTML="name found "+found+" time/s" 
}


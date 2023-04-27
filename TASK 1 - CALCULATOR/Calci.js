
function display(v)
{
    document.getElementById('inputbox').value+=v;
    
}
function clearscreen()
{
    document.getElementById('inputbox').value=' ';
    
}
function result()
{
    let a = document.getElementById('inputbox').value;
    let b = eval(a);
    document.getElementById('inputbox').value=b;
}
function deleteonebyone()
{
    document.getElementById('inputbox').value=document.getElementById('inputbox').value.slice(0,-1); 
}
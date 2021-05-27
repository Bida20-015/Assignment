 function myfunction(){
    if(document.myform.user.value=="")	{
    alert("enter username");
    document.myform.user.focus();
return false;
    }
    if(document.myform.pass.value=="")	{
    alert("enter password");
    document.myform.pass.focus();
return false;
    }
else{
alert("Thank You for logging in");  return true;
    }
}

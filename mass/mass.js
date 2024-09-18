var weight=56,height=1.78;
var bmi=weight/(height*height);

if(bmi < 18.5 )
{
    console.log("underwieght")
}  
else if(bmi >= 18.5 && bmi <= 24.9)
{
    console.log("normalweight")
}    
else if(bmi >= 25 && bmi <= 29.9)  
{
    console.log("overwieght")
}  
else
{
    console.log("obese")
}  
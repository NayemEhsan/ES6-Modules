/*
Truthy :
1.Truth
2.Any number positive or negative will be truthy except 0
3.String execpt ""
4.'0'
5.{}
6.[`]
Falsy:
1.False
2.0
3.Empty string
4.Undefined,Null
*/ 
const x = false;
if(x){
    console.log("value of x is truthy")
}else{
    console.log("value of x is falsy")
}

//  OPtional
// check falsy
if(!x){
    console.log("value is truthy")
}else{
    console.log("value is truthy")
}
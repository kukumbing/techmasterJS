/**
 * Created by kukumbing on 7/14/2015.
 */


function f1(n){

    if((typeof (n))!=="number"||n!==parseInt(n,10)){
        return "It's must be an integer!";
    }else{
        var r=1;

        if (n===0||n===1) {return 1;} else{

            for(n;n>=1;n--){

                r=r*n;
            }

            return r;
        }
    }
}


function f2(n){
    if((typeof (n))!=="number"||n!==parseInt(n,10)){
        return "It's must be an integer!";
    } else{
        if(n==1||n==0) {
            return 1;
        }

        else {
            return n*(f2(n-1));

        }
    }
}

console.log(f1(5));
console.log(f2("sdf"));



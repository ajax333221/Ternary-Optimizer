/** Copyright (c) 2014 Ajax Isepic (ajax333221) Licensed MIT */

/*jshint indent:4, quotmark:double, onevar:true, undef:true, unused:true, trailing:true, curly:true, es3:true, latedef:nofunc, bitwise:false, sub:true */

function ternaryOptimizer(num1, num2, bol){
	var old, notGr, temp, temp2, temp3, rtn;
	
	old=("(x?"+num1+":"+num2+")");
	notGr=(num1<num2);
	
	if(num1==num2){
		rtn=num1;
	}else if(Math.abs(num1-num2)==1){//if 'num1' and 'num2' differ by 1 unit
		rtn=(notGr ? (num2+"-x") : ("x+"+num2));
	}else{
		rtn=(((!num1 || (num2&&notGr)) ? "!" : "")+"x*");
		
		if(notGr){
			//swap 'num1' and 'num2'
			temp=num1;
			num1=num2;
			num2=temp;
		}
		
		if(num2){
			if(!num1){
				//swap 'num1' and 'num2'
				num1=num2;
				num2=0;
			}
			
			rtn=("("+rtn+""+(num1-num2)+")+"+num2);
		}else{
			rtn+=(""+num1);
		}
	}
	
	temp2=("("+rtn+")").replace(/\(0\-/g,"(-").replace(/\+0\)/g,")").replace(/\+\-/g,"-").replace(/^\(+|\)+$/g,"");
	temp2=(temp2=="x" ? "x*1" : temp2).split(")");
	temp3=temp2[0].split("*");
	
	/* there is NO need to replace:
		"--" with "+"
		
		"(0+" with "("
		"-0)" with ")"
		
		"(1*" with ""
		"*1)" with ""
		
		"(-1*" with <other>
		"*-1)" with <other>
	*/
	
	rtn=("("+(temp3.length>1 ? (temp3[1]+"*") : "")+temp3[0]+(temp2[1] || "")+")");
	rtn=((rtn.length<old.length+(bol/2)) ? rtn : old);
	
	return rtn;
}

// function pr(a){
// 	return new Promise((res,rej)=>{
// 		if(a%2==0){
// 				res(a)		
// 		}
// 		else{
// 			rej(a)
// 		}
// 		})
// }





// pr(15).then((x)=>{

// 		console.log(`${x} number is Even number`)
// })
// .catch((y)=>{
// 		console.log(`${y} number is Odd number`)	
// })
		
		// amstrong

function pr(n){
// let x=371;

let y=n;
let z=y;
let sum=0;
let count=0;

while(n!=0){
	let rem=n%10;
	n=(n-rem)/10;
	count++
}
while(y>0){
	let rem=y%10;
		y=(y-rem)/10;
		 sum+=(rem**count)
}



		// let sum=371;
	return new Promise((res,rej)=>{
		if(sum==z){
				res(z)		
		           }
		else{
			rej(z)
		    }
		})
}

pr(407)
.then((x)=>{

		console.log(`${x} number is amstrong number`)
})
.catch((y)=>{
		console.log(`${y} number is not amstrong number`)	
})

// 				// palindrome
// function pr(n){
// let y=n;
// let sum=0;
// while(n!=0){

// 	let rem=n%10;
// 		n=(n-rem)/10;	
// 	sum=(sum*10)+rem;
// 	}

// 		// let sum=371;
// 	return new Promise((res,rej)=>{
// 		if(sum==y){
// 				res(y)		
// 		           }
// 		else{
// 			rej(y)
// 		    }
// 		})
// }

// pr(373).then((q)=>{

// 		console.log(`${q} number is palindrome number`)
// })
// .catch((w)=>{
// 		console.log(`${w} number is not palindrome number`)	
// })

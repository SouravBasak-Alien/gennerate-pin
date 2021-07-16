//generate pin start
document.getElementById('generateBtn').addEventListener('click',function(){
	const randomPin = Math.random()*10000;
	const roundPin = Math.round(randomPin) + '';
	
	if(roundPin.length == 4){
		document.getElementById('generateInput').value = roundPin;
	}
	else{
		
		return randomPin;
	}

})
//generate pin end

//submit pin start

function submitBtn(btnNum) {
	const submitInput = document.getElementById('submitInput').value;
	document.getElementById('submitInput').value = submitInput + btnNum;

}

function clearBtn() {
	document.getElementById('submitInput').value = '';
	
}
function delBtn() {
	const submitInput = document.getElementById('submitInput').value;
	document.getElementById('submitInput').value = (submitInput.slice(0,-1));
}


document.getElementById('submitBtn').addEventListener('click', function(){
	

	const generateValue = document.getElementById('generateInput').value;
	const submitValue = document.getElementById('submitInput').value;

	

	if(submitValue != ''){

		if(generateValue == submitValue){
			pinstatus("block","none")
		}
		else{
			pinstatus("none","block")
			const tryValue = document.getElementById('tryNum').innerText;
			tryNumber = parseInt(tryValue);
			const tryCount = tryNumber;
			
			if(tryValue != 0 ){
				const tryResult = tryCount - 1;
				console.log(tryResult)
				document.getElementById('tryNum').innerText = tryResult;
			}
			else{
				alert('try later')
			}

		}
		
		
	}
	if(submitValue == ''){
		alert("input generate Pin")
	}

	
})



function pinstatus(pinRight,pinWrong){
	const rightStatus = document.getElementById('pinRight');
		rightStatus.style.display = pinRight;
	const wrongStatus = document.getElementById('pinWrong');
		wrongStatus.style.display = pinWrong;
}
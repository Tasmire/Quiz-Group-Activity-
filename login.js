$('.span').hide();					

//Traversing
$username = $('#username');			
$password = $('#password');
$submit = $('#submit');

$('#quiz').hide();			

$('#submit').click(function(e){  
	e.preventDefault();
	$('#login').hide();
	$('#quiz').show();
});

//manipulation
function val_username(){			
	if($username.val() !== ""){ 	
		$username.next().hide();	
		return true;
	}else{
		$username.next().show();	
	}
}

function val_password(){
	if($password.val().length>=6){ 	
		$password.next().hide();	
		return true;
	}else{
		$password.next().show();	
	}
}

function enableSubmit(){
	if(val_username() && val_password()){	
		$submit.prop('disabled', false);	
	}else{
		$submit.prop('disabled', true);		
	}
}

//events
$username.focus(val_username).keyup(val_username).keyup(enableSubmit)
$password.focus(val_password).keyup(val_password).keyup(enableSubmit)

$('#submit').click(function(e){ 
	e.preventDefault();
	$('#login').hide();
	$('#quiz').show();
    $('#quiz').enableSubmit();
});
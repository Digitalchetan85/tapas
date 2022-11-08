
function sendContact() {
    var valid;  
    valid = validateContact();
    
    if(valid) {
        // $("#mail-status").html("<div class='alert alert-success text-center m-2'>Thanks for contacting us.We will reach you soon.</div>" );
        jQuery.ajax({
        url: "mail.php",
        type: "POST",
        data:'name='+$("#name").val()+'&message='+$("#message").val()+'&phone='+$("#phone").val(),
        
        success:function(data){
        $("#mail-status").html(data);
        dataclear1();
        },
        error:function (data){
        $("#mail-status").html(data);
        }
        });
    }
}

function dataclear1(){
    $("#name").val('');
    $("#message").val('');
    $("#phone").val('');
}

function validateContact() {
    var valid = true;   
    //alert("HI");
        
    $("#name-info").html("");
    $("#name").css('border-color','#5cb85c');

    $("#message-info").html("");
    $("#message").css('border-color','#5cb85c');

    $("#phone-info").html("");
    $("#phone").css('border-color','#5cb85c');
    
    if(!$("#name").val()) {
        $("#name-info").html("Enter Your Name");
        $("#name").css('border-color','#dc3545');
        $("#mail-status").html('<p class="alert text-center alert-danger m-2"><strong>Please Enter Valid details.</strong></p>');
        valid = false;
    }
    if(!$("#message").val()) {
        $("#message-info").html("Message required");
        $("#message").css('border-color','#dc3545');
        $("#mail-status").html('<p class="alert text-center alert-danger m-2"><strong>Please Enter Valid details.</strong></p>');
        valid = false;
    }
    
    if(!$("#phone").val()) {
        $("#phone-info").html("Provide Contact No.");
        $("#phone").css('border-color','#dc3545');
        $('#mail-status').html('<p class="alert text-center alert-danger m-2"><strong>Please Enter Valid details.</strong></p>');
        valid = false;
    }

    // if(!$("#phone").val().match(/^[0-9]/)) {
    //     $("#phone-info").html("Provide valid contact No.");
    //     $("#phone").css('border-color','#dc3545');
    //     $('#mail-status').html('<p class="alert text-center alert-danger m-2"><strong>Please Enter Valid details.</strong></p>');
    //     valid = false;
    // }
    
    return valid;
    
}

//home
function sendHomeContact() {
    var valid;  
    valid = validateHomeContact();
    
    if(valid) {
        // $("#home-mail-status").html("<div class='alert alert-success text-center m-2'>Thanks for subscribing with us.</div>" );
        jQuery.ajax({
        url: "home-mail.php",
        type: "POST",
        data:'home-name='+$("#home-name").val()+'&home-email='+$("#home-email").val(),
        
        success:function(data){
        $("#home-mail-status").html(data);
        dataclear2();

        },
        error:function (data){
        $("#home-mail-status").html(data);
        }
        });
    }
}

function dataclear2(){
    $("#home-name").val('');
    $("#home-email").val('');
}

function validateHomeContact() {
    var valid = true;   
    //alert("HI");
        
    $("#home-name-info").html("");
    $("#home-name").css('border-color','#5cb85c');

    $("#home-email-info").html("");
    $("#home-email").css('border-color','#5cb85c');
    
    if(!$("#home-name").val()) {
        $("#home-name-info").html("Enter Your Name");
        $("#home-name").css('border-color','#dc3545');
        valid = false;
    }
    if(!$("#home-email").val()) {
        $("#home-email-info").html("(required)");
        $("#home-email").css('border-color','#dc3545');
        valid = false;
    }
    if(!$("#home-email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#home-email-info").html("(invalid)");
        $("#home-email").css('border-color','#dc3545');
        valid = false;
    }
    
    return valid;
    
}

//home-1

function sendHomeContact1() {
    var valid;  
    valid = validateHomeContact1();
    
    if(valid) {
        // $("#home-mail-status1").html("<div class='alert alert-success text-center m-2'>Thanks for subscribing with us.</div>" );
        jQuery.ajax({
        url: "home-mail1.php",
        type: "POST",
        data:'home-name1='+$("#home-name1").val()+'&home-email1='+$("#home-email1").val(),
        
        success:function(data){
        $("#home-mail-status1").html(data);
        dataclear3();

        },
        error:function (data){
        $("#home-mail-status1").html(data);
        }
        });
    }
}

function dataclear3(){
    $("#home-name1").val('');
    $("#home-email1").val('');
}

function validateHomeContact1() {
    var valid = true;   
    //alert("HI");
        
    $("#home-name1-info").html("");
    $("#home-name1").css('border-color','#5cb85c');

    $("#home-email1-info").html("");
    $("#home-email1").css('border-color','#5cb85c');
    
    if(!$("#home-name1").val()) {
        $("#home-name1-info").html("Enter Your Name");
        $("#home-name1").css('border-color','#dc3545');
        valid = false;
    }
    if(!$("#home-email1").val()) {
        $("#home-email1-info").html("(required)");
        $("#home-email1").css('border-color','#dc3545');
        valid = false;
    }
    if(!$("#home-email1").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#home-email1-info").html("(invalid)");
        $("#home-email1").css('border-color','#dc3545');
        valid = false;
    }
    
    return valid;
    
}
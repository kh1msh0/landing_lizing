function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  validate = function() {
    var form = $("#myform").serializeArray();
    var errors = [];

    for (var i = 0; i < form.length; i++) {
      if (form[i].name == "Name" && form[i].value.length < 2) {
        errors.push("Name");
      } else if (form[i].name == "Lastname" && form[i].value.length < 3) {
        errors.push("Lastname");
      } else if (form[i].name == "Manufacturer" && form[i].value.length < 3) {
        errors.push("Manufacturer");
      } else if (form[i].name == "Model" && form[i].value.length < 3) {
        errors.push("Model");
      } else if (form[i].name == "Time" && form[i].value.length != 4) {
        errors.push("Time");
      } else if ( form[i].name == "Phone" && (form[i].value.length < 7 || parseInt(form[i].value) < 1 || form[i].value.length > 9 )) {
        errors.push("Phone");
      } else if (form[i].name == "Email" && !validateEmail(form[i].value)) {
        errors.push("Email");
      } else if (form[i].name == "ID" && form[i].value.length != 11 )  {
        errors.push("ID");
      }
    }
    if (errors.length > 0) {
        $(`#myform input`).removeClass("is-invalid");
      for (var i = 0; i < errors.length; i++) {
        $(`#myform input[name="${errors[i]}"`).addClass("is-invalid");
      }
      return false;
    }
    return true;
  };

//   radio buttons
  $('.form-check-input').click(function() {
    if($('#inlineRadio2').is(':checked')) {
        $('.car_models').prop("disabled", false); 
        $('.aboutcar').show() 
    }else{
        $('.car_models').prop("disabled", true); 
        $('.aboutcar').hide() 
    }
  });

  function validated() {
    $('.form_and_gift').hide();
    $('.loaderi').show();
    setTimeout(function() {
      $('.loaderi').hide();
      $('.success').show();
      
    }, 1500);
  }

  // $('#try_again').click(function(){

  // })


  

  $(document).ready(function(){
    $('.loaderi').hide() 
    $('.aboutcar').hide() 
    $('.success').hide() 
    $("#submit_and_validate").click(function(){
        if (validate()){
          validated()

        }else{
            console.log("cudia")
        }
      })
  })






        $(document).ready(function(){

         $('.modal-trigger').leanModal();
          
          $('#buscar').select2({
              allowClear: true,
              minimumInputLength: 2,
              maximumSelectionSize: 6,
              escapeMarkup: function(m) { return m; },
             }
            );
          
          $('#ingresar').on('click',function(){
              var u=$('#username').val();
              var p=$('#password').val();
              
            
              $.ajax({
                  data: {"username" : u,"password": p},
                  url:   'users/login',
                  type:  'post',
                  dataType:'json', beforeSend: function (xhr) {
                          xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                          console.log("enviado");
                          setTimeout("location.reload()", 5000);
                         
                  },
                  success:  function (response){
                       setTimeout("location.reload()", 5000);
                       
                                   }
                   });
             });  

          });

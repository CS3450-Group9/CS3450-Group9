export default {
    delimiters: ['${', '}'],
    data() {
        return {
          name: '',
          email: '',
          location: '',
          description: '',
          url: undefined
        };
      },
      methods: {
    
        submitForm() {
          // Check that no fields are empty
          if (this.name && this.email && this.location && this.description) {
            alert('Form Submitted! Help is on the way!')
          } else {
            alert('Please fill out all fields');
          }
        },
        url_redirect(url){
          var X = setTimeout(function(){
              window.location.replace(url);
              return true;
          },300);
      
          if( window.location = url ){
              clearTimeout(X);
              return true;
          } else {
              if( window.location.href = url ){
                  clearTimeout(X);
                  return true;
              }else{
                  clearTimeout(X);
                  window.location.replace(url);
                  return true;
              }
          }
          return false;
      }
      




      }
}

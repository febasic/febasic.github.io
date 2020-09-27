(function () {
  let forms = document.querySelectorAll('form');
  for (let j = 0; j < forms.length; j++) {
    forms[j].addEventListener('submit', function(event){
      event.preventDefault();
      let data = [];
      let form = this;
      for ( let i = 0; i < form.elements.length - 1; i++ ) {
        let element = form.elements[i];
        if (((element.value != '') && (element.name != '')) && ((element.type != 'radio') && (element.type != 'checkbox'))) {
          data.push(`${element.name}:${element.value}`);
        } else if ((element.type == 'radio') || (element.type == 'checkbox')) {
          if (element.checked) {
            data.push(`${element.name}:${element.value}`);
          }
        }
      }
      if (data.length) {
        console.log(data);
      } else {
        console.error('there is no data to be displayed');
      }
    });
  }
}());

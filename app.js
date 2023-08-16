function appendNeed(number) {
    var result = document.getElementById('result');
    result.value += number;
  }
  
  function calculate() {
    var result = document.getElementById('result');
    var expression = result.value;
  
    try {
      var answer = eval(expression);
      result.value = answer;
    } catch (error) {
      result.value = 'Error';
    }
  }
  
  function clearResult() {
    var result = document.getElementById('result');
    result.value = '';
  }
  
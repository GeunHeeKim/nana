function login() {
  // Form fields, see IDs above
  const params = {
    email: document.querySelector('#loginEmail').value,
    password: document.querySelector('#loginPassword').value
  }
  console.log(params);
/*
  const http = new XMLHttpRequest()
  http.open('POST', 'http://ec2-13-209-88-11.ap-northeast-2.compute.amazonaws.com/auth/login')
  http.setRequestHeader('Content-type', 'application/json')
  http.send(JSON.stringify(params)) // Make sure to stringify
  http.onload = function() {
    // Do whatever with response
    alert(http.responseText)
  }
  */
}
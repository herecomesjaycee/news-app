// <!-- <script>
// fetch()
// results
// document.getElementfor(i=0; i<4: i++){result[i].title}
// </script> -->


var fetchRequest = fetch('http://127.0.0.1:8080/test.json', {mode: 'no-cors'}).then(function(response){
	console.log(response);
})

fetchRequest.then(function(response) {
	console.log(response)
})

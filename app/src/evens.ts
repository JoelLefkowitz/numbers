export let getEven = (): void => {
	const input = document.getElementById("even-input") as HTMLInputElement;
	const n = input.value
	fetch('http://localhost:3000/numbers', {

		method: "POST",
		headers: new Headers({ 'content-type': 'application/json' }),
		body: JSON.stringify({ 
			evenNumber: n,
		})
	})
		.then(response => response.text())
		.then((response) => {

			document.getElementById("even-result").innerHTML = response

		})
		.catch(err => console.log(err))
}
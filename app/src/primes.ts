export let getPrime = (): void => {
	const inputs = document.getElementById("prime-input") as HTMLInputElement;
	const n = inputs.value
	fetch('http://localhost:3000/numbers', {

		method: "POST",
		headers: new Headers({ 'content-type': 'application/json' }),
		body: JSON.stringify({
			primeNumber: n,
		})
	})
		.then(response => response.text())
		.then((response) => {

			document.getElementById("prime-result").innerHTML = response

		})
		.catch(err => console.log(err))
}
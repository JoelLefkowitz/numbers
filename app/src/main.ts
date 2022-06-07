import {getPrime} from "./primes"
import {getEven} from "./evens"
document.getElementById("prime-button").addEventListener("click", getPrime)
document.getElementById("even-button").addEventListener("click", getEven)
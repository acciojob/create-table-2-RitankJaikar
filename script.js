function createTable() {
    //Write your code here
	const table= document.querySelector("#myTable");
	table.innerHTML= "";
	
	const row = prompt("Input number of rows");
	const col = prompt("Input number of columns");
	
	for(let i=0; i<row; i++) {
		const tr= document.createElement("tr");
		for(let j=0; j<col; j++){
			const td= document.createElement("td");
			td.innerText= `Row-${i} Column-${j}`;
			tr.append(td);
		}
		table.append(tr);
	}
}







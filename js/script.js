function viewProduct(id){
	var isHidden = document.getElementById(id);
	isHidden.classList.toggle("modal");
	};

function closeProduct(id){
	var isHidden = document.getElementById(id);
	isHidden.classList.toggle("modal");
	};

function expandServices(){
	const printServices = document.querySelector('.printservices');
	
	const addPrintServices = document.getElementById('addPrintServices');
	
	addPrintServices.addEventListener('click', function(){
		printServices.classList.toggle('serviceshidden')});
	
}
class Set{
	constructor(){
		this.items=[];
	}
	
	add(item){
		
		if (typeof(item)=='string'){
			var bool=false;
			this.items.forEach(function(i){
				if (item==i){bool=true;}
			});
			if (bool==false){
			this.items.push(item);
			}
		}else{
			console.log("ERROR: Input is not of type String!")
		}
		
	}

	remove(item){
		if (typeof(item)=='string'){
			let index = this.items.indexOf(item);
			if (index > -1) {
    			this.items.splice(index, 1);
			}
		}else{
			console.log("ERROR: Input is not of type String!")
		}
	}
}
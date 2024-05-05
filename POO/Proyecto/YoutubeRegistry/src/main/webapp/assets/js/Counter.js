 
 
 class Counter{
	 
	 constructor(name){
		 this.name = name;
		 this.counter = -1;
	 }
	 
	 increment(){
		 this.counter++;
	 }
	 
	 decrement(){
		 this.counter--;
		 if(this.counter < 0){
			 this.counter = -1;
		 }
	 }
	 
	 reset(){
		 this.counter = -1;
	 }
	 
	 toString(){
		 this.increment();
		 return `${this.name}_${this.counter}`;
	 }
	 
	 index(){
		 this.counter;
	 }
 }
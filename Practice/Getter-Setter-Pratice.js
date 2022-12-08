const person = {
	first_name: "Dan Victor",
	last_name: "Lofranco",
	get fullName() {
		return fullname = `${this.first_name} ${this.last_name}`;
	},
	set changeFirstName(first_name) {
		this.first_name = first_name;
	}
	set changeLastName(last_name) {
		this.last_name = last_name;
	}
};
console.log(person.fullName);
person.changeFirstName = "Danilo";
console.log(person.fullName);

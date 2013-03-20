var SimpleListModel = function(items) {

	this.items = ko.observableArray(items);
	this.itemToAdd = ko.observable("");
    this.count = ko.observable(items.length);

    this.addItem = function() {
		if (this.itemToAdd() != "") {
            this.items.push({title: this.itemToAdd(), added: "12:45"}); // Adds the item. Writing to the "items" observableArray causes any associated UI to update.
            this.itemToAdd(""); // Clears the text box, because it's bound to the "itemToAdd" observable
            this.count(items.length);
			document.getElementById("list").dataset.pagePosition = "viewport";
			document.getElementById("add-view").dataset.pagePosition = "right";
        
        }      
    }.bind(this);  // Ensure that "this" is always this view model

};
 
ko.applyBindings(new SimpleListModel([
        { title: "Standard (sandwich)", added: "12:45" },
        { title: "Premium (lobster)", added: "12:45" },
        { title: "Ultimate (whole zebra)", added: "12:45" }
    ]));

	document.getElementById("add-btn").addEventListener("click", function(){
		document.getElementById("list").dataset.pagePosition = "left";
		document.getElementById("add-view").dataset.pagePosition = "viewport";
	});


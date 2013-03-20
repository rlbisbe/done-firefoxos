var SimpleListModel = function(items) {

	this.items = ko.observableArray(items);
	this.itemToAdd = ko.observable("");
    this.count = ko.observable(items.length);

    this.addItem = function() {
		if (this.itemToAdd() != "") {
			var now = new Date();
			this.items.push({title: this.itemToAdd(), added: now});
            this.itemToAdd("");
            this.count(items.length);
			document.getElementById("list").dataset.pagePosition = "viewport";
			document.getElementById("add-view").dataset.pagePosition = "right";
        
        }      
    }.bind(this);

};
 
ko.applyBindings(new SimpleListModel([
        { title: "Probar Firefox OS", added: "10/01/13" },
        { title: "Escribir en el blog", added: "13/11/12" },
        { title: "Continuar el desarrollo	", added: "12/09/13" }
    ]));

	document.getElementById("add-btn").addEventListener("click", function(){
		document.getElementById("list").dataset.pagePosition = "left";
		document.getElementById("add-view").dataset.pagePosition = "viewport";
	});


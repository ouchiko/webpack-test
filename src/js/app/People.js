class People {

    constructor()
    {

    }

    fetchPeople()
    {
        var request = new Request('example.json', {
        	headers: new Headers({
        		'Content-Type': 'text/plain'
        	})
        });
        fetch(request).then(function() {
            console.log("finshed");
        });
    }
}

export default People;

class Fetcher
{
    constructor()
    {

    }

    get(url, f)
    {
        var request = new Request(url, {
        	headers: new Headers({
        		'Content-Type': 'text/plain'
        	})
        });

        fetch(request)
            .then(function(response) {
                var contentType = response.headers.get("content-type");
                if (contentType && !contentType.includes("application/json")) {
                    throw new TypeError("Unable to process any JSON response");
                } else {
                    return response.json();
                }
            })
            .then(function(json) {
                console.log("Json: ");
                console.dir(json);
                f(json);
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}

export default Fetcher;

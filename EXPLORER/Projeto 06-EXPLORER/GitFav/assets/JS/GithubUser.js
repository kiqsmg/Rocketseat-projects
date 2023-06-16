

//Classefaz um fetch de dados no github e exporta metodo estático
export class GithubUser {
    static search(username) {

        // Construct the API endpoint URL using the provided username
        const endpoint = `https://api.github.com/users/${username}`
        

        // Use the fetch function to make a GET request to the API endpoint
        return fetch(endpoint)
            // Handle the response and parse it as JSON
            .then(data => data.json())
            // Process the JSON data and return an object with selected properties
            .then(data => ({
                login: data.login,
                name: data.name,
                public_repos: data.public_repos,
                followers: data.followers
            }))
    }
}

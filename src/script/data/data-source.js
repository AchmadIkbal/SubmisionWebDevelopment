class DataSource {
    static searchClub(keyword) {
        return fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }
}


export default DataSource;
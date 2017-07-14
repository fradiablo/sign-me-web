import 'whatwg-fetch';

class HttpService {
    getAlbums = () => {
        var promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3004/album')
            .then(res => {
                if (!res) {
                    reject("Fail");
                } else {
                    resolve(res.json());
                }
            })
        });

        return promise;
    }
}

export default HttpService;

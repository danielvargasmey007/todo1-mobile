import * as firebase from 'firebase';

class HomeService {
    static getAccount(id, call) {
        let path = `/users/${id}`;
        firebase.database().ref(path).on('value', (snapshot) => {
            call(snapshot.val());
        })
    }
}

module.exports = HomeService;
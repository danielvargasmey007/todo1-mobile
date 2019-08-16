import * as firebase from 'firebase';

class TransctionService {
    static updateAccount(number, rode) {
        let path = `/account/${number}/rode`;
        return firebase.database().ref(path).set(rode)
    }

    static getByNumber(id, call) {
        firebase.database().ref().child('account').orderByChild('number').equalTo(id).on("value", function (snapshot) {
            snapshot.forEach(function (data) {
                call(data.val());
            });
        })
    }
}

export default TransctionService;
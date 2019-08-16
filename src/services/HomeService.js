import * as firebase from 'firebase';

class HomeService {
    static getAccountByUid(id, call) {
        firebase.database().ref().child('account').orderByChild('owner').equalTo(id).on("value", function (snapshot) {
            let response = []
            snapshot.forEach(function (data) {
                response.push(data.val())
            });
            call(response);
        })
    }
}

export default HomeService;
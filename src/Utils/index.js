/* eslint-disable */
import Firebase from '../database/firebase';

class Util {

    // requires authentication
    authPage = () => {
        Firebase.userLogged(user => {
            if(!user) window.location.href = '/#/login';
        });
    }

    // requires not to be authenticated
    authPageLogin = () => {
        Firebase.userLogged(user => {
            if(user) window.location.href = '/#/';
        });
    }

    // get currencies in Firebase
    getCurrencies = (quantity = 10, callback) => {
        Firebase.getLimit('/finance/', quantity, currencies => callback(currencies));
    }

}

export default new Util()
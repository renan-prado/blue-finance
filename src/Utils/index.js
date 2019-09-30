/* eslint-disable */
import Firebase from '../database/firebase';

class Util {

    authPage = () => {
        Firebase.userLogged(user => {
            if(!user) window.location.href = '/#/login';
        });
    }

    authPageLogin = () => {
        Firebase.userLogged(user => {
            if(user) window.location.href = '/#/';
        });
    }

    getCurrencies = (quantity = 10, callback) => {
        Firebase.getLimit('/finance/', quantity, currencies => callback(currencies));
    }

}

export default new Util()
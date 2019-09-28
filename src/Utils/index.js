/* eslint-disable */
import Firebase from '../database/firebase';

class Util {

    authPage = () => {
        Firebase.userLogged(user => {
            if(user) window.location.href = '/#/login';
        });
    }

}

export default new Util()
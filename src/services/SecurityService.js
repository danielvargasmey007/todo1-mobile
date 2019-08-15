import * as firebase from 'firebase';

/* Funcion que hace la peticion de autenticación al back firebase con la información del usuario */
async function doLogin(email, password) {
  let response = false;
  try {
    if (email && password) {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      response = true;
    }
  } catch (error) {
    response = false;
  }
  return response;
}

/* Funcion que devuelve la informacion del usuario */
async function getUserInfo() {
  let data = [];
  try {
    let payload = await AsyncStorage.getItem('access_token', (value) => {
      JSON.parse(value);
    });
    if (payload) {
      payload = JSON.parse(base64.decode(payload.split('.')[1].trim()));
    }
    if (payload != null && payload.user_name && payload.user_name.length > 0) {
      data = JSON.parse(payload.user_name);
    }
  } catch (error) {
    // se registra log para la trazabilidad
    // eslint-disable-next-line no-console
    console.log('getUserInfo', error);
  }
  return data;
}

/* Funcion que destruye token para terminar la session del usuario */
async function doLogout() {
  clearAsyncStorageToken();
}

/* limpia la informacion de los token del  AsyncStorage*/
function clearAsyncStorageToken() {
  AsyncStorage.removeItem('access_token');
  AsyncStorage.removeItem('refresh_token');
  AsyncStorage.removeItem('expires_in');
}

module.exports = {
  getUserInfo,
  doLogout,
  doLogin
};

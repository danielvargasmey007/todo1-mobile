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

/* devuelve el uid del usuario */
async function getUid() {
  let uid = null;
  try {
    uid = await firebase.auth().currentUser.uid;
  } catch (error) {
    uid = false;
  }
  return uid;
}

module.exports = {
  doLogin,
  getUid
};

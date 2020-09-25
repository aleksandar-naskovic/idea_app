class Realisation {
  realisation_id;
  realisation_name;
  realisation_date;
  idea_id;

  addRealisation(realisation_name, realisation_date, idea_id) {
    firebase
      .database()
      .ref('realisation')
      .push({
        realisation_name: realisation_name,
        realisation_date: realisation_date,
        idea_id: idea_id,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  editRealisation(realisation_id, realisation_name, realisation_date, idea_id) {
    firebase
      .database()
      .ref('/realisation/' + realisation_id)
      .set({
        realisation_name: realisation_name,
        realisation_date: realisation_date,
        idea_id: idea_id,
      });
  }

  deleteRealisation(realisation_id) {
    if (confirm('Are you Sure?')) {
      firebase
        .database()
        .ref('/realisation/' + realisation_id)
        .remove();
    } else {
      return null;
    }
  }

  getRealisations(idea_id) {
    let realisationsArray = [];
    firebase
      .database()
      .ref('realisation')
      .orderByChild('idea_id')
      .equalTo(idea_id)
      .on('value', (snapshot) => {
        realisationsArray.push(snapshot.val());
      });
    return realisationsArray;
  }

  getRealisation(realisation_id) {
    let realisation = {};
    firebase
      .database()
      .ref('realisation/' + realisation_id)
      .on('value', (snapshot) => {
        realisation = snapshot.val();
      });
    return realisation;
  }

  isValid(realisation_name, realisation_date) {}
}

export default Realisation;

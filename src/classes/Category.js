class Category {
  category_id;
  category_name;
  parent_id;

  addCategory(category_name, parent_id) {
    //get last id
    let last_id;
    firebase
      .database()
      .ref('categories')
      .on('child_added', function(childSnapshot) {
        last_id = childSnapshot.val().category_id;
      });
    last_id++;
    //First element
    if (!last_id) {
      last_id = 0;
    }
    s;
    firebase
      .database()
      .ref('categories')
      .push({
        category_id: last_id,
        text: category_name,
        parent: parent_id,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  editCategory(category_id, category_name, parent_id) {
    firebase
      .database()
      .ref('/categories/' + category_id)
      .set({
        cat_name: category_name,
        parent: parent_id,
      });
  }

  deleteCategory(category_id) {
    if (confirm('Are you Sure?')) {
      firebase
        .database()
        .ref('/categories/' + category_id)
        .remove();
    } else {
      return null;
    }
  }

  async getCategories() {
    let categoriesArray = [];
    await firebase
      .database()
      .ref('categories')
      .on('value', (snapshot) => {
        snapshot.forEach((doc) => {
          categoriesArray.push(doc.val());
        });
      });

    console.log(categoriesArray);

    return categoriesArray;
  }

  async convert() {
    let array = [];
    await this.getCategories().then((result) => {
      array = result;
    });

    var map = {};
    for (var i = 0; i < array.length; i++) {
      var obj = array[i];
      obj.children = [];

      map[obj.category_id] = obj;

      var parent = obj.parent || 0;
      if (!map[parent]) {
        map[parent] = {
          children: [],
        };
      }
      map[parent].children.push(obj);
    }

    return map;
  }

  isValid(category_name, parent_id) {}

  getParent(category_id) {}

  getSubcategories(category_id) {}

  hasChild(category_id) {}

  filterByName(category_name) {}
}

export default Category;

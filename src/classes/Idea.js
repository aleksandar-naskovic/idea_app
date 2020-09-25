class Idea {
  idea_id;
  idea_name;
  idea_date;
  idea_description;
  idea_rating;
  idea_expectations;
  category_id;

  getIdeas() {
    let ideasArray = [];
    firebase
      .database()
      .ref('ideas')
      .on('value', (snapshot) => {
        ideasArray.push(snapshot.val());
      });
    return ideasArray;
  }
  addIdea(
    idea_name,
    idea_date,
    idea_description,
    idea_rating,
    idea_expectations,
    category_id
  ) {
    firebase
      .database()
      .ref('ideas')
      .push({
        name: idea_name,
        date: idea_date,
        description: idea_description,
        rating: idea_rating,
        expectations: idea_expectations,
        // category: category_id,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getIdea(idea_id) {
    let idea = {};
    firebase
      .database()
      .ref('ideas')
      .child(idea_id)
      .once('value', (snapshot) => {
        idea = snapshot.val();
      });
    return idea;
  }

  editIdea(
    idea_id,
    idea_name,
    idea_date,
    idea_description,
    idea_rating,
    idea_expectations
  ) {
    console.log(
      idea_id,
      idea_name,
      idea_date,
      idea_description,
      idea_rating,
      idea_expectations
    );

    firebase
      .database()
      .ref('/ideas/' + idea_id)
      .set({
        name: idea_name,
        date: idea_date,
        description: idea_description,
        expectations: idea_expectations,
        rating: idea_rating,
        // subcategories: this.arrayOfCategoryNames,
        // category: this.idea.category
      });
  }

  deleteIdea(idea_id) {
    if (confirm('Are you Sure?')) {
      firebase
        .database()
        .ref('/ideas/' + idea_id)
        .remove();
    } else {
      return null;
    }
  }

  isValid(
    idea_name,
    idea_date,
    idea_description,
    idea_rating,
    idea_expectations,
    category_id
  ) {}

  SortByNameAsc() {}

  SortByNameDesc() {}

  SortByRatingAsc() {}

  SortByRatingDesc() {}

  // SortByNameAsc() {
  //   this.sortByIdOrder = period.sortById(this.periods, this.sortByIdOrder);
  //   if (this.sortByIdOrder) {
  //     this.recipes.sort((a, b) => (a.recipe_id > b.recipe_id ? -1 : 1));
  //     this.sortByIdOrder = false;
  //   } else {
  //     this.recipes.sort((a, b) => (a.recipe_id > b.recipe_id ? 1 : -1));
  //     this.sortByIdOrder = true;
  //   }

  // }
}

export default Idea;

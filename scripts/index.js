class Activity {
  constructor(id, title, description, imgUrl) {
    (this.id = id),
      (this.title = title),
      (this.description = description),
      (this.imgUrl = imgUrl);
  }
}

class Repository {
  constructor() {
    this.activities = [];
  }

  getAllActivities() {
    return this.activities;
  }

  createActivity(id, title, description, imgUrl) {
    const activity = new Activity(id, title, description, imgUrl);
    this.activities.push(activity);
  }

  deleteActivity(id) {
    const index = this.activities.findIndex((el) => el.id === id);
    if (index !== -1) {
      this.activities.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
}

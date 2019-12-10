//model is going to be composed of a news story that is a favorite
module.exports = function(sequelize, Datatypes) {
  var Account = sequelize.define("Account", {
    username: {
      type: Datatypes.STRING,
      allowNull: false
    },
    password: {
      type: Datatypes.STRING,
      allowNull: false
    },
    email: {
      type: Datatypes.STRING,
      allowNull: false
    },
    userDesc: {
      type: Datatypes.STRING,
      allowNull: true
    },
    newsUrl: {
      type: Datatypes.STRING,
      allowNull: true
    },
    newsHl: {
      type: Datatypes.STRING,
      allowNull: true
    },
    newsImgUrl: {
      type: Datatypes.STRING,
      allowNull: true
    }
  });
  return Account;
};

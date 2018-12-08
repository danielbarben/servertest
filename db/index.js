const Sequelize = require('sequelize');
const dbURL = `postgres://sabgaefn:iwuBcWa8aIQnIv09mGHFzWdUQn5zZHX8@manny.db.elephantsql.com:5432/sabgaefn`;

const sequelize = new Sequelize(dbURL);

const Projects = sequelize.define('projects', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bot: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, { force: true })

const Questions = sequelize.define('questions', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    projectId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    question: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { force: true })

const Answers = sequelize.define('answers', {
    id: {
        type:Sequelize.STRING,
        primaryKey: true
    },
    answer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    questionId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    next: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { force: true })

Projects.hasMany(Questions);
//Questions.belongsTo(Projects);
Questions.hasMany(Answers);

module.exports = {
    conn: sequelize,
    models: {
        Projects: Projects,
        Questions: Questions,
        Answers: Answers
    }
}
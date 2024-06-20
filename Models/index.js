const dbConfig = require("../Config/dbConfig")
const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize("bn0iohpgf1oe4463ndk8", "u1jghprlsbt5jvp1", "BpTk4Ta0mS0Yyb8KIuRG", {
    host: "bn0iohpgf1oe4463ndk8-mysql.services.clever-cloud.com",
    dialect: dbConfig.DIALECT,
    logging: false,
    timezone: '+05:30'
})
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//     host: dbConfig.HOST,
//     dialect: dbConfig.DIALECT,
//     logging: false,
//     timezone: '+05:30'
// })
sequelize.authenticate()
    .then(() => {
        console.log("Database Connected")
    })
    .catch((err) => {
        console.log("Error:" + err)
    })

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.students = require("./StudentModel")(sequelize, DataTypes)
db.announcements = require("./AnnouncementModel")(sequelize, DataTypes)
db.companies = require("./CompanyModel")(sequelize, DataTypes)
db.userLogin = require("./UserLoginModel")(sequelize, DataTypes)
db.student_placements = require("./StudentPlacementModel")(sequelize, DataTypes)
db.student_internships = require("./StudentInternshipModel")(sequelize, DataTypes)
db.branches = require("./BranchModel")(sequelize, DataTypes)
db.comments = require("./CommentModel")(sequelize, DataTypes)
db.subscribes = require("./AnnouncementSubscribe")(sequelize, DataTypes)
db.LoginTokens = require("./LoginTokensModel")(sequelize, DataTypes)
db.notifications = require("./NotificationModel")(sequelize, DataTypes)
db.skills_and_achievements = require("./SkillsAndAchievementsModel")(sequelize, DataTypes)
db.BranchAnnouncement = require("./BranchAnnouncementModel")(sequelize, DataTypes)
db.adminLogins = require("./AdminLoginModel")(sequelize, DataTypes)
db.FirstTimeLogin = require("./FirstTimePasswordsModel")(sequelize, DataTypes)
db.student_projects = require("./StudentProjectModel")(sequelize, DataTypes)
db.AnnouncementRequirement = require("./AnnouncementRequirementModel")(sequelize, DataTypes)
db.Otps = require("./OtpModel")(sequelize, DataTypes)
db.student_achievements_internships = require(".//StudentAchievementsInternshipsModel")(sequelize, DataTypes)


db.sequelize.sync({ force: false, alter: false }).then(() => {
    console.log("Resyncing Done.....")
})

module.exports = db

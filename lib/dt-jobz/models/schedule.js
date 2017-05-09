'use strict';

module.exports = function(sequelize, DataTypes) {
    var Schedule = sequelize.define('Schedule', {
        time: { type: DataTypes.DATE, allowNull: false },
        periodic: { type: DataTypes.BOOLEAN, default: true }
    }, 
    {
        tableName: 'jobz_schedule',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        classMethods: {
            associate: function(models) {
                Schedule.belongsTo(models.Job, { foreignKey: 'job_id' })
            }
        }
    });

    return Schedule;
};
'use strict';

module.exports = function(sequelize, DataTypes) {
    var Job = sequelize.define('Job', {
        code: { type: DataTypes.STRING(1000), allowNull: false },
        periodic: { type: DataTypes.BOOLEAN }
    }, 
    {
        tableName: 'jobz_jobs',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        classMethods: {
            associate: function(models) {
                Job.hasMany(models.Schedule, { foreignKey: 'job_id' })
            }
        }
    });

    return Job;
};
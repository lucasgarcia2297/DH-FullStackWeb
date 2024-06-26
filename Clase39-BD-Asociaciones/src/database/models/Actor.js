module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        favorite_movie_id: {
            type: dataTypes.BIGINT(10),
            allowNull: true
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'actors'
    }
    const Actor = sequelize.define(alias, cols, config);
    
    Actor.associate = function(models){
        Actor.belongsToMany(models.Movie,{
            as: 'movies',          //alias para la relación
            through: 'actor_movie',  //A través de: la tabla pivot 'actor_movie'
            foreignKey: 'actor_id',  //PK del modelo actual
            otherKey: 'movie_id',    //Columna de la tabla pivot que referencia la conexión (id de actor)
        });
    }


    return Actor
};
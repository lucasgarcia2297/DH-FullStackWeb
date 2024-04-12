module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        awards: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        length: dataTypes.BIGINT(10),
        genre_id: dataTypes.BIGINT(10)
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'movies'
    }
    const Movie = sequelize.define(alias, cols, config);

    Movie.associate = function(models){
        Movie.belongsTo(models.Genre, {
            foreignKey:'genre_id',
            as: 'genre'
        });
        Movie.belongsToMany(models.Actor,{
            as: 'actors',          //alias para la relación
            through: 'actor_movie',  //A través de: la tabla pivot 'actor_movie'
            foreignKey: 'movie_id',  //PK del modelo actual
            otherKey: 'actor_id',    //Columna de la tabla pivot que referencia la conexión (id de actor)
        });
    }
    return Movie;
};
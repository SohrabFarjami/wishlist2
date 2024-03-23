module.exports = (sequelize, Datatypes) => {
    const Item = sequelize.define("Item", {
        name: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        price: {
            type: Datatypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },

    });

    return Item;
};
        
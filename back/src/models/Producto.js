const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // Definimos el modelo Producto
  const Producto = sequelize.define('Producto', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    imagenes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    precio_compra: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    porcentaje_ganancia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precio_venta: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    referencia_proveedor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    marcaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoriaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tamañoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    proveedorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    activa: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  { tableName: 'producto', timestamps: false });

  // Establecemos las relaciones con otros modelos utilizando la propiedad associate
  Producto.associate = (models) => {
    Producto.belongsTo(models.Categoria, {
      foreignKey: {
        allowNull: false,
        name: 'categoriaId',
      }
    });

    Producto.hasMany(models.Imagen, {
      foreignKey: 'productoId',
      as: 'imagenes',
    });

    Producto.belongsTo(models.Marca, {
      foreignKey: {
        allowNull: false,
        name: 'marcaId',
      }
    });

    Producto.belongsTo(models.Size, {
      foreignKey: {
        allowNull: false,
        name: 'tamañoId',
      }
    });

    Producto.belongsTo(models.Proveedor, {
      foreignKey: {
        allowNull: false,
        name: 'proveedorId',
      }
    });
  

  };

  return Producto;
};

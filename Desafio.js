function CalculoPrecio(precioBase, descuento) {
    if (precioBase <= 0 || descuento > 100) {
        return "Los valores son inválidos";
        } else if (descuento === 0) {
        return "El precio final sin descuento es $" + precioBase;
        } else {var precioFinal = precioBase - (precioBase * (descuento / 100));
        return "El precio final con descuento es $" + precioFinal;
        }
    }

console.log(CalculoPrecio(100,0))
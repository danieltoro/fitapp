var IMC = {

    getIndex: function(peso, altura) {
        if(typeof(peso) === 'number' && typeof(altura) === 'number') {
            return peso / (altura * altura);
        }
        return null;
    },

    getDescription: function (index) {
        //TODO to be implemented
        return "";
    }

};

module.exports = IMC;
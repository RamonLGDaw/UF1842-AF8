const dateUtils = {

    getCurrentDate() {
        let fecha = new Date();
        const [year, month, day] = this.obtenerFechas(fecha);

        if (month < 10) {
            return `${year}-0${month}-${day}`;
        } else {
            return `${year}-${month}-${day}`;
        }
    },

    getFormattedDate(fechaIntroducida, formato) {
        let year, month, day;

        if (fechaIntroducida instanceof Date) {
            [year, month, day] = this.obtenerFechas(fechaIntroducida);
        } else {
            // Convierte la fecha en cadena en un nuevo objeto Date. El string ha de ser "año-mes-dia" para que funcione.
            const fechaObjeto = new Date(fechaIntroducida);
            [year, month, day] = this.obtenerFechas(fechaObjeto);
        }

        if (formato === "DD/MM/YYYY") {
            if (month < 10) {
                return `${day}/0${month}/${year}`;
            } else {
                return `${day}/${month}/${year}`;
            }
        } else if (formato === "YYYY-MM-DD") {
            if (month < 10) {
                return `${year}-0${month}-${day}`;
            } else {
                return `${year}-${month}-${day}`;
            }
        } else {
            return "Formato de fecha no válido";
        }
    },

    obtenerFechas(fecha) {
        let year = fecha.getFullYear();
        let month = fecha.getMonth() + 1; // porque comienza los meses en 0
        let day = fecha.getDate();

        return [year, month, day];
    }
};

module.exports = dateUtils;



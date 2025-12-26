class Libro {
    constructor(titulo, autor, fechaPublicacion, estado, capitulos){
        this.titulo = titulo;
        this.autor = autor;
        this.fechaPublicacion = fechaPublicacion;
        this.estado = estado;
        this.capitulos = capitulos;
    }
    detallesDelLibro(){
        console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.fechaPublicacion}, el estado es ${this.estado}.`);
    }
    mostrarCapitulos(){
        console.log('Capítulos: ' + Object.values(this.capitulos).join(', '));
    }
    AgregarCapitulo(numero, titulo){
        this.capitulos[numero] = titulo;
    }
    EliminarCapitulo(numero){
        delete this.capitulos[numero];
    }
}

const libro1 = new Libro('Cien Años de Soledad', 'Gabriel García Márquez', 1967, 'Disponible', {capitulo1: 'El Coronel Aureliano Buendía', capitulo2: 'La Casa de los Buendía'});
const libro2 = new Libro('Ladrona de Libros', 'Markus Zusak', 2005, 'Prestado', {capitulo1: 'La Muerte', capitulo2: 'Liesel Meminger'});
const libro3 = new Libro('El Príncipe', 'Maquiavelo', 1532, 'Disponible', {capitulo1: 'El Príncipe', capitulo2: 'La Guerra'});

libro1.detallesDelLibro();
libro2.detallesDelLibro();
libro3.detallesDelLibro();

libro1.mostrarCapitulos();
libro2.mostrarCapitulos();
libro3.mostrarCapitulos();

libro1.AgregarCapitulo('capitulo3', 'El Realismo Mágico');
libro1.mostrarCapitulos();

libro1.EliminarCapitulo('capitulo3');
libro1.mostrarCapitulos();

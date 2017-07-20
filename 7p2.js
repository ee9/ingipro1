/**
 * Created by Egor on 19.07.2017.
 */
function sortLibrary(library, field_name, reverse, initial = x => x) {
    library.sort(sortFunction);

    function sortFunction(a, b) {
        if (reverse === true) {
            let c = a;
            a = b;
            b = c;
        }

        if (initial(a[field_name]) < initial(b[field_name])) {
            return -1;
        }
        if (initial(a[field_name]) > initial(b[field_name])) {
            return 1;
        }
        return 0;
    }

    return library;
}
const library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        libraryID: 1254
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];
sortLibrary(library, 'libraryID', true, parseInt);
/*
 [
 {
 title: 'Steve Jobs',
 author: 'Walter Isaacson',
 libraryID: 4264
 },
 {
 title: 'Mockingjay: The Final Book of The Hunger Games',
 author: 'Suzanne Collins',
 libraryID: 3245
 },
 {
 title: 'Bill Gates',
 author: 'The Road Ahead',
 libraryID: 1254
 }
 ]
 */
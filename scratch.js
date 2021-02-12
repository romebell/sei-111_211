// example 1
res.render('index', { mochaObject });
// in the ejs page
// name -- mochaObject.name

// example 2
res.render('index', mochaObject); // { name: 'Mocha',location: 'Detriot'}
// in the ejs page
// name -- name

// example 3
res.render('index', { holla: mochaObject });
// in the ejs page
// holla.name

// example 4
res.render('index', { firstName: mochaObject.name });
// in the ejs page
// firstName

// example 5
const { name, location } = mochaObject;
res.render('index', { what: name });
// in the ejs page
// what

// example 6
const { name, location } = mochaObject;
const newObject = { name };
res.render('index', { newObject });
// in the ejs page
// newObject.name

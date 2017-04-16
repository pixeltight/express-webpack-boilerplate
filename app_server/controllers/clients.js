/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Jason Kerr Homepage',
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        clients: [{
            name: 'Triad',
            description: 'I did some workd for Triad!'
        },
        {
            name: 'Rooms to Go',
            description: 'I did some work for Rooms to Go!'
        },
        {
            name: 'Cast Force',
            description: 'I did some work for Cast Force!'
        }]
    });
};
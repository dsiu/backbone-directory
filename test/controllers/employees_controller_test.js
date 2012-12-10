require('../test_helper.js').controller('employees', module.exports);

var sinon  = require('sinon');

function ValidAttributes () {
    return {
        firstName: '',
        lastName: '',
        managerId: '',
        title: '',
        department: '',
        officePhone: '',
        cellPhone: '',
        email: '',
        city: '',
        picture: '',
        twitterId: '',
        blogURL: ''
    };
}

exports['employees controller'] = {

    'GET new': function (test) {
        test.get('/employees/new', function () {
            test.success();
            test.render('new');
            test.render('form.' + app.set('view engine'));
            test.done();
        });
    },

    'GET index': function (test) {
        test.get('/employees', function () {
            test.success();
            test.render('index');
            test.done();
        });
    },

    'GET edit': function (test) {
        var find = Employee.find;
        Employee.find = sinon.spy(function (id, callback) {
            callback(null, new Employee);
        });
        test.get('/employees/42/edit', function () {
            test.ok(Employee.find.calledWith('42'));
            Employee.find = find;
            test.success();
            test.render('edit');
            test.done();
        });
    },

    'GET show': function (test) {
        var find = Employee.find;
        Employee.find = sinon.spy(function (id, callback) {
            callback(null, new Employee);
        });
        test.get('/employees/42', function (req, res) {
            test.ok(Employee.find.calledWith('42'));
            Employee.find = find;
            test.success();
            test.render('show');
            test.done();
        });
    },

    'POST create': function (test) {
        var employee = new ValidAttributes;
        var create = Employee.create;
        Employee.create = sinon.spy(function (data, callback) {
            test.strictEqual(data, employee);
            callback(null, employee);
        });
        test.post('/employees', {Employee: employee}, function () {
            test.redirect('/employees');
            test.flash('info');
            test.done();
        });
    },

    'POST create fail': function (test) {
        var employee = new ValidAttributes;
        var create = Employee.create;
        Employee.create = sinon.spy(function (data, callback) {
            test.strictEqual(data, employee);
            callback(new Error, employee);
        });
        test.post('/employees', {Employee: employee}, function () {
            test.success();
            test.render('new');
            test.flash('error');
            test.done();
        });
    },

    'PUT update': function (test) {
        Employee.find = sinon.spy(function (id, callback) {
            test.equal(id, 1);
            callback(null, {id: 1, updateAttributes: function (data, cb) { cb(null); }});
        });
        test.put('/employees/1', new ValidAttributes, function () {
            test.redirect('/employees/1');
            test.flash('info');
            test.done();
        });
    },

    'PUT update fail': function (test) {
        Employee.find = sinon.spy(function (id, callback) {
            test.equal(id, 1);
            callback(null, {id: 1, updateAttributes: function (data, cb) { cb(new Error); }});
        });
        test.put('/employees/1', new ValidAttributes, function () {
            test.success();
            test.render('edit');
            test.flash('error');
            test.done();
        });
    },

    'DELETE destroy': function (test) {
        test.done();
    },

    'DELETE destroy fail': function (test) {
        test.done();
    }
};


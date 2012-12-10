load('application');

before(loadEmployee, {only: ['show', 'edit', 'update', 'destroy']});

action('new', function () {
    this.title = 'New employee';
    this.employee = new Employee;
    render();
});

action(function create() {
    Employee.create(req.body.Employee, function (err, employee) {
        if (err) {
            flash('error', 'Employee can not be created');
            render('new', {
                employee: employee,
                title: 'New employee'
            });
        } else {
            flash('info', 'Employee created');
            redirect(path_to.employees());
        }
    });
});

action(function index() {
  var that = this;
  console.log(req.get('Content-Type'));
  Employee.all(function (err, employees) {
    if ( req.accepts('json') ) {
      send(employees);
    }
    else { // html and other
      console.log('is html');
      that.title = 'Employee index';
      render({
               employees : employees
             });
    }
  });
});


action(function show() {
  var that = this;
  if ( req.accepts('json') ) {
    send(this.employee)
  }
  else { // html and other
    this.title = 'Employee show';
    render();
  }
});

action(function edit() {
    this.title = 'Employee edit';
    render();
});

action(function update() {
    this.employee.updateAttributes(body.Employee, function (err) {
        if (!err) {
            flash('info', 'Employee updated');
            redirect(path_to.employee(this.employee));
        } else {
            flash('error', 'Employee can not be updated');
            this.title = 'Edit employee details';
            render('edit');
        }
    }.bind(this));
});

action(function destroy() {
    this.employee.destroy(function (error) {
        if (error) {
            flash('error', 'Can not destroy employee');
        } else {
            flash('info', 'Employee successfully removed');
        }
        send("'" + path_to.employees() + "'");
    });
});

function loadEmployee() {
    Employee.find(params.id, function (err, employee) {
        if (err || !employee) {
            redirect(path_to.employees());
        } else {
            this.employee = employee;
            next();
        }
    }.bind(this));
}

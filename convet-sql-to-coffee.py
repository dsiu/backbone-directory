import os

__author__ = 'dsiu'

import logging


def fix_id(id):
    if id < 10:
        new_id = '0' * 11 + str(id)
    elif id < 100:
        new_id = '0' * 10 + str(id)
    return new_id

#
# main
#



if __name__ == "__main__":
    debug = True

    if debug:
        logging.basicConfig(level=logging.DEBUG)
    else:
        logging.basicConfig(level=logging.INFO)

    logger = logging.getLogger(os.path.basename(__file__))

    sql = ((12,'Steven','Wells',4,'Software Architect','Engineering','617-000-0012','781-000-0012','swells@fakemail.com','Boston, MA','steven_wells.jpg','@fakeswells','http://coenraets.org'),
           (11,'Amy','Jones',5,'Sales Representative','Sales','617-000-0011','781-000-0011','ajones@fakemail.com','Boston, MA','amy_jones.jpg','@fakeajones','http://coenraets.org'),
           (10,'Kathleen','Byrne',5,'Sales Representative','Sales','617-000-0010','781-000-0010','kbyrne@fakemail.com','Boston, MA','kathleen_byrne.jpg','@fakekbyrne','http://coenraets.org'),
           (9,'Gary','Donovan',2,'Marketing','Marketing','617-000-0009','781-000-0009','gdonovan@fakemail.com','Boston, MA','gary_donovan.jpg','@fakegdonovan','http://coenraets.org'),
           (8,'Lisa','Wong',2,'Marketing Manager','Marketing','617-000-0008','781-000-0008','lwong@fakemail.com','Boston, MA','lisa_wong.jpg','@fakelwong','http://coenraets.org'),
           (7,'Paula','Gates',4,'Software Architect','Engineering','617-000-0007','781-000-0007','pgates@fakemail.com','Boston, MA','paula_gates.jpg','@fakepgates','http://coenraets.org'),
           (5,'Ray','Moore',1,'VP of Sales','Sales','617-000-0005','781-000-0005','rmoore@fakemail.com','Boston, MA','ray_moore.jpg','@fakermoore','http://coenraets.org'),
           (6,'Paul','Jones',4,'QA Manager','Engineering','617-000-0006','781-000-0006','pjones@fakemail.com','Boston, MA','paul_jones.jpg','@fakepjones','http://coenraets.org'),
           (3,'Eugene','Lee',1,'CFO','Accounting','617-000-0003','781-000-0003','elee@fakemail.com','Boston, MA','eugene_lee.jpg','@fakeelee','http://coenraets.org'),
           (4,'John','Williams',1,'VP of Engineering','Engineering','617-000-0004','781-000-0004','jwilliams@fakemail.com','Boston, MA','john_williams.jpg','@fakejwilliams','http://coenraets.org'),
           (2,'Julie','Taylor',1,'VP of Marketing','Marketing','617-000-0002','781-000-0002','jtaylor@fakemail.com','Boston, MA','julie_taylor.jpg','@fakejtaylor','http://coenraets.org'),
           (1,'James','King',0,'President and CEO','Corporate','617-000-0001','781-000-0001','jking@fakemail.com','Boston, MA','james_king.jpg','@fakejking','http://coenraets.org'))

    sql_schema =  (
        'id' ,
        'firstName' ,
        'lastName' ,
        'managerId' ,
        'title' ,
        'department' ,
        'officePhone' ,
        'cellPhone' ,
        'email' ,
        'city' ,
        'picture' ,
        'twitterId' ,
        'blogURL'
        )

    for i in sql:
        lst = list(i)
        k = 0
        print 'Employee.seed ->'
        for j in sql_schema:
            v = i[k]
            if j == 'id' or j == 'managerId':
                v = fix_id(v)
                # fix mongodb id field
            #            if j == 'id': j = '_id'
            print "  '%s' : '%s'" % (j, v)
            k += 1
        print
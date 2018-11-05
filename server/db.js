/*
 * Description: 数据库配置
 * User       : zhaoyiming
 * Date       : 2017/9/16
*/

// const mysql = require('mysql');

// module.exports = (sql, callback) => {
// 	const db = mysql.createConnection({
//         host    : 'localhost',
//         user    : 'root',
//         password: 'root',
//         database: 'tour'
//     });

//     db.connect();
//     db.query(sql, callback);
// 	db.end();
// };

const mysql = require('mysql');

module.exports = (sql, callback) => {
	const db = mysql.createConnection({
        host    : '114.215.86.207',
        user    : 'user',
        password: 'user',
        database: 'tour',
        port    : 3306,
    });

    db.connect();
    db.query(sql, callback);
	db.end();
};
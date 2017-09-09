const connection = require("../database/connection");
const query_selector = require("../database/repositories/example");
const table = "example";


module.exports = {
  search: () => {
    return new Promise((reply, reject) => {
        connection.query(query_selector.select(table),(error, data)=>{
          if(error) return reject({details: "error en el query"}); 
           reply(data);
        });
    });
  },
  find: (idExample) => {
    return new Promise((reply, reject) => {
      connection.query(query_selector.selectById(table,"id_project",idExample),(error, data)=>{
        if(error) return reject({details: "error en el query"});
         reply(data);
      });
    });
  },
  add: (params) => {
    return new Promise((reply, reject) => {
      connection.query(query_selector.insert(table,params),(error, data)=>{
        if(error) return reject({success: false, details: "error en el query"});
         reply({success: true, insertId: data.insertId});
      });
    });
  },
  update: (idExample, params) => {
    return new Promise((reply, reject) => {
      connection.query(query_selector.update(table,params,"id_project",idExample),(error, data)=>{
        if(error) return reject({details: "error en el query"});
         reply(data);
      });
    });
  },
  delete: (idExample) => {
    connection.query(query_selector.delete(table,"id_project", idExample),(error,data)=>{
       if(error) return reject({details: "error en el query"});
       reply(data);
    });
  }
}

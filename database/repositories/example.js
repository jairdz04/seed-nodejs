const squel = require("squel");

module.exports = {
  select: (table)  => {
  	return squel.select().from(table).toString();
  },
  selectById : (table,column_name,value) => {
    return squel.select().from(table).where(column_name + "=" + value).toString();
  },
  insert: (table,data)  => {
  	return squel.insert().into(table).setFields(data).toString();
  },
  update: (table,data,column_name,value)  => {
   	return squel.update().table(table).setFields(data).where(column_name + "=" + value).toString();
  },
  delete: (table,column_name,value)  => {
  	return squel.delete().from(table).where(column_name + "=" + value).toString();
  }
}


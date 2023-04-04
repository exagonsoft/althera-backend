const { GetConnection } = require("../database/database");

const GetSubscriversHandler = async () => {
  const connectionPool = await GetConnection();
  const connection = await connectionPool.getConnection();
  let _subscrivers = await connection.query("SELECT * FROM alv_subscrivers");
  return _subscrivers;
};

const GetSubscriverDetailsHandler = async (id) => {
  const connectionPool = await GetConnection();
  const connection = await connectionPool.getConnection();
  let _subscriver_details = await connection.query(
    "SELECT * FROM alv_subscrivers WHERE id = ?",
    id
  );
  return _subscriver_details;
};

const SaveSubscriverHandler = async (email) => {
  let _new_subscriver = { email };
  const connectionPool = await GetConnection();
  const connection = await connectionPool.getConnection();
  await connection.query("INSERT INTO alv_subscrivers SET ?", _new_subscriver);
};

const DeleteSubscriverHandler = async (id) => {
  const connectionPool = await GetConnection();
  const connection = await connectionPool.getConnection();
  await connection.query("DELETE FROM alv_subscrivers WHERE id = ?", id);
};

module.exports = {
    GetSubscriversHandler,
    GetSubscriverDetailsHandler,
    SaveSubscriverHandler,
    DeleteSubscriverHandler
}

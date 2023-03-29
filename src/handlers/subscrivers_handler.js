import { GetConnection } from "../database/DataBase";

export const GetSubscriversHandler = async () => {
  const connectionPool = await GetConnection();
  const connection = await connectionPool.getConnection();
  let _subscrivers = await connection.query("SELECT * FROM alv_subscrivers");
  return _subscrivers;
};

export const GetSubscriverDetailsHandler = async (id) => {
    const connectionPool = await GetConnection();
    const connection = await connectionPool.getConnection();
    let _subscriver_details = await connection.query("SELECT * FROM alv_subscrivers WHERE id = ?", id);
    return _subscriver_details;
  };

export const SaveSubscriverHandler = async (email) => {
    let _new_subscriver = { email }
    const connectionPool = await GetConnection();
    const connection = await connectionPool.getConnection();
    await connection.query("INSERT INTO alv_subscrivers SET ?", _new_subscriver);
}

export const DeleteSubscriverHandler = async (id) => {
    const connectionPool = await GetConnection();
    const connection = await connectionPool.getConnection();
    await connection.query("DELETE FROM alv_subscrivers WHERE id = ?", id);
}

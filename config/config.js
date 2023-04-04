module.exports = {
  host: process.env.HOST || "",
  port: process.env.PORT || "",
  server_port: process.env.SERVER_PORT || "",
  database: process.env.DATABASE || "",
  admin: process.env.ADMIN || "",
  password: process.env.PASSWORD || "",
  support_email: process.env.SUPPORT_EMAIL || "",
  local_test_application: process.env.LOCAL_TEST_CLIENT || "",
  remote_client_app: process.env.REMOTE_CLIENT_APP || "",
  allowedDomins:
    process.env.NODE_ENV === "production"
      ? [process.env.REMOTE_CLIENT_APP, process.env.REMOTE_SERVER_API]
      : [process.env.LOCAL_TEST_CLIENT, process.env.LOCAL_SERVER_API],
};
import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super("Route Does Not Exists In the Server");
    Object.setPrototypeOf(this, NotFoundError);
  }

  serializeErrors() {
    return [
      {
        message: "Route Doesn't exists in server",
      },
    ];
  }
}

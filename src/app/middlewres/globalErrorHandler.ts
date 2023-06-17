/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import { IGenericErrorMessage } from '../../interfaces/error'
import handleValidationError from '../../errors/handleValidationerror'

//import ApiError from '../../errors/ApiError';

// import handleValidationError from '../../errors/handleValidationError';

const globalErrorHandler: ErrorRequestHandler = (
  error,
  req: Request,

  // import { ZodError } from 'zod';
  // import handleCastError from '../../errors/handleCastError';
  // import handleZodError from '../../errors/handleZodError';
  // import { IGenericErrorMessage } from '../../interfaces/error';
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500
  let message = 'Something went wrong !'
  let errorMessages: IGenericErrorMessage[] = []

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: error?.stack ? error?.stack : undefined,
  })
}

export default globalErrorHandler

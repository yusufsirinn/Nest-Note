import { HttpStatus } from "@nestjs/common";
import { ErrorId } from "../error-id";

export class CustomError extends Error {
    errorId: ErrorId;
    statusCode: number;

    constructor(
        errorId: ErrorId,
        statusCode: HttpStatus = HttpStatus.BAD_REQUEST
    ) {
        super();
        this.errorId = errorId;
        this.statusCode = statusCode;
    }
}

export class CustomErrorResponseDTO {
    errorId: number;
    errorMessage: string;

    constructor(
        errorId: number,
        errorMessage: string) {
        this.errorId = errorId;
        this.errorMessage = errorMessage;
    }
}
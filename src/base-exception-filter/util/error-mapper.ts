import { ErrorList } from "../exception-code-and-message";
import { CustomError, CustomErrorResponseDTO } from "../model/base-exception.model";

export class ErrorMapper {
    static getResponse(error: CustomError): CustomErrorResponseDTO {
        const errorId = error.errorId;
        const errorMessage = ErrorList.getErrorInfo(errorId);
        return new CustomErrorResponseDTO(errorId, errorMessage);
    }
}
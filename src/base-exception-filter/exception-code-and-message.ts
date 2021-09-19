import { ErrorId } from "./error-id";

export class ErrorList {

    private static errorList: Map<number, string> = new Map(
        [
            [ErrorId.noteNotFound, "Note Not Found!"],
            [ErrorId.somethingWentWrong, "Something Went wrong"],
            [ErrorId.unauthorize, "Unauthorized"],
        ]
    );

    static getErrorInfo(id: ErrorId): string {
        return this.errorList.get(id);
    }
}


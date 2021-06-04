/**
 * @class
 * @param {string} message error message
 * @param {number} status status code
 */

class ErrorWithStatus extends Error {
    /**
     * This function take a message and a status code as parameter and
     * return an error object with a status code included
     */
    status: number;
    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }
}

export default ErrorWithStatus;

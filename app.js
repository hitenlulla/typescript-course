// never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An Error occured', 500);

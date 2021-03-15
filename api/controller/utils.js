exports.getResponse = (successful, message, result) => {
    return {
        successful: successful,
        message: message,
        result: result
    }
}

class ExpressError extends Error{
    constructor(statusCode,message){
        super();
        this.statusCode=statusCode;
        this.message=message;
    }
}
// class ExpressError extends Error {
//   constructor(status, message) {
//     super(message);
//     this.status = status;
//   }
// }

module.exports=ExpressError;
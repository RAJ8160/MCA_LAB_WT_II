const errorMiddleware = (err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "Backend ERROR";
    const extraDetails = err.extraDetails || "Error from Backend";

      res.status(status).json({
        success: false,
        message,
        extraDetails
    });
};

module.exports = errorMiddleware
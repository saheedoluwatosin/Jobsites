




const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // default to 500 if no status set
    res.status(statusCode);
  
    // Define a response object with useful error details
    const response = {
      success: false,
      message: err.message || 'Internal Server Error'
    };
  
  
    // Send response
    res.json(response);
  };
  
module.exports = errorHandler;











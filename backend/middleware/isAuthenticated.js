import jwt from 'jsonwebtoken';

const isAuth = (req, res, next) => {
  try {
    // Check Authorization header exists
    const authHeader = req.get('Authorization');
    if(!authHeader) {
      throw new Error('Not authenticated.');
    }

    const token = authHeader.split(' ')[1];
    let decodedToken;

    // Check token is valid
    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if(!decodedToken) {
      throw new Error('Not authenticated.');
    }

    // Attach userId to request object
    req.userId = decodedToken.userId;
    next();
  } catch(err) {
    return res.status(401).json({
      success: false,
      message: 'Not authenticated.',
    })
  }
}

export default isAuth;
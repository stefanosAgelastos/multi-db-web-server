const jwt = require('jsonwebtoken');

const authenticateToken = (role) => {
    return (req, res, next) => {
        
        const cookie = req.headers['cookie'];
        const token = cookie && cookie.split('accessToken=')[1];
        // console.log(JSON.stringify(req.headers));
        console.log('HERE BRUV', token);
        if (token == null) return res.status(401).send('You are not authorised');

        jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
            if (error) return res.sendStatus(403);
            if (user.role = role) {
                req.user = user;
                next();
            } else {
                return res.status(403).send('User is not: ' + role);
            }
        });
    }
}

// function jwt_sign(payload) {
//     const accessToken = jwt.sign({ role: 'teacher', email: teacher.email, id: teacher.teacher_id }, process.env.JWT_SECRET);
// }

module.exports.authenticateToken = authenticateToken;
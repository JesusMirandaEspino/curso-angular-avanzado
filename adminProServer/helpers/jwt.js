const jwt = require('jsonwebtoken');

const generateJwt = (uid) => {

    return new Promise((resolve, reject) => {

        const payload = {
            uid
        }

        jwt.sign( payload, process.env.JWT_KEY, { expiresIn: '24h' }, (err, token) => {
            if(err){
                console.log(err);
                reject(err);
            }else{
                resolve(token);
            }

        });

    })

}

module.exports = {
    generateJwt
}
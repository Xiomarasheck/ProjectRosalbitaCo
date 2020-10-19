const models = require('./../../models');

/**|
 * 
 * @param {*} req 
 * @param {*} res 
 */
async function login(req, res) {

    let {userName,password} =  req.body;

    const user = await db.User.scope('withHash').findOne({ where: { name } });

    if (!(userName && password)){
        return res.status(400).json({message:'Username & Password are Required'});
    }

    if (!user || !(await bcrypt.compare(password, user.hash)))
        throw 'Username or password is incorrect';

    // authentication successful
    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
    return { ...omitHash(user.get()), token };
}
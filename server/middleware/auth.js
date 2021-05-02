const { User } = require("../models/User");

let auth = (req, res, next) => {
  //인증처리를 하는곳
  //클라이언트에서 쿠키를 가져온다.
  let token = req.cookies.x_auth;
  // console.log("asdasdasd", token);

  //토큰을 복호화 한 후 유저를 찾는다.
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });

    //토큰정보를 req에 넣어줘서 보냈을때 req.user, req.token 으로 사용할수 있게 하기위해 넣어준다.
    req.user = user;
    req.token = token;

    next(); //넥스트하는 이유 미들웨어라 계속 갈수있게 할일이 끝나면 진행
  });
  //유저가 있으면 인증 Yes
  //유저가 없으면 인증 No
};

module.exports = { auth };

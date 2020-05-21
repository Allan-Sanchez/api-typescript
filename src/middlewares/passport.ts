import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import "../config/config";
import config from "../config/config";
import User from "../models/user";

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtsecret,
};

export default new Strategy(opts, async (payload, done) => {
  try {
    const userPayload = await User.findById(payload.id);

    if (userPayload) {
      return done(null, userPayload);
    }
    return done(null, false);
  } catch (error) {
    console.log(error);
  }
});

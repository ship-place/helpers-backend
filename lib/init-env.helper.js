"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = require("dotenv");
const get_env_path_helper_1 = require("./get-env-path.helper");
exports.config = dotenv.config({ path: (0, get_env_path_helper_1.getEnvPath)() });
//# sourceMappingURL=init-env.helper.js.map
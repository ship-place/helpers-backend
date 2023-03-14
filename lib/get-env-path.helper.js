"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvPath = void 0;
const path_1 = require("path");
function getEnvPath() {
    const node_env = process.env.NODE_ENV ? process.env.NODE_ENV.trim().toLowerCase() : '';
    let envPath;
    switch (node_env) {
        case 'dev':
        case 'development':
            envPath = (0, path_1.resolve)(process.cwd(), '.development.env');
            break;
        case 'prod':
        case 'prodaction':
            envPath = (0, path_1.resolve)(process.cwd(), '.prodaction.env');
            break;
        case 'test':
            envPath = (0, path_1.resolve)(process.cwd(), '.test.env');
            break;
        default:
            throw new Error('Specify the NODE_ENV variable [ prod | dev | test ]');
    }
    return envPath !== null && envPath !== void 0 ? envPath : '';
}
exports.getEnvPath = getEnvPath;
//# sourceMappingURL=get-env-path.helper.js.map
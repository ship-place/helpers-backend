"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const common_1 = require("@nestjs/common");
const ucfirst_helper_1 = require("./ucfirst.helper");
exports.logger = new common_1.Logger(`Ms${(0, ucfirst_helper_1.ucFirst)(process.env.SERVICE_NAME)}Main`);
//# sourceMappingURL=logger.helper.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAnwserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_anwser_dto_1 = require("./create-anwser.dto");
class UpdateAnwserDto extends (0, mapped_types_1.PartialType)(create_anwser_dto_1.CreateAnwserDto) {
}
exports.UpdateAnwserDto = UpdateAnwserDto;
//# sourceMappingURL=update-anwser.dto.js.map
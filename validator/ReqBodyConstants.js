let DTOs = {};
const reqBodyAssign = (DTO) => {
  DTOs = DTO;
};
const reqBody = DTOs;
module.exports = { reqBodyAssign, reqBody };

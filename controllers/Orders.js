const {
  orderInsertService,
  orderUpdateService,
  orderGetAllService,
  orderGetSingleService,
  orderDeleteService,
  orderReportService,
} = require('../services/DataServices/OrderService');

const orderInsert = async (req, res) => {
  const id = await orderInsertService(req.body);
  res.json(id);
};
const orderUpdate = async (req, res) => {
  const id = await orderUpdateService(req.body, req.params.id);
  res.json(id);
};
const orderGetAll = async (req, res) => {
  const result = await orderGetAllService();
  res.json(result);
};
const orderGetSingle = async (req, res) => {
  const result = await orderGetSingleService(req.params.id);
  res.json(result);
};
const orderDelete = async (req, res) => {
  const result = await orderDeleteService(req.params.id);
  res.json(result);
};

const orderReport = async (req, res) => {
  try {
    await orderReportService(res); // Assuming orderReportService returns an array of file paths

    // // Respond when download is complete
    // res.on('close', () => {
    //   console.log('Download finished.');
    //   // Send any acknowledgment or response here
    // });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error generating the files');
  }
};
module.exports = {
  orderInsert,
  orderUpdate,
  orderGetAll,
  orderGetSingle,
  orderDelete,
  orderReport,
};

module.exports = () => {
  function query(req, res) {
    console.log(req.timeRequest);
    res.status(200).send([{name: 'Ascia Bipenne', description: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.'}]);
  }
  
  function save (req, res) {
    res.status(201).send();
  }
  
  return {
    query: query,
    save: save,
  };
}
const product  = require('../models/user');

//post
exports.insert = async(req,res)=>{
    try {
    const { name, date, capacity } = req.body;

    const newEvent = new product({ name, date, capacity });
    const savedEvent = await newEvent.save();

    res.json(savedEvent);
    }catch(err)
    {
        req.status(err).json({erro:'data not a store'});
    }
};

//delete
exports.insert1 = async(req,res)=>{
    try
    {
        const datadel = req.params.id;
        const del = await product.findByIdAndDelete(datadel);

        if(!del)
        {
            res.status(404).json({message:'delete unsucessefully'})
        }else
        {
            res.status(404).json({message:'delete sucessfully'});
        }
    }catch(err)
    {
        res.status(404).json({err:'no data found'});
    }
}

//update
exports.insert2 = async (req, res) => {
  try {
    const { id } = req.params;

    const updatat = await product.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatat) {
      res.status(404).json({ message: 'update not successfully' });
    } else {
      res.status(200).json({ message: 'update successfully', data: updatat });
    }

  } catch (err) {
    res.status(500).json({ err: 'update unsuccessfully' });
  }
};

//get
exports.insert3=async(req,res)=>{
    try{

         const gedata = await product.find();
        if(!gedata)
        {
            res.status(500).json({message:'data not a get'});
        }else
        {
            res.status(500).json({message:'data get sucessfully',gedata});
        }
    }catch(err)
    {
        res.status(404).json({err:'try again'});
    }
}


const Contact = require('../models/Contact')

const createContact = async (req,res) => {

  try{

    const { name, email, phone, message } = req.body

    const newContact = await Contact.create({
      name,
      email,
      phone,
      message,
    })

    console.log('Message Saved:', newContact)

    res.status(201).json({
      success:true,
      message:'Message Sent Successfully',
      data:newContact
    })

  }catch(error){

    console.log(error)

    res.status(500).json({
      success:false,
      message:error.message
    })

  }

}

module.exports = {
  createContact,
}
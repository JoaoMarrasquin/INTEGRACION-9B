require('dotenv').config();
const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();


const Corredor= require('./models/corredor');


app.use(express.json());
app.use(cors());

const Connection = async()=> { 
    try {
        mongoose.connect(process.env.MONGO);
        console.log('Conexión exitosa');

    } catch (error) {
        throw new Error('Error no conecto')
    }
  }

Connection(); 

app.get('/Corredores', async (req, res) => {
  console.log('TRYING TO FETCH CORREDORES');
  try {
    const Corredors = await Corredor.find();
    res.status(200).json({
      Corredors: Corredors.map((Corredor) => ({
        Nombre: Corredor.Nombre,
        Peso: Corredor.Peso,
        Altura: Corredor.Altura,
        Edad: Corredor.Edad,
      })),
    });
    console.log('FETCHED Corredores');
  } catch (err) {
    console.error('ERROR FETCHING Corredores');
    console.error(err.message);
    res.status(500).json({ message: 'Failed to load Corredores.' });
  }
});

app.post('/Corredores', async (req, res) => {
  console.log('TRYING TO STORE Corredores');
  const Nombre = req.body.Nombre;
  const Peso = req.body.Peso;
  const Altura = req.body.Altura;
  const Edad = req.body.Edad;
  if (!Nombre || Nombre.trim().length === 0) {
    console.log('INVALID INPUT - NO Nombre');
    return res.status(422).json({ message: 'Invalid  Nombre.' });
  }

  const corredor = new Corredor({
    Nombre: Nombre,
    Peso: Peso,
    Altura: Altura,
    Edad: Edad,
  });

  try {
    await corredor.save();
    res
      .status(201)
      .json({ message: 'Corredor guardado', corredor: { id: corredor.id, Nombre: Nombre, Peso: Peso,Altura: Altura, Edad: Edad } });
    console.log('STORED NEW corredor');
  } catch (err) {
    console.error('ERROR FETCHING corredor');
    console.error(err.message);
    res.status(500).json({ message: 'Error al guardar corredor.' });
  }
});

app.delete('/corredores/:id', async (req, res) => {
  console.log('TRYING TO DELETE Corredor');
  try {
    await Corredor.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Corredor eliminado' });
    console.log('DELETED Corredor');
  } catch (err) {
    console.error('ERROR FETCHING Corredores');
    console.error(err.message);
    res.status(500).json({ message: 'Failed to delete corredor.' });
  }
});

app.put('/corredores/:id', async (req, res) => {
  console.log('TRYING TO UPDATE corredores');
  try {
   const {id} = req.params;
   const {...data } =  req.body;
   console.log(id,data)
   await Corredor.findByIdAndUpdate(id,data )
  console.log('UPDATE corredores');
  res.status(200).json({ message: 'Actualizado' });
  } catch (err) {
    console.error('ERROR FETCHING corredores');
    console.error(err.message);
    res.status(500).json({ message: 'Failed to update corredores.' });
  }
});


app.listen(process.env.PORT,()=>{
    console.log("Servidor encendido")
})
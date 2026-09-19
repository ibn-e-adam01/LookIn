require('dotenv').config();
//Database Connection 
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT;

const residenceModel = require('./models/residence');
const roomModel = require('./models/room');

const cors = require('cors');


//MiddleWares
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');


//routes
app.get('/', (req, res) => {
    res.send('Working!!!');
});

app.get('/getProjectsData', async (req, res) => {

    //Gives All Residences without finding for a particular one with particular field!!!
    let residences = await residenceModel.find();

    // console.log(residences);

    res.status(200).json({
        message: 'data recieved!',
        success: true,
        residences
    })
})

app.post('/createRoom', async (req, res) => {

    console.log('BODY: ', req.body);

    let {RoomName, RoomArea, RoomFloorMaterial, RoomCeilingHeight, RoomImageURL, RoomWallFinish, RoomWindows} = req.body;

    // console.log(RoomName);
    // console.log(RoomArea);
    // console.log(RoomFloorMaterial);
    // console.log(RoomCeilingHeight);
    // console.log(RoomImageURL);
    // console.log(RoomWallFinish);
    // console.log(RoomWindows);

    let roomCreated = await roomModel.create({
        roomName: RoomName,
        roomArea: RoomArea,
        floorMaterial: RoomFloorMaterial,
        wallFinish: RoomWallFinish,
        windows: RoomWindows,
        ceilingHeight: RoomCeilingHeight,
        roomImage : RoomImageURL
    });

    console.log(roomCreated);

    res.status(200).json({
        message: 'room created',
        success: true,
        roomCreated
    });

});

app.post('/createResidence', async (req, res) => {

    // console.log('BODY: ', req.body);

    let {ArchitectName, ProjectTitle, PropertyType, ShortDes, HouseImageURL} = req.body;


    if(ArchitectName == ''){
        return res.json({
            message1:"Enter Architect's Name",
            success:false
        })
    }
    if(ProjectTitle == ''){
        return res.json({
            message2:"Enter Project Title",
            success:false
        })
    }
    if(HouseImageURL == ''){
        return res.json({
            message3:"Enter Image URL",
            success:false
        })
    }

    // console.log(RoomName);
    // console.log(RoomArea);
    // console.log(RoomFloorMaterial);
    // console.log(RoomCeilingHeight);
    // console.log(RoomImageURL);
    // console.log(RoomWallFinish);
    // console.log(RoomWindows);

    let residenceCreated = await residenceModel.create({
        designer: '@'+((ArchitectName).split(' ').join(''))+(Math.floor(Math.random() * 900) + 100),
        projectTitle: ProjectTitle,
        propertyType: PropertyType,
        shortDescription: ShortDes,
        residenceImage: HouseImageURL
    });

    console.log(residenceCreated);

    res.status(200).json({
        message: 'residence created',
        success: true,
        residenceCreated
    });

})



app.listen(PORT, () => {
    console.log(`Listening on the port ${PORT}...`);
})

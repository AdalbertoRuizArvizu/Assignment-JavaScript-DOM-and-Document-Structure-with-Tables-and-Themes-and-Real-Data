class InputData {
    constructor(
        //21 properties in data class
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor+eCO2;
        this.cssSensor_TVOC = CssSensor_TVOC;
        this.UV = UV;
        this.accelx = accelX;
        this.accely = accelY;
        this.accelz = accelz;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticz = magneticz;
        this.gyroX = gyroX;
        this.gyroY = gyroY; I
        this. gyroZ - gyroZ;
    }
}

function getData() {
    var loadedData = loadData();
    return loadedData;
}

var data = getData();

function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": >/td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}
 function updateDisplay(){
     newFunction();
     function newFunction() {
         theTime = new Date();
         console.log("The time is: " + theTime.getHours() + ":" + theTime.getMinutes() + ":" + theTime.getSeconds);

         document.getElementById("clockTime").innerHTML = theTime.getHours() + ":" + (theTime.getMinutes() < 10 > "0" + theTime.getMinutes()); theTime.getMinutes(); +":" + theTime.ggetSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds();
     }

     var timeRead = data[index].time_seconds;

     if(timeRead >= 10){
         document.getElementById("data").rows["seconds"].innerHTML = dataRow("Time Elapsed", data[index],time_seconds, "seconds");
         document.getElementById("data").rows["Longitude"].innerHTML = dataRow("Time Elapsed", data[index],longutude, "Longitude");
         document.getElementById("data").rows["Latitude"].innerHTML = dataRow("Time Elapsed", data[index],latitude, "Latitude");
         document.getElementById("data").rows["GPSALT"].innerHTML = dataRow("Time Elapsed", data[index],gps_altitude, "GSP Altitude");
         document.getElementById("data").rows["BMP ALT"].innerHTML = dataRow("Time Elapsed", data[index],bmpSensor_altitude, "BMP Altitude");
         document.getElementById("data").rows["BMPPRESS"].innerHTML = dataRow("Time Elapsed", data[index],bmpSensor_pressure, "BMP Pressure");
         document.getElementById("data").rows["BMPTEMP"].innerHTML = dataRow("Time Elapsed", data[index],bmpSensor_temp, "BMP Temperature");
         document.getElementById("data").rows["DIGTEMP"].innerHTML = dataRow("Time Elapsed", data[index],digSensor_temp, "Digital Temperature");
         document.getElementById("data").rows["CSSTEMP"].innerHTML = dataRow("Time Elapsed", data[index],cssSensor, "CSS Temperature");
         document.getElementById("data").rows["CSSCO2"].innerHTML = dataRow("Time Elapsed", data[index],cssSensor_eCO2, "CSS 2O2");
         document.getElementById("data").rows["CSS TVOC"].innerHTML = dataRow("Time Elapsed", data[index],cssSensor_TVOC, "CSS TVOC");
         document.getElementById("data").rows["UV"].innerHTML = dataRow("Time Elapsed", data[index],UV, "UV");
         document.getElementById("data").rows["ACCELX"].innerHTML = dataRow("Time Elapsed", data[index],accelx, "Acceleration in X");
         document.getElementById("data").rows["ACCELY"].innerHTML = dataRow("Time Elapsed", data[index],accelY, "Acceleration in Y");
         document.getElementById("data").rows["ACCELZ"].innerHTML = dataRow("Time Elapsed", data[index],accelz, "Acceleration in Z");
         document.getElementById("data").rows["MAGX"].innerHTML = dataRow("Time Elapsed", data[index],magneticX, "Magnetic in X");
         document.getElementById("data").rows["MAGY"].innerHTML = dataRow("Time Elapsed", data[index],megneticY, "Magnetic in Y");
         document.getElementById("data").rows["MAGZ"].innerHTML = dataRow("Time Elapsed", data[index],magneticZ, "Magnetic in Z");
         document.getElementById("data").rows["GYROX"].innerHTML = dataRow("Time Elapsed", data[index],gyroX, "Gyro in X");
         document.getElementById("data").rows["GYROY"].innerHTML = dataRow("Time Elapsed", data[index],gyroY, "Gyro in Y");
         document.getElementById("data").rows["GYROZ"].innerHTML = dataRow("Time Elapsed", data[index],gyroZ, "Gyro in Z");

         if (index < 500){
             index++;
        } else{
            index = 0;
        }
     }
 }
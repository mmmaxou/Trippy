
Meteor.methods({
    getWeatherData:(city)=>{
      try {
        let result = HTTP.get("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&appid=22c7c4dee08fa2b192979d54f07479a2");
      return result.data;
      } catch (e) {
            console.log("err",e);
            return e;
      }
  }
});

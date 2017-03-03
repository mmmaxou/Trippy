
Meteor.methods({
    getWeatherData:(city)=>{
      try {
        let result =
        HTTP.get("http://api.openweathermap.org/data/2.5/forecast?q=Lens&units=metric&appid=22c7c4dee08fa2b192979d54f07479a2");
      return result.data.list;
      } catch (e) {
      return e;
      }
  }
});

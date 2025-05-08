using System.Collections.Generic;

namespace fullstack_app.Services
{
    public interface IWeatherService
    {
        IEnumerable<WeatherForecast> GetWeatherForecast();
    }
}
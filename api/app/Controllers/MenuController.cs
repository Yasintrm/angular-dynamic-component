using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace alternatifbank.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        private readonly ApplicationSettings applicationSettings;

        public MenuController(ApplicationSettings applicationSettings)
        {
            this.applicationSettings = applicationSettings;
        }
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<LazyComponentItem>> Get()
        {
            return this.applicationSettings.Components;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

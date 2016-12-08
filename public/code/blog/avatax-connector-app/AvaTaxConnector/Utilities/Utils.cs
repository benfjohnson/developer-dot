
using RestSharp;
using RestSharp.Authenticators;
using System.Configuration;


namespace AvaTaxConnector.Utilities
{
    public class HttpUtil
    {
        private static string requestUri =  "https://sandbox-rest.avatax.com/api/v2";
       

        public static string Get(string urlSegment)
        {
            //RestSharp
            var client = new RestClient(requestUri);
            client.Authenticator = GetAuthentication();
            var request = new RestRequest(urlSegment, Method.GET);
            request.AddHeader("X-Avalara-Client", "Connector Test Harness");
            IRestResponse response = client.Execute(request);
            var content = response.Content;
            return content;

            //ASP.Net
            /*using (var client1 = new HttpClient())
            {

                client1.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", Base64Format());
                HttpResponseMessage result = client1.GetAsync(urlParameters).Result;  //Blocking call
                if(result.IsSuccessStatusCode)
                {
                    var dataObjects = result.Content.ReadAsAsync<IEnumerable<Invoice>>().Result;
                }
                else
                {
                    //write error message
                }
            }*/
        }

        public static string Post(string postData, string urlSegment)
        {
            //RestSharp
            var client = new RestClient(requestUri);
            client.Authenticator = GetAuthentication();
            
            var request = new RestRequest(urlSegment, Method.POST);
            request.AddHeader("Content-type", "application/json");
            request.RequestFormat = DataFormat.Json;
            request.AddParameter("application/json", postData, ParameterType.RequestBody);
            request.AddHeader("X-Avalara-Client", "Connector Test Harness");
            IRestResponse response = client.Execute(request);
            var content = response.Content;
            return content;

            //ASP.Net
            /*using (var client1 = new HttpClient())
            {
                client1.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", Base64Format());
                HttpResponseMessage result = client1.PostAsync(requestUri, postData, new JsonMediaTypeFormatter()).Result;
            }*/
        }

        private static HttpBasicAuthenticator GetAuthentication()
        {
            string AccountNumber = ConfigurationManager.AppSettings["AccountNumber"];
            string APIKey = ConfigurationManager.AppSettings["APIKey"];
            if (string.IsNullOrEmpty(AccountNumber) || string.IsNullOrEmpty(APIKey))
                return null;
            HttpBasicAuthenticator a = new HttpBasicAuthenticator(AccountNumber,APIKey);
                return a;
        }
    }
}
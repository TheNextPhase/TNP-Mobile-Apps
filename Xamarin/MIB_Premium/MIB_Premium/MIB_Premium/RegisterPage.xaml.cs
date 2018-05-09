using System;
using System.Net.Http;
using System.Text;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MIB_Premium
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class RegisterPage : ContentPage
	{
		public RegisterPage ()
		{
			InitializeComponent ();
		}

        async public void Register_Clicked(object sender, EventArgs e)
        {
            //var client = new HttpClient();
            //client.BaseAddress = new Uri("https://www.medintellibasealerts.com/api/push_token");
            string jsonData = "";//@"{""session_token" : ""plainBlackGetToken.session_token"", "app_id" : "1072673178662", "push_token" : "push_token", "token_type" : "deviceType" "}";
            //var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
            //
            
            await Navigation.PushAsync(new MainPage());
        }
    }
}
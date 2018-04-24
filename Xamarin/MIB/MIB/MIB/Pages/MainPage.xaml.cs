using System;
using Xamarin.Forms;

namespace MIB
{
	public partial class MainPage : ContentPage
	{
        private string HOME_URL = "http://www.medintellibase.com/";
        private string INTELSOLUTION_URL = "http://www.medintellibase.com/services-software/";
        private string INTELSOFTWARE_URL = "http://www.medintellibase.com/mib-diy-software/";
        private string CONTACTS_URL = "http://medintellibase.com/contact-2/";


        public MainPage()
        {
            InitializeComponent();
        }

        void Home_Clicked(object sender, EventArgs e)
        {
            var title = GetTitle(sender);
            Device.OpenUri(new Uri(HOME_URL));
        }
        void IntelSolution_Clicked (object sender, EventArgs e)
        {
            var title = GetTitle(sender);
            Device.OpenUri(new Uri(INTELSOLUTION_URL));
            //await Navigation.PushAsync(new WebPage(title, INTELSOLUTION_URL));
        }

        void IntelSoftware_Clicked(object sender, EventArgs e)
        {
            var title = GetTitle(sender);
            Device.OpenUri(new Uri(INTELSOFTWARE_URL));
            //await Navigation.PushAsync(new WebPage(title, INTELSOFTWARE_URL));
        }
        void Contact_Clicked(object sender, EventArgs e)
        {
            var title = GetTitle(sender);
            Device.OpenUri(new Uri(CONTACTS_URL));
            //await Navigation.PushAsync(new WebPage(title, CONTACTS_URL));
        }
        async void Search_Clicked(object sender, EventArgs e)
        {
            var title = GetTitle(sender);
            await Navigation.PushAsync(new SearchPage(title));
        }
        private string GetTitle(object sender)
        {
            Button btn = (Button)sender;
            return btn.Text;
        }
    }
}

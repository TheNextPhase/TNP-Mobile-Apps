using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MIB
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class SearchPage : ContentPage
	{
        private string INTELSOLUTION_URL = "http://www.medintellibase.com/services-software/";
        private string INTELSOFTWARE_URL = "http://www.medintellibase.com/mib-diy-software/";
        private string CUSTOMALERTS_URL = "http://www.medintellibase.com/mib-custom-alerts/";
        private string BREAKING_NEWS_URL = "http://medintellibase.com/mib-custom-breaking-news/";
        private string MARKET_TRACKS_URL = "http://medintellibase.com/mib-custom-markettracks/";
        private string LIT_SEARCHES_URL = "http://medintellibase.com/mib-custom-litsearches-litreviews/";
        private string CUSTOM_MOBILE_URL = "http://medintellibase.com/mib-custom-mobile-app/";

        public SearchPage ()
		{
			InitializeComponent ();
		}
        public SearchPage(string title)
        {
            InitializeComponent();
            Title = title;
        }

        void IntelSolution(object sender, EventArgs e)
        {
            var title = GetTitle(sender);
            Device.OpenUri(new Uri(INTELSOLUTION_URL));
           // await Navigation.PushAsync(new WebPage(title, INTELSOLUTION_URL));
        }

        void IntelSoftware(object sender, EventArgs e)
        {
            var title = GetTitle(sender);
            Device.OpenUri(new Uri(INTELSOFTWARE_URL));
           // await Navigation.PushAsync(new WebPage(title, INTELSOFTWARE_URL));
        }

        void CustomAlerts(object sender, EventArgs e)
        {
            var title = GetTitle(sender);
            Device.OpenUri(new Uri(CUSTOMALERTS_URL));
            //await Navigation.PushAsync(new WebPage(title, CUSTOMALERTS_URL));
        }

        void BreakingNews(object sender, EventArgs e)
        {
            var title = GetTitle(sender);
            Device.OpenUri(new Uri(BREAKING_NEWS_URL));
           // await Navigation.PushAsync(new WebPage(title, BREAKING_NEWS_URL));
        }
        void MarketTracks(object sender, EventArgs e)
        {
            var title = GetTitle(sender);
            Device.OpenUri(new Uri(MARKET_TRACKS_URL));
            //await Navigation.PushAsync(new WebPage(title, MARKET_TRACKS_URL));
        }

        void LitSearches(object sender, EventArgs e)
        {
            var title = GetTitle(sender);
            Device.OpenUri(new Uri(LIT_SEARCHES_URL));
            //await Navigation.PushAsync(new WebPage(title, LIT_SEARCHES_URL));
        }

        void MobileApps(object sender, EventArgs e)
        {
            var title = GetTitle(sender);
            Device.OpenUri(new Uri(CUSTOM_MOBILE_URL));
            //await Navigation.PushAsync(new WebPage(title, CUSTOM_MOBILE_URL));
        }
        private string GetTitle(object sender)
        {
            Button btn = (Button)sender;
            return btn.Text;
        }
    }
}
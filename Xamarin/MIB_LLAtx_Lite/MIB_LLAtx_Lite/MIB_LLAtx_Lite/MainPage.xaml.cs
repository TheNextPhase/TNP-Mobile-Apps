using System;
using Xamarin.Forms;

namespace MIB_LLAtx_Lite
{
    public partial class MainPage : ContentPage
	{
        private string BREAKING_NEWS_URL = "https://www.medintellibasealerts.com/mibaapp/breakingnews?webguiCsrfToken=8YhuTfd3ijwmigbZpZQ4pA&subjectId=Nv_fHmLxuBFayDWF3nOGRw&macro_subjectId_468_jDS=Medical";
        private string CURRENT_ALERTS_URL = "https://www.medintellibasealerts.com/mibaapp/currentalert?webguiCsrfToken=8YhuTfd3ijwmigbZpZQ4pA&func=&subjectId=Nv_fHmLxuBFayDWF3nOGRw&macro_subjectId_188_jDS=Medical";
        private string MARKET_TRACKS_URL = "https://www.medintellibasealerts.com/mibaapp";
        private string HOME_WEBSITE_URL = "http://www.medintellibase.com/";

        public MainPage()
		{
			InitializeComponent();
		}
        public void CurrentAlerts_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(CURRENT_ALERTS_URL));
        }
        public void BreakingNews_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(BREAKING_NEWS_URL));
        }
        public void MarketTracks_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(MARKET_TRACKS_URL));
        }
        public void Phone_Clicked(object sender, EventArgs e)
        {
            
        }
        public void Email_Clicked(object sender, EventArgs e)
        {
           
        }
        public void Website_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(HOME_WEBSITE_URL));
        }
    }
}

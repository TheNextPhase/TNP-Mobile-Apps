using System;

using Xamarin.Forms;

namespace LLAtx_Lite
{
    public partial class MainPage : ContentPage
    {
        private string CURRENT_ALERTS_URL = "https://www.medintellibasealerts.com/mibaapp/currentalert?webguiCsrfToken=8YhuTfd3ijwmigbZpZQ4pA&func=&subjectId=Nv_fHmLxuBFayDWF3nOGRw&macro_subjectId_188_jDS=Medical";
        private string MARKET_TRACKS_URL = "https://www.medintellibasealerts.com/mibaapp";
        private string BREAKING_NEWS_URL = "https://www.medintellibasealerts.com/mibaapp/breakingnews?webguiCsrfToken=8YhuTfd3ijwmigbZpZQ4pA&subjectId=Nv_fHmLxuBFayDWF3nOGRw&macro_subjectId_468_jDS=Medical";

        public MainPage()
        {
            InitializeComponent();
        }
        void Alerts_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(CURRENT_ALERTS_URL));
        }

        void News_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(BREAKING_NEWS_URL));
        }
        void MarketTracks_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(MARKET_TRACKS_URL));
        }
    }
}

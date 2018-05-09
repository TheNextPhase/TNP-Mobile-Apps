using System;
using Xamarin.Forms;

namespace MIB_Premium
{
    public partial class MainPage : ContentPage
	{
        private string CURRENT_ALERTS_URL = "https://www.medintellibasealerts.com/home/medintellibase";
        private string BREAKING_NEWS_URL = "https://www.medintellibasealerts.com/home/breaking-news";
        private string UNREAD_ALERTS_URL = "https://www.medintellibasealerts.com/home/medintellibase/medintellibase?func=unreadAlerts";
        private string SEARCH_ALERTS_URL = "https://www.medintellibasealerts.com/home/medintellibase/medintellibase?func=alertArchive";
        private string SEARCH_ABSTRACT_URL = "https://www.medintellibasealerts.com/home/medintellibase/medintellibase?func=search";

        //private string USER_ALERT_GENERATOR_URL = "https://www.medintellibasealerts.com/home/medintellibase/medintellibase?func=alertCustom";
        private string SEARCH_RECORDS_URL = "https://www.medintellibasealerts.com/articles-db";
        private string MARKET_TRACKS_URL = "http://www.mibmarkettracks.com/index2.php";
        private string CLINICAL_TRACKS_URL = "http://www.mibmarkettracks.com/mib-clinical-tracks-quick-search.php";
        private string TECH_TRACKS_URL = "http://www.mibmarkettracks.com/mib-tech-tracks-quick-search.php";
        private string PIDIR_URL = "http://www.mibmarkettracks.com/mib-principal-investigators-directory.php";
        private string PI_SITES_DIR_URL = "http://www.mibmarkettracks.com/mib-pi-study-sites-directory.php";
        private string PROD_TECH_DIR_URL = "http://www.mibmarkettracks.com/mib-products-technologies-directory.php";
        private string COMP_SPONS_DIR_URL = "http://www.mibmarkettracks.com/mib-companies-sponsors-directory.php";
        private string SHOP_REPORTS_URL = "https://www.medintellibasealerts.com/home/medintellibase-alerts-reports";

        public MainPage()
		{
			InitializeComponent();
		}
        public void CurrentAlert_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(CURRENT_ALERTS_URL));
        }
        public void UnreadAlert_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(UNREAD_ALERTS_URL));
        }
        public void BreakingNews_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(BREAKING_NEWS_URL));
        }
        public void SearchAbstracts_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(SEARCH_ABSTRACT_URL));
        }
        public void SearchArticles_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(SEARCH_RECORDS_URL));
        }
        public void SearchAlerts_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(SEARCH_ALERTS_URL));
        }
        public void MarketTracks_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(MARKET_TRACKS_URL));
        }
        public void SearchClinicalTrials_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(CLINICAL_TRACKS_URL));
        }
        public void SearchTechTracks_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(TECH_TRACKS_URL));
        }
        public void PIDir_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(PIDIR_URL));
        }
        public void PIStudySitesDir_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(PI_SITES_DIR_URL));
        }
        public void ProductTechDir_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(PROD_TECH_DIR_URL));
        }
        public void CompanySponsorsDir_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(COMP_SPONS_DIR_URL));
        }
        public void ShopReports_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(SHOP_REPORTS_URL));
        }
    }
}

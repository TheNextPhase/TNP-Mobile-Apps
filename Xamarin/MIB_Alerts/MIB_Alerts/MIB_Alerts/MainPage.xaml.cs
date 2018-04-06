using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace MIB_Alerts
{
	public partial class MainPage : ContentPage
	{
        private string CURRENT_ALERTS_URL = "https://www.medintellibasealerts.com/home/medintellibase";
        private string UNREAD_ALERTS_URL = "https://www.medintellibasealerts.com/home/medintellibase/medintellibase?func=unreadAlerts";
        private string BREAKING_NEWS_URL = "https://www.medintellibasealerts.com/home/breaking-news";
        private string SEARCH_ABSTRACT_URL = "https://www.medintellibasealerts.com/home/medintellibase/medintellibase?func=search";
        private string SEARCH_ARTICLES_URL = "https://www.medintellibasealerts.com/articles-db";
        private string SEARCH_ALERTS_URL = "https://www.medintellibasealerts.com/home/medintellibase/medintellibase?func=alertArchive";
        private string DOCUMENTS_URL = "https://www.medintellibasealerts.com/home/documents";
        private string SHOP_MIB_REPORTS_URL = "https://www.medintellibasealerts.com/home/medintellibase-alerts-reports";

        public MainPage()
		{
			InitializeComponent();
		}
        void CurrentAlerts_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(CURRENT_ALERTS_URL));
        }
        void UnreadAlerts_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(UNREAD_ALERTS_URL));         
        }
        void BreakingNews_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(BREAKING_NEWS_URL));
        }
        void SearchAbstract_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(SEARCH_ABSTRACT_URL));
        }
        void SearchArticles_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(SEARCH_ARTICLES_URL));
        }
        void SearchAlerts_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(SEARCH_ALERTS_URL));
        }
        void Documents_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(DOCUMENTS_URL));
        }
        void ShopMIBReports_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(SHOP_MIB_REPORTS_URL));
        }

    }
}

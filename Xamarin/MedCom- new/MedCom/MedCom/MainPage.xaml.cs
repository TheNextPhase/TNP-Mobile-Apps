using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace MedCom
{
	public partial class MainPage : ContentPage
	{
        private string REPORT_URL = "https://www.medcomalerts.com/home/medintellibase";
        private string UNREAD_ALERTS_URL = "https://www.medcomalerts.com/home/medintellibase/medintellibase?func=unreadAlerts";
        private string USER_ALERTS_URL = "https://www.medcomalerts.com/home/medintellibase/medintellibase?func=alertCustom";
        private string ABSTRACT_SEARCH_URL = "https://www.medcomalerts.com/home/medintellibase/medintellibase?func=search";
        private string REQUEST_FORM_URL = "https://www.medcomalerts.com/portal/usmi-request-form2";
        private string ID_PAH_URL = "https://www.medcomalerts.com/home/medintellibase?webguiCsrfToken=vG7HxEQaC2ze2_pAbJ6iJw&func=&subjectId=d8eebbHgo_xjRbIOlRQFJw&macro_subjectId_375_jDS=Investigator+Directory";
        private string ID_ASPIRE_URL = "https://www.medcomalerts.com/home/medintellibase?webguiCsrfToken=NAMIZ_DZyEsunFXXsEQ-Ww&func=&subjectId=uR1x8HWHDRzRSjIrRAcX8Q&macro_subjectId_177_jDS=Investigator+Directory";

        public MainPage()
		{
			InitializeComponent();
		}

        async public void Current_Alerts_Clicked(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new WebPage(REPORT_URL));
            //Device.OpenUri(new Uri(REPORT_URL));
        }
        async public void Unread_Alerts_Clicked(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new WebPage(UNREAD_ALERTS_URL));
            //Device.OpenUri(new Uri(UNREAD_ALERTS_URL));
        }
        public void User_Alerts_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(USER_ALERTS_URL));
        }
        public void Quick_Search_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(ABSTRACT_SEARCH_URL));
        }
        public void ID_PAH_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(ID_PAH_URL));
        }
        public void ID_ASPIRE_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(ID_ASPIRE_URL));
        }
        public void Web_Request_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(REQUEST_FORM_URL));
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace MIB_MarketTracks
{
	public partial class MainPage : ContentPage
	{
        private string MARKET_TRACKS_URL = "http://www.mibmarkettracks.com/index2.php";
        private string CLINICAL_TRACKS_URL = "http://www.mibmarkettracks.com/mib-clinical-tracks-quick-search.php";
        private string TECH_TRACKS_URL = "http://www.mibmarkettracks.com/mib-tech-tracks-quick-search.php";
        private string PI_DIRECTORY_URL = "http://www.mibmarkettracks.com/mib-principal-investigators-directory.php";
        private string PI_STUDY_DIR_URL = "http://www.mibmarkettracks.com/mib-pi-study-sites-directory.php";
        private string PRODUCT_DIR_URL = "http://www.mibmarkettracks.com/mib-products-technologies-directory.php";
        private string COMPANY_SPONSOR_DIR_URL = "http://www.mibmarkettracks.com/mib-companies-sponsors-directory.php";

        public MainPage()
		{
			InitializeComponent();
		}
        void MarketTracks_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(MARKET_TRACKS_URL));
        }
        void ClinicalTracks_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(CLINICAL_TRACKS_URL));
        }
        void TechTracks_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(TECH_TRACKS_URL));
        }
        void PI_Directory_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(PI_DIRECTORY_URL));
        }
        void PI_Study_Dir_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(PI_STUDY_DIR_URL));
        }
        void ProductDir_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(PRODUCT_DIR_URL));
        }
        void CompanySponsorDir_Clicked(object sender, EventArgs e)
        {
            Device.OpenUri(new Uri(COMPANY_SPONSOR_DIR_URL));
        }
    }
}

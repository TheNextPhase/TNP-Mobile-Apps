
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

[assembly: XamlCompilation(XamlCompilationOptions.Compile)]
namespace MIB
{
    public partial class App : Application
	{
		public App ()
		{
			InitializeComponent();
            NavigationPage MainPage = new NavigationPage(new MainPage());
            // MainPage.BarBackgroundColor = Color.Black;
            // MainPage.BarTextColor = Color.White;
            // ((NavigationPage)Application.Current.MainPage).BarBackgroundColor = Color.Black;
            // ((NavigationPage)Application.Current.MainPage).BarTextColor = Color.OrangeRed;
        }

		protected override void OnStart ()
		{
			// Handle when your app starts
		}

		protected override void OnSleep ()
		{
			// Handle when your app sleeps
		}

		protected override void OnResume ()
		{
			// Handle when your app resumes
		}
	}
}

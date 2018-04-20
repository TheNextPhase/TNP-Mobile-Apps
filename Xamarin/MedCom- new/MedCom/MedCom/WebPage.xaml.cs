using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MedCom
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class WebPage : ContentPage
    {
        public WebPage() { InitializeComponent(); }

        public WebPage(string title, string url)
        {
            InitializeComponent();
            webpage.Source = url;
            Title = title;
        }
        public WebPage(string url)
        {
            InitializeComponent();
            webpage.Source = url;
        }
        protected async override void OnAppearing()
        {
            base.OnAppearing();
            await progress.ProgressTo(0.9, 900, Easing.SpringIn);
        }
        private void WebView_OnNavigating(object sender, WebNavigatedEventArgs e)
        {
            progress.IsVisible = true;
        }
        private void WebView_OnNavigated(object sender, WebNavigatedEventArgs e)
        {
            progress.IsVisible = false;
        }
    }
}
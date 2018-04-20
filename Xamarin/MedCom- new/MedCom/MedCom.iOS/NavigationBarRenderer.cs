using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CoreGraphics;
using Foundation;
using UIKit;
using Xamarin.Forms;
using Xamarin.Forms.Platform.iOS;

[assembly: ExportRenderer(typeof(NavigationPage), typeof(MedCom.iOS.NavigationBarRenderer))]
namespace MedCom.iOS
{
    class NavigationBarRenderer: NavigationRenderer
    {
        public override void ViewDidLoad()
        {
            base.ViewDidLoad();
            NavigationBar.BackgroundColor = UIColor.White;
            NavigationBar.TintColor = UIColor.White;
            //NavigationBar.Translucent = true;
            NavigationBar.BarStyle = UIBarStyle.Black;
            var image = UIImage.FromBundle("logo.png");
            
            /*image = image.Crop(0,
                (int)(image.CGImage.Height - NavigationBar.Frame.Height),
                (int)image.CGImage.Width,
                (int)NavigationBar.Frame.Height);
            image = image.Scale(new CGSize(NavigationBar.Frame.Width, NavigationBar.Frame.Height));*/
            NavigationBar.BarTintColor = UIColor.FromPatternImage(image);
            //NavigationBar.ShadowImage = new UIImage();
        }
    }
}
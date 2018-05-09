using Android.Content;
using Android.Graphics;
using Xamarin.Forms;
using Xamarin.Forms.Platform.Android;

[assembly: ExportRenderer(typeof(Button), typeof(MIB.Droid.CustomButton))]
namespace MIB.Droid
{
    class CustomButton : ButtonRenderer
    {
        public CustomButton(Context context) : base(context) { }
        protected override void OnDraw(Canvas canvas) => base.OnDraw(canvas);
        protected override void OnElementChanged(ElementChangedEventArgs<Button> e)
        {
            base.OnElementChanged(e);
            if (e.NewElement != null && !string.IsNullOrEmpty(e.NewElement.FontFamily))
            {
                var font = Typeface.CreateFromAsset(Forms.Context.ApplicationContext.Assets, e.NewElement.FontFamily);

                Control.Typeface = font;
                Control.SetAllCaps(false);
            }
        }

    }
}
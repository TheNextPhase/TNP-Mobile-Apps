using Android.Content;
using Android.Graphics;
using Xamarin.Forms;
using Xamarin.Forms.Platform.Android;

[assembly: ExportRenderer(typeof(Button), typeof(MIB_LLAtx_Lite.Droid.CustomButton))]
namespace MIB_LLAtx_Lite.Droid
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
#pragma warning disable CS0618 // Type or member is obsolete
                var font = Typeface.CreateFromAsset(Forms.Context.ApplicationContext.Assets, e.NewElement.FontFamily);
#pragma warning restore CS0618 // Type or member is obsolete

                Control.Typeface = font;
                Control.SetAllCaps(false);
            }
        }

    }
}

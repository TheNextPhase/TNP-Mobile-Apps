﻿using System;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace LLAtx_Lite
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class RegisterPage : ContentPage
	{
        public RegisterPage() => InitializeComponent();

        async public void Register_Clicked(object sender, EventArgs e) {
            await Navigation.PushAsync(new MainPage());
        }
	}
}
﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MIB
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class WebPage : ContentPage
	{
        public WebPage() { InitializeComponent(); }

        public WebPage (string title, string url)
		{
            InitializeComponent();
            webpage.Source = url;
        }

    }
}
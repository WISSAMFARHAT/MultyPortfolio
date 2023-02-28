using AngryMonkey.Core.Web;
using AngryMonkey.Core;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

WebCoreConfig.ConfigureServices(builder.Services);


var app = builder.Build();

WebCoreConfig.Configure<WebCoreConfig>(app, app.Environment);

WebCoreConfig.Current.Head = new WebCoreConfigHead()
{
    DefaultTitle = "Portfolio",
    TitleSuffix = " - Portfolio",
    Bundles = new string[]
    {
        "js/site.js",  
        "css/site.css",
    }
};

WebCoreConfig.Current.Header = new WebCoreConfigHeader()
{
    Html = new string[] { "Views/Shared/Components/Header.cshtml" }
};

//WebCoreConfig.Current.Footer = new WebCoreConfigFooter()
//{
//    Html = new string[] { "Views/Shared/Footer.cshtml" }
//};

//WebCoreConfig.Current.Sidemnu = new WebCoreConfigSidemenu()
//{
//    Html = new string[] { "Views/Shared/Sidemenu.cshtml" }
//};


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();

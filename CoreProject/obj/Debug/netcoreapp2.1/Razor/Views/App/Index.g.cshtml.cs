#pragma checksum "C:\Users\pinzona.5\Documents\Projects\CoreFramework\CoreProject\CoreProject\Views\App\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "9428306db21b151cceed4fb72b2bd63aff6d88e6"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_App_Index), @"mvc.1.0.view", @"/Views/App/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/App/Index.cshtml", typeof(AspNetCore.Views_App_Index))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\pinzona.5\Documents\Projects\CoreFramework\CoreProject\CoreProject\Views\_ViewImports.cshtml"
using CoreProject.Controllers;

#line default
#line hidden
#line 2 "C:\Users\pinzona.5\Documents\Projects\CoreFramework\CoreProject\CoreProject\Views\_ViewImports.cshtml"
using CoreProject.ViewModels;

#line default
#line hidden
#line 3 "C:\Users\pinzona.5\Documents\Projects\CoreFramework\CoreProject\CoreProject\Views\_ViewImports.cshtml"
using CoreProject.Data.Entities;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9428306db21b151cceed4fb72b2bd63aff6d88e6", @"/Views/App/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"606146e68f531a08b36e674aa90b397675a15fe4", @"/Views/_ViewImports.cshtml")]
    public class Views_App_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 2 "C:\Users\pinzona.5\Documents\Projects\CoreFramework\CoreProject\CoreProject\Views\App\Index.cshtml"
  
    ViewData["Title"] = "Home Page";

#line default
#line hidden
            BeginContext(47, 10, true);
            WriteLiteral("\r\n    <h1>");
            EndContext();
            BeginContext(58, 17, false);
#line 6 "C:\Users\pinzona.5\Documents\Projects\CoreFramework\CoreProject\CoreProject\Views\App\Index.cshtml"
   Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(75, 573, true);
            WriteLiteral(@"</h1>

    <div class=""row"">
        
        <div class=""col-lg-12"">
            <div class=""product-info"">
                <img src=""img/"" alt=""Vangog"">
                <h3>Mug</h3>
                <ul class=""products-props"">
                    <li>Price: $9.99</li>
                    <li>Artist: Van Gogh</li>
                    <li>Title:</li>
                    <li>Description: Self-prortrait</li>
                </ul>
                <button id=""buyButton"" class=""btn btn-success""></button>
            </div>
        </div>

    </div>


");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591

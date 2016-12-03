---
layout: post
title: AvaTax.NET client library available on NuGet
date: 2016-12-05 11:00
author: Ted Spence
comments: true
categories: [Sales Tax APIs]
product: blog
doctype: blog
disqus: 1
imgsrc: /public/images/blog/nuget-avatax-client-library.png
---

For those Avalara customers using Microsoft's DotNet languages, Avalara has published an official <a href="https://www.nuget.org/packages/Avalara.AvaTax/">AvaTax client library on NuGet</a>, the official repository for open source code in the DotNet world!  This client library is already configured with all the code and logic you need to get started incorporating tax calculation into your application, and it can greatly speed up your development cycle.

For today's article, I'll walk you through the process of adding AvaTax to your DotNet project using this simple new library.

<h3>Create a New Project</h3>

To begin, let's create a fresh new program.  I happen to be partial to Microsoft's C# language since I'm an old Turbo Pascal guy from way back, so I'll begin by creating a C# console application.  In Visual Studio, I begin by selecting *New Project* and then select *Console Application*, and click *OK*.

<img src="/public/images/blog/nuget-create-new-project.png" alt="Create New Project in Visual Studio" width="477" height="330" />

Now that Visual Studio has created a blank project, our next step is to add a reference to AvaTax using the NuGet package manager.  Use the *Tools* menu, and select *NuGet Package Manager* and the option *Manage Packages for Solution*.  The NuGet package manager provides a wide variety of open source code libraries you can use - and AvaTax is now available among them!  Just type `AvaTax` into the search box and hit the enter key; you'll see the library right away:

<img src="/public/images/blog/nuget-avatax-client-library.png" alt="AvaTax in NuGet Package Manager" width="512" height="170" />

To add this library to your project, click on the library on the left hand side, then select the checkbox next to your project on the right hand side and click *Install*.

<img src="/public/images/blog/nuget-add-library.png" alt="Adding AvaTax to your project" width="553" height="384" />

When you click *Install*, NuGet will begin to download this client library and its dependencies.  You'll get a popup indicating what other libraries it has to download in order to parse JSON-formatted data, and it will provide information about the licenses for those libraries.  Since AvaTax uses the Newtonsoft JSON library, you will see a few licenses pop up on your screen.  AvaTax and the AvaTax client library are published using the <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0 license</a>, which should make this code usable for most commercial and open source projects.  

Now that you've successfully linked to the AvaTax client library, you can begin writing code.  The first step is to add `using Avalara.AvaTax.RestClient;` to the top of your program to tell it that you want to begin using AvaTax.  Next, you'll create a client like this:

```csharp
using Avalara.AvaTax.RestClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication3
{
    class Program
    {
        static void Main(string[] args)
        {
            var client = new AvaTaxClient("MyApp", "1.0", Environment.MachineName, AvaTaxEnvironment.Sandbox)
                .WithSecurity("MyUsername", "MyPassword");
        }
    }
}
```

Let's walk through what these parameters mean.

<ul class="normal">
    <li>*appName* ("MyApp") and *appVersion* ("1.0") is the name and version number of your program.  These values do not change the behavior of your code, but they help Avalara team members assist you with debugging and diagnosing problems.  This information can also be helpful when auditing your tax functionality later.  If you provide a useful, readable name and version number, this can help you discover when one of your programs is using an out-of-date client library.</li>
    <li>*machineName* (Environment.MachineName) is also a debugging aid.  If you call Avalara support, and ask for help understanding why a tax transaction has unexpected behavior, Avalara team members can help to identify your API calls and provide better support and guidance.</li>
    <li>*environment* (AvaTaxEnvironment.Sandbox) is the name of the AvaTax server you wish to contact.  You can select between AvaTax Sandbox and Production services; Avalara will automatically contact the correct server based on the value you provide here.</li>
    <li>The function *WithSecurity* allows you to set up your credentials.  You can authenticate using any supported method - Username / Password, AccountId / LicenseKey, and even Bearer Token.  Since Bearer Token is currently available for custom integrations only, for today's example, I will demonstrate username / password authentication.</li>
</ul>

Now that you've set up your client, it's time to create a transaction!

<h2>TransactionBuilder</h2>

Tax transactions can be very simple or very complex.  A simple point-of-sale transaction might have only one or two values; whereas a large inventory purchase order may have hundreds of lines and a variety of different shipping addresses.  Let's start with a very simple transaction that has a single address and a single line.

In AvaTax, we use an object called a TransactionBuilder to generate a tax transaction.  This builder allows us to construct a transaction using a fluent, expressive language called a "Builder Pattern".  The builder starts very simply, but it can grow as your needs become more complex.  Here's what a very simple transaction looks like in the builder pattern:

```csharp
    var t1 = new TransactionBuilder(client, "DEFAULT", DocumentType.SalesInvoice, "ABC")
        .WithAddress(TransactionAddressType.SingleLocation, "123 Main Street", "Irvine", "CA", "92615", "US")
        .WithLine(100.0m)
        .Create();
```

How does this builder work?  Well, at its core, the AvaTax engine provides an API called `POST /api/v2/transactions/create`.  That functionality is available as an API called `client.CreateTransaction()`, and it takes as its parameter an object called a `CreateTransactionModel`.  However, since that model is a really big object, it can be daunting to fill out all the data in that model by yourself.  The builder pattern helps guide you to ensure that you fill out all the basic information required for your transaction.

At the end of the builder, you call `.Create();`.  This function assembles the object into a `CreateTransactionModel` for you, calls the API, and returns a fully formed transaction.  The only magic you need to understand is in the constructor for the TransactionBuilder.  We ask for four things:

<ul class="normal">
    <li>The *AvaTaxClient* you created above.</li>
    <li>The *CompanyCode* of the company that created this transaction.</li>
    <li>The *DocumentType* of this transaction - for more information on document types, see <a href="http://developer.avalara.com/blog/2016/11/18/types-of-transactions/">my previous article on Types of Transactions.</a></li>
    <li>The *CustomerCode* of the customer who requested this transaction.  Customer codes are necessary to check for certain exemption cases; for example, when a customer has set up an exemption certificate for certain types of transactions.  As long as you make sure that each customer has their own unique customer code, any value will be fine here.</li>
</ul>

Now, you can look at the results:

```csharp
    Console.WriteLine("Your calculated tax was {0}", t1.totalTax);
```

That's pretty easy!  But what happens if you want to build a much more complex transaction?  Here's how it might look:

```csharp
    var t2 = new TransactionBuilder(client, "DEFAULT", DocumentType.SalesInvoice, "ABC")
        .WithAddress(TransactionAddressType.ShipFrom, "123 Main Street", "Irvine", "CA", "92615", "US")
        .WithAddress(TransactionAddressType.ShipTo, "100 Ravine Lane NE", "Bainbridge Island", "WA", "98110", "US")
        .WithLine(100.0m)
        .WithLine(1234.56m) // Each line is added as a separate item on the invoice!
        .WithExemptLine(50.0m, "NT") // An exempt component for the transaction!
        .WithLine(2000.0m) // This line represents a computer that was shipped to New York!
        .WithLineAddress(TransactionAddressType.ShipFrom, "123 Main Street", "Irvine", "CA", "92615", "US")
        .WithLineAddress(TransactionAddressType.ShipTo, "1500 Broadway", "New York", "NY", "10019", "US")
        .WithLine(50.0m, "FR010000") // shipping costs!
        .Create();

    Console.WriteLine("Your calculated tax was {0}", t2.totalTax);
```

I hope this has helped you see how the AvaTax client library can help simplify your tax processing work.  Each month, AvaTax will update the DotNet client library with our latest feature releases, and we'll add more functionality to help solve your business problems.  Because you've added the AvaTax client via NuGet, you'll immediately see an alert whenever we release an updated client, and you can easily upgrade to the latest code with a single click.

For those programmers interested in participating, we invite you to view our <a href="https://github.com/avadev/AvaTaxClientLibrary">open source GitHub repository online</a>.  Please feel free to send us pull requests with any features or functionality you'd like to see!

Happy Holidays!

--Ted Spence, Director, AvaTax Core Engine
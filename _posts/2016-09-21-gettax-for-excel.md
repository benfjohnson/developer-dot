---
layout: post
title: GetTax For Excel? Really?
date: 2016-09-21 17:00
author: Dustin Welden
comments: true
categories: [older]
product: blog
doctype: blog
disqus: 1
---

# Just because you can, doesn't mean you should.

At least, that's what I first thought when I had heard that it was possible to make web requests in VBA. Then I thought about how many people use Excel for nearly all of their business needs. So of course, that lead me to a "What If" moment:

> What if Excel had a `=GetTax()` function?

Of course, I hadn't used (or _debugged_) VBA in years. I had completely forgotten there were more leisurely activities, like eating a box of wood screws. Nevertheless, my stubborness to finish what I started lead to this invoice template:

<center><a href="/public/misc/AvaTaxForExcel.xlsm"><img src="/public/images/avataxforexcel.png" alt="AvaTax for Excel" /></a><br/><em>Click me! I've Got Macros!</em><br/><br/><br/></center>

Naturally, you may want to do more than just make invoices, so we'll take a quick look at the underlying VBA code to get you started. 

## Eat Your Vegetables, Look Both Ways When Crossing Your GoTos, And Don't Talk to On Error Resume Nexts.

In our AvaTaxForExcel module, a sample subroutine and function is provided that gets invoked by the "Calculate Tax and Total" button on the spreadsheet. This subroutine invokes our GetTax function like this:

    Public Sub CalculateTax()
    
        Range("J38:J38").Value = GetTax(Range("J3").Value, Range("J4").Value, Range("A5").Value, Range("A6").Value, Range("A7").Value, Range("A8").Value, Range("C8").Value, Range("A9").Value, _
                                    Range("D8").Value, Range("G12").Value, Range("G13").Value, Range("G14").Value, Range("G15").Value, Range("I15").Value, _
                                    Range("G16").Value, Range("J15").Value, Range("A18:J18"), Range("A19:J36"))
    
    End Sub

The function signature of GetTax is as follows:

    Function GetTax(docDate As Date, customerCode As String, shipFromLine1 As String, shipFromLine2 As String, shipFromLine3 As String, shipFromCity As String, shipFromRegion As String, shipFromCountry As String, shipFromPostalCode As String, _
        shipToLine1 As String, shipToLine2 As String, shipToLine3 As String, shipToCity As String, shipToRegion As String, shipToCountry As String, shipToPostalCode As String, _
        lineHeaders As Range, lineItems As Range) As String

The GetTax call, when invoked, performs the web request against the <a href="https://sandbox-rest.avatax.com/swagger/ui/index.html">REST v2 APIs</a> resulting in your calculated invoice appearing on your AvaTax console:

<center><img src="/public/images/adminconsole.png" alt="Admin Console Screenshot" style="width: 100%;"/><br/><br/><br/></center>

As well as your spreadsheet:

<center><img src="/public/images/spreadsheet.png" alt="Invoice Total With Tax" /><br/><br/><br/></center>

The GetTax method is provided for your convenience, and traps and displays errors it encounters via a message box. You may want to handle these errors differently. All the magic actually occurs via the TransactionRequest class' ToJson method, which uses the excellent VBA-JSON library to translate the class into a JSON object, which is fed into the web request.

Have any questions about the REST v2 API?  If you do, let us know!

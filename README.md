CSC301 A1 Repo for Affanullah Siddiqui and Joshua Emerson

This repository is for a Checkout Calculator Web Application built using Express.js and React.js. Users can enter various items to add them to their cart to calculate the total and applicable taxes. Instructions for use are detailed below.

# Deployed Application Link
https://calm-shelf-88516.herokuapp.com/


# Instructions

## Adding an Item to Checkout
To add an item to checkout, a user will fill in the fields on the form which asks for the "Title", "Amount", and "Date" for the item being purchased. These fields appear with the names "Title", "Amount", and "Date" on the form. A user must enter a text value into the title field that describes the item being purchased. Likewise, the user must then enter a numerical figure for the amount field that signifies the price of the item that is being purchased. Finally, the user must select a date, either by entering the date in a YYYY-MM-DD format or using the date picker provided on the form. By default, the date is set to whatever today's date happens to be. When the user clicks the "Add Item" button for this form, the item being purchased will be displayed as a list object that is properly formatted with information that the user entered from the form. If a user does not enter a title, an amount, or both when recording the purchase of anitem, this list object for this item will not be added onto the screen.

## Discount Codes
The user also has the option to enter a discount code in the second form that has the field "Discount Code". The user will enter a text based discount code in this section. If the code the user enters is valid (we set the valid codes to be save, save10, save20, and save30 which represent a 5%, 10%, 20%, and 30% discount respectively), then this discount will be applied to the sub total of all the items that the user has checked out. To add the discount code, the user simply has to click the "Add Discount" button on the form after they fill in the "Discount Code" field. Currently, the way that have implemented the discount codes in our application is that the discount code is only applied after a new item is added, i.e. a user must enter a discount code and then another item to see the discount being reflected in their bill. More specifically, if a user already has items that they have checked out and apply a discount code, they ust then enter another item for this discount to be applied to all of their items. If an invalid code is entered, no discount will be reflected on the users bill which tells the user that the discount code they entered was not valid (i.e. an invalid discount code fails silently). If multiple discount codes are added, the most recent valid discount code that was entered will be applied to the current sub total.

## Bill Section
On the bottom of the application, their is a section that displays the "SubTotal", "Discount", "Tax", and "Total" of the items that the user has checked out. More specifically, when a user checks out a valid item by adding this item through the form, these four fields will change the amounts that they display. The "SubTotal" box includes the current sum of the amounts of all the items that the user has currently checked out. The "Discount" box displays the value of the discount that is being applied when a user enters a valid discount code. For example, if the SubTotal is 100 and the use entered the "save10" discount code, then $10 will appear in the "Discount" box. The "Tax" box includes the tax value (13%) that is applied to the the current subtotal minus the current discount value. Finally, the "Total" box displays the the dollar figure of the (SubTotal - Discount) + Tax. 

# Running app locally
To run the app locally on a user's machine, they must have npm and node.js installed. Then after cloning the repository, in the top level directory they must first run the following command to install all the required packages:

``` npm run setup ```

NOTE: you can safely ignore all warnings that may appear.

Then to start the application, they must run the following command in the top level directory:

``` npm run build-run ```

The application will then be running on localhost:5000.

# Running unit tests

To run the unit tests for the application, after installing the required packages via the ``` npm run setup ``` command (see above comment about warnings), a user must simply run the following command in their terminal in the top level directory:

``` npm test ```

After running this command, the user will see the results of the unit tests in their terminal window.

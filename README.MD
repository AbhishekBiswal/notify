# Notify
### Simplest Notification Bar / Box / Bubble around.

## Why This?
Because I needed the same for a project and I found myself writing the same again and again. So I made it into a function which uses jQuery, and only one HTML div which makes it super easy to customize. Right now it's just a bar stuck to the top of the browser and but you can make it fly around :)

Another reason to make this is for the simplicity. While working on the backend, I can send in notify(); within a script tag without actually writing another notification system. It can be used to notify the user that the fields have been submitted or errors. Simplicity also makes it extensible, like adding classes on the fly for styling it differently for different cases.

## How?
Include notify.js and notify.css (or your customized #notify css) in your HTML Document/Documents and fire up the following function anywhere.
'''
notify("Your Message Here");
'''

ANYWHERE. You can put it in an onclick event or even onload.
'''
    <a href="#" onclick="notify('Hello, World!');">Click</a>
'''

'''
    <script>
        notify("I'll pop up");
    </script>
'''
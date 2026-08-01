from PIL import Image
img = Image.open('/Users/dhruvsingh/Desktop/PhishNet/Design.png')

# The center shield seems to be roughly between x=500 and 1000, and y=150 and 650.
# Let's crop it exactly.
shield = img.crop((500, 100, 1050, 650))
shield.save('/Users/dhruvsingh/Desktop/PhishNet/public/shield.png')


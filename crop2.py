from PIL import Image
img = Image.open('/Users/dhruvsingh/Desktop/PhishNet/design.png')

# Terminal crop
terminal = img.crop((780, 90, 1440, 620))
terminal.save('/Users/dhruvsingh/Desktop/PhishNet/public/terminal.png')

# Shield card crop
shield_card = img.crop((880, 710, 1480, 915))
shield_card.save('/Users/dhruvsingh/Desktop/PhishNet/public/shield-card.png')


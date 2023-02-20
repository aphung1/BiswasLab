import requests
from bs4 import BeautifulSoup
 
 
# Making a GET request
r = requests.get('https://www.researchgate.net/profile/Biswas-Debabrata',timeout=(5, 27))
 
# Parsing the HTML
soup = BeautifulSoup(r.content, 'html.parser')
 
# Getting the title tag
# research_items = soup.find_all("div", class="nova-legacy-v-publication-item")
 
# Getting the name of the tag
print(soup.contents)
 
# Getting the name of parent tag
print(soup.title.parent.name)
 
# use the child attribute to get
# the name of the child tag
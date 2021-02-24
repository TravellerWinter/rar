import requests
from bs4 import BeautifulSoup
from scraperDB import ScraperDB
import pickle
from ftplib import FTP


dic = {}
fileObj = open("db.txt", "rb")
prev = pickle.load(fileObj)  #previous scraper obj
dicPrev = prev.dicto()  #previous scraper dictionary
results = []
ftp = FTP("ftp.unique-project.com", "11491857@aruba.it", "Arubaaccess12")
ftp.cwd("unique-project.com")
content = ""
def main():

    URL = 'https://www.galileonet.it/'
    URL1 = ""
    URL2 = ""
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, "html.parser")
    parse(soup)  
    results = control(dicPrev, dic)
    n = 0
    res = ""
    for el in results: #results è una lista di liste. ogni lista contiene un articolo
        st = ""
        f = open("dG/g" + str(n + 1111) + ".html", "w", encoding= "utf8")
        for i in el: #analizza ogni tag dentro la lista e lo aggiunge a st
            st += str(i)          
        f.write("<article class = \"article\">" + st + "<div class=\"leggi\"><a href=\"pageArticleP.html\"><img class=\"arrow\" src=\"img/arrowArticle.png\" /></a></div>" + "</article>")
        f.close()
        n += 1
        res += st + "\n"  
    f = open("dG/databaseOdierno.txt", "w", encoding= "utf8")  #salvataggio articoli nel database
    f.write(res)
    f.close()
    
    database = open("dG/databaseOdierno.txt", "rb")
    ftp.storlines("STOR databaseOdierno.txt", database )
    #cicli di scrittura per gli altri repository



def control(prev, dic):
    # Check if in the new dictionary there are new elements
    n = 0
    results = []
    for i in dic:
        a1 = prev[i]
        a2 = dic[i]
        for i in a2:
            if i not in a1:
                results.append(i)
    return results
        
def parse(soup):
    # per Galielo News
    metadata = soup.find_all("div", class_ = "td-module-meta-info")
    n = 0
    results = []
    for el in metadata:
        if metadata.index(el) > 3:
            break
        else:
            #Variabili
            ar = [] # array dell'articolo, composto da: categoria, titolo, data
            a = "" #href dell'articolo da usare per oggetto request



            #Operazioni di scraping
            category = el.find_all(class_ = "td-post-category")
            title = el.find_all(class_ = "tdb-module-title-wrap")
            for i in title:
                a = i.find("a")["href"]
            date = el.find_all(class_ = "td-post-date")

            #Scraping articolo di landing
            pageArticle = requests.get(a)
            soupArticle = BeautifulSoup(pageArticle.content, "html.parser")
            content = soupArticle.find_all(class_ = "td-post-content")
           
            for i in content:
                add = i.find_all("a", limit = 1)
                img = i.find_all("img", limit = 1)
                for el in img:
                    el["src"] = add[0]["href"]       #cambia l'attributo src dell'immaine di copertina in modo tale che sia uguale al tag "a", di cui è il successore


                        
            
            for i in content:
                if i.find_all(class_ = "wp-block-image") != []:
                    
                    figure = i.find_all(class_ = "wp-block-image")
                    for el in figure:

                        figImg = el.find("img")              
                        figImg["src"] = figImg["data-lazy-src"]
                                              


            titleA = list(title[0].text)
   
            if "?" in titleA:
                titleA.remove("?")
            path = "".join(titleA)
            if ":" in titleA:
                titleA.remove(":")
            path = "".join(titleA)
  
            with open("articoli Galileo/" + path + ".html", "w", encoding= "utf8") as f:
                for el in content:
                    el = str(el)
                    f.write("<html><head><title>"+ title[0].text +"</title><link rel = \"stylesheet\" type = \"text/css\">" +"<meta charset = \"utf-8\"></head><body>" + el + "<script src = \"\"></script></body></html>")
                f.close()

            ftp.maxline = 8192 * 3
            ftp.encoding = "utf-8"
            ftp.sendcmd('OPTS UTF8 ON')
            fb = open("articoli Galileo/" + path + ".html", "rb")
            
            ftp.storbinary("STOR " + "articoli Galileo/" + path + ".html", fb)
            fb.close()
            #cicli di trasformazione codice html per sito client
            for i in range(len(category)):
                text = category[i].text
                res = "<div class=\"category\"><p>" + text + "</p></div>"
                ar.append(res)
            for i in range(len(title)):
                text = title[i].text
                res = "<div class=\"title\"><a href = \"" + "../articoli Galileo/" + path + ".html" + "\" ><h2>" + text + "</h2></a></div>"
                ar.append(res)
            for i in range(len(date)):
                text = date[i].text
                res = "<div class=\"date\"><p>" + text + "</p></div>"
                ar.append(res)
            results.append(ar)



    dic["https://www.galileonet.it/"] = results #risultato articoli galileo
    

    #...

    #salvatggio oggetto
    d = ScraperDB(dic)
    d.check(dic)



                   
        



            
            
        
    
            

    
   
    
    

    








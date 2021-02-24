import pickle
class ScraperDB():

    def __init__(self, dic):
        self.d = {}
        self.dic = dic # user dic
        try:

            fileObj = open("db.txt", "rb")
            obj = pickle.load(fileObj)
            self.d = obj.dicto()
        except EOFError:
            print("file null")
            self.d = dic
            fileObj = open("db.txt", "wb")
            pickle.dump(self, fileObj)
            fileObj.close()


    def check(self, dic):
        

        if self.d != dic:
            self.d = dic
            fileObj = open("db.txt", "wb")
            pickle.dump(self, fileObj)
            fileObj.close()
            
        else: 
            return False


    def dicto(self):
        return self.d


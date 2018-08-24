from PIL import Image
import sys
paths = sys.argv[1:]
print(sys.argv[1:])
zip_path = paths[0] #"/media/asahi/办公/work/py/"
if zip_path[-1] is not "/":
	zip_path = zip_path+"/"
path = paths[1]
im = Image.open(path)
img_name = path.split("/")[-1]
w, h = im.size
rate = 1.0 # 压缩率
# 根据图像大小设置压缩率
if w >= 2000 or h >= 2000:
	rate = 0.3
elif w >= 1000 or h >= 1000:
	rate = 0.5
elif w >= 500 or h >= 500:
	rate = 0.9  
w = int(w * rate)   # 新的宽
h = int(h * rate) # 新的高
im.thumbnail((w, h),Image.ANTIALIAS)
im.save(zip_path+img_name)
print(zip_path+img_name)
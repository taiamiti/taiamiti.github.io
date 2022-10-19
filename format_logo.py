import os
import glob

from PIL import Image


def main(logo_dir, save_dir, target_height):
    """Resize image in logo_dir to match target_height while preserving aspect ratio"""
    filenames = os.listdir(logo_dir)
    for filename in filenames:
        inpath = os.path.join(logo_dir, filename)
        with Image.open (inpath) as img:
            squared = make_square_with_padding(img)
            resized = resize_img(squared, target_height)
        
        # save output
        os.makedirs(save_dir, exist_ok=True)
        outpath = os.path.join(save_dir, filename)
        resized.save(outpath)


def resize_img(img, target_height):
    """Resize PIL image to match target_height"""
    width, height = img.size
    coef = target_height / height
    resized_dimensions = (int(width * coef), int(height * coef))
    resized = img.resize(resized_dimensions)
    return resized   


def make_square_with_padding(img):
    """Add white padding to make it square so that logos can have similar size after resize"""
    width, height = img.size
    maxlen = max(width, height)
    result = Image.new(img.mode, (maxlen, maxlen), (255,255,255)).convert('RGBA')
    if width > height:
        left, top = 0, maxlen // 2 - height // 2
    else:
        left, top = maxlen // 2 - height // 2, 0
    result.paste(img, (left, top))
    return result




if __name__ == '__main__':
    logo_dir = "assets/img/clients"
    save_dir = "assets/img/clients_"
    target_height= 128
    main(logo_dir, save_dir, target_height)